<template>
  <section class="tag-demo">
    <coding-box
      description="正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了append-to-body属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。"
      :code="code">
      <!-- Table -->
      <w-button type="text" @click="outerVisible = true">点击打开外层 Dialog</w-button>

      <w-dialog title="外层 Dialog" :visible.sync="outerVisible">
        <w-dialog
          width="30%"
          title="内层 Dialog"
          :visible.sync="innerVisible"
          append-to-body>
        </w-dialog>
        <div slot="footer" class="dialog-footer">
          <w-button @click="outerVisible = false">取 消</w-button>
          <w-button type="primary" @click="innerVisible = true">打开内层 Dialog</w-button>
        </div>
      </w-dialog>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-button type="text" @click="dialogTableVisible = true">打开嵌套内容的 Dialog</w-button>
<w-dialog title="收货地址" :visible.sync="dialogTableVisible">
   <div>自定义内容</div>
</w-dialog>`,
        outerVisible: false,
        innerVisible: false
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
<style lang="scss">
</style>
