<template>
  <coding-box title="基础用法" :code="code1">
      <w-tag>标签一</w-tag>
      <w-tag type="success">标签二</w-tag>
      <w-tag type="info">标签三</w-tag>
      <w-tag type="warning">标签四</w-tag>
      <w-tag type="error">标签五</w-tag>
  </coding-box>
</template>

<script>
export default {
    data () {
        return {
            code1: `<w-tag>标签一</w-tag>
<w-tag type="success">标签二</w-tag>
<w-tag type="info">标签三</w-tag>
<w-tag type="warning">标签四</w-tag>
<w-tag type="error">标签五</w-tag>`
        }
    }
}
</script>