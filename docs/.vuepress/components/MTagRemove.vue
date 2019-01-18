<template>
  <section class="tag-demo">
    <coding-box title="" :code="code">
      <w-tag v-for="(tag, index) in tags" :key="index"
             :closable="tag.closable"
             :type="tag.type" @close="handleClose(index)">{{tag.name}}</w-tag>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          tags: [{
            closable: true,
            type: '',
            name: '标签一'
          }, {
            closable: true,
            type: 'success',
            name: '标签二'
          }, {
            closable: true,
            type: 'info',
            name: '标签三'
          }, {
            closable: true,
            type: 'warning',
            name: '标签四'
          }, {
            closable: true,
            type: 'error',
            name: '标签五'
          }],
          code: `<w-tag v-for="(tag, index) in tags" :key="index"
       :closable="tag.closable"
       :type="tag.type" @close="handleClose(index)">{{tag.name}}</w-tag>
<script>
  export default {
    data () {
        return {
          tags: [{
            closable: true,
            type: '',
            name: '标签一'
          }, {
            closable: true,
            type: 'success',
            name: '标签二'
          }, {
            closable: true,
            type: 'info',
            name: '标签三'
          }, {
            closable: true,
            type: 'warning',
            name: '标签四'
          }, {
            closable: true,
            type: 'error',
            name: '标签五'
          }]
        }
      },
    methods: {
      handleClose (index) {
        this.tags.splice(index, 1)
      }
    }
  }
<\/script>
`
        }
    },
    methods: {
      handleClose (index) {
        this.tags.splice(index, 1)
      }
    }
}
</script>
<style lang="scss">
.tag-demo {
  .w-tag+.w-tag {
    margin-left: 5px;
  }
}
</style>