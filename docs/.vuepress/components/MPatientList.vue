<template>
  <section class="radio-demo">
    <coding-box :code="code">
      <w-patient-list>
      </w-patient-list>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-patient-list>
</w-patient-list>`,
      }
    }
  }
</script>
<style lang="scss">
  table {
    margin: 0;
  }
</style>
