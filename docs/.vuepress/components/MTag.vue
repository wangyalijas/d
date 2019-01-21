<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tag>标签一</w-tag>
      <w-tag type="success">标签二</w-tag>
      <w-tag type="info">标签三</w-tag>
      <w-tag type="warning">标签四</w-tag>
      <w-tag type="error">标签五</w-tag>
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
<w-tag type="error">标签五</w-tag>`
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