<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <div class="custom-tree-container">
        <div class="block">
          <p>使用 render-content</p>
          <w-tree
            :data="data4"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </w-tree>
        </div>
        <div class="block">
          <p>使用 scoped slot</p>
          <w-tree
            :data="data5"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <w-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </w-button>
          <w-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </w-button>
        </span>
      </span>
          </w-tree>
        </div>
      </div>
    </coding-box>
  </section>
</template>

<script>
  let id = 1000;
  export default {
    data () {
      const data = [
        {
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        code: `<div class="custom-tree-container">
    <div class="block">
      <p>使用 render-content</p>
      <w-tree
        :data="data4"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent">
      </w-tree>
    </div>
    <div class="block">
      <p>使用 scoped slot</p>
      <w-tree
        :data="data5"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false">
  <span class="custom-tree-node" slot-scope="{ node, data }">
    <span>{{ node.label }}</span>
    <span>
      <w-button
        type="text"
        size="mini"
        @click="() => append(data)">
        Append
      </w-button>
      <w-button
        type="text"
        size="mini"
        @click="() => remove(node, data)">
        Delete
      </w-button>
    </span>
  </span>
      </w-tree>
    </div>
  </div>`,
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data))
      }
    },
    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
          <span>{node.label}</span>
        <span>
        <w-button size="mini" type="text" on-click={ () => this.append(data) }>Append</w-button>
        <w-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</w-button>
        </span>
        </span>);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .custom-tree-container {
    display: -ms-flexbox;
    display: flex;
    margin: -24px;
    .block{
      flex: 1;
      padding: 8px 24px 24px;
    }
    .block:first-child {
      border-right: 1px solid #eff2f6;
    }
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
