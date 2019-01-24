<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-button :plain="true" @click="open2">成功</w-button>
      <w-button :plain="true" @click="open3">警告</w-button>
      <w-button :plain="true" @click="open">消息</w-button>
      <w-button :plain="true" @click="open4">错误</w-button>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-button :plain="true" @click="open2">成功</w-button>
<w-button :plain="true" @click="open3">警告</w-button>
<w-button :plain="true" @click="open">消息</w-button>
<w-button :plain="true" @click="open4">错误</w-button>`
      }
    },
    methods: {
      open() {
        this.$message({
          message: '这是一条消息提示',
          showClose: true
        });
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          showClose: true,
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          showClose: true,
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
        this.$message.error.showClose = true
      }
    }
  }
</script>
<style lang="scss">
  .tag-demo {
  }
</style>
