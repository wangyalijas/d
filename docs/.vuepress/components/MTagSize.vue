<template>
  <section class="tag-demo">
    <coding-box title="" :code="code">
      <w-tag>常规标签</w-tag>
      <w-tag size="medium">中号标签</w-tag>
      <w-tag size="small">小号标签</w-tag>
      <w-tag size="mini">迷你标签</w-tag>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-tag>常规标签</w-tag>
<w-tag size="medium">中号标签</w-tag>
<w-tag size="small">小号标签</w-tag>
<w-tag size="mini">迷你标签</w-tag>`
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