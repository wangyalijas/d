<template>
  <coding-box title="基础用法" :code="code1">
    <w-switch v-model="toggle"></w-switch>
  </coding-box>
</template>

<script>
  export default {
    data () {
      return {
        code1: `<w-switch v-model="toggle"></w-switch>`,
        toggle: false,
      }
    }
  }
</script>

<style scoped>

</style>
