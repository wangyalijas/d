<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-steps :active="active" finish-status="success">
        <w-step title="步骤 1"></w-step>
        <w-step title="步骤 2"></w-step>
        <w-step title="步骤 3"></w-step>
      </w-steps>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `    <w-steps :active="active" finish-status="success">
        <w-step title="步骤 1"></w-step>
        <w-step title="步骤 2"></w-step>
        <w-step title="步骤 3"></w-step>
      </w-steps>` ,
        active: 0
      }
    }
  }
</script>
<style lang="scss">
</style>
