<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-button type="text" @click="dialogVisible = true">点击打开 Dialog</w-button>

      <w-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        center
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <w-button @click="dialogVisible = false">取 消</w-button>
          <w-button type="primary" @click="dialogVisible = false">确 定</w-button>
        </span>
      </w-dialog>

    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-button type="text" @click="dialogVisible = true">点击打开 Dialog</w-button>
<w-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <w-button @click="dialogVisible = false">取 消</w-button>
    <w-button type="primary" @click="dialogVisible = false">确 定</w-button>
  </span>
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
