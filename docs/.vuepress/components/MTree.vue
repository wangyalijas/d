<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></w-tree>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-tag>标签一</w-tag>
<w-tag type="success">标签二</w-tag>
<w-tag type="info">标签三</w-tag>
<w-tag type="warning">标签四</w-tag>
<w-tag type="error">标签五</w-tag>`,
        data: [
          {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>
<style lang="scss">
</style>
