<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <!-- Table -->
      <w-button type="text" @click="dialogVisible = true">打开嵌套内容的 Dialog</w-button>

      <w-dialog title="收货地址" :visible.sync="dialogVisible">
        <div>自定义内容</div>
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
        dialogVisible: false
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
