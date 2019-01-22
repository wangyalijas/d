<template>
  <section class="switch-demo">
    <coding-box :code="code">
      <w-switch v-model="toggle"></w-switch>
    </coding-box>
  </section>
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

<style lang="scss">

</style>
