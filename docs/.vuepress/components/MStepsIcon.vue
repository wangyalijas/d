<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-steps :active="1">
        <w-step title="步骤 1" icon="w-icon-edit"></w-step>
        <w-step title="步骤 2" icon="w-icon-upload"></w-step>
        <w-step title="步骤 3" icon="w-icon-picture"></w-step>
      </w-steps>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-steps :active="1">
    <w-step title="步骤 1" icon="w-icon-edit"></w-step>
    <w-step title="步骤 2" icon="w-icon-upload"></w-step>
    <w-step title="步骤 3" icon="w-icon-picture"></w-step>
  </w-steps>`,
      }
    }
  }
</script>
<style lang="scss">
</style>
