<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-steps :active="1">
        <w-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></w-step>
        <w-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></w-step>
        <w-step title="步骤 3" description="这段就没那么长了"></w-step>
      </w-steps>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-steps :active="1">
    <w-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></w-step>
    <w-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></w-step>
    <w-step title="步骤 3" description="这段就没那么长了"></w-step>
  </w-steps>` ,
      }
    }
  }
</script>
<style lang="scss">
</style>
