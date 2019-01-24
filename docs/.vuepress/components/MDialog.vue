<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-button type="text" @click="dialogVisible = true">点击打开 Dialog</w-button>

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
      </w-dialog>

    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-tabs v-model="activeName" @tab-click="handleClick">
        <w-tab-pane label="用户管理" name="first">用户管理</w-tab-pane>
        <w-tab-pane label="配置管理" name="second">配置管理</w-tab-pane>
        <w-tab-pane label="角色管理" name="third">角色管理</w-tab-pane>
        <w-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</w-tab-pane>
</w-tabs>`,
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
  .tag-demo {
    .w-tag+.w-tag {
      margin-left: 5px;
    }
  }
</style>
