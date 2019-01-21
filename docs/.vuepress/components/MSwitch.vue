<template>
  <coding-box :code="code">
    <w-switch v-model="toggle"></w-switch>
  </coding-box>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-switch v-model="toggle"></w-switch>`,
        toggle: false,
      }
    }
  }
</script>

<style scoped>

</style>
