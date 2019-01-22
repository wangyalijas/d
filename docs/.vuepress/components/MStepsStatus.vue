<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-steps :space="200" :active="1" finish-status="success">
        <w-step title="已完成"></w-step>
        <w-step title="进行中"></w-step>
        <w-step title="步骤 3"></w-step>
      </w-steps>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `    <w-step :space="200" :active="1" finish-status="success">
  <w-step title="已完成"></w-step>
  <w-step title="进行中"></w-step>
  <w-step title="步骤 3"></w-step>
</w-step>` ,
        active: 0
      }
    }
  }
</script>
<style lang="scss">
</style>
