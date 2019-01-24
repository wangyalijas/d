<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tree
        :data="data2"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">
      </w-tree>

      <div class="buttons">
        <w-button @click="getCheckedNodes">通过 node 获取</w-button>
        <w-button @click="getCheckedKeys">通过 key 获取</w-button>
        <w-button @click="setCheckedNodes">通过 node 设置</w-button>
        <w-button @click="setCheckedKeys">通过 key 设置</w-button>
        <w-button @click="resetChecked">清空</w-button>
      </div>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-tree
        :data="data2"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">
</w-tree>`,
        data2: [{
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
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    }
  }
</script>
<style lang="scss">
</style>
