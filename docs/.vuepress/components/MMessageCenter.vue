<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-button :plain="true" @click="openCenter">文字居中</w-button>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-button :plain="true" @click="openCenter">文字居中</w-button>`
      }
    },
    methods: {
      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      }
    }
  }
</script>
<style lang="scss">
  .tag-demo {
  }
</style>
