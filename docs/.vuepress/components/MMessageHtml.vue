<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-button :plain="true" @click="openHTML">使用 HTML 片段</w-button>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-button :plain="true" @click="openHTML">使用 HTML 片段</w-button>`
      }
    },
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>
<style lang="scss">
</style>
