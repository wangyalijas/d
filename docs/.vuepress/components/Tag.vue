<template>
  <coding-box title="基础用法" :code="code1">
      <w-tag>标签</w-tag>
  </coding-box>
</template>

<script>
export default {
    data () {
        return {
            code1: `<w-tag>tag</w-tag>`
        }
    }
}
</script>