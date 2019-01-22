<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-steps :active="2" align-center>
        <w-step title="步骤1" description="这是一段很长很长很长的描述性文字"></w-step>
        <w-step title="步骤2" description="这是一段很长很长很长的描述性文字"></w-step>
        <w-step title="步骤3" description="这是一段很长很长很长的描述性文字"></w-step>
        <w-step title="步骤4" description="这是一段很长很长很长的描述性文字"></w-step>
      </w-steps>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-steps :active="2" align-center>
    <w-step title="步骤1" description="这是一段很长很长很长的描述性文字"></w-step>
    <w-step title="步骤2" description="这是一段很长很长很长的描述性文字"></w-step>
    <w-step title="步骤3" description="这是一段很长很长很长的描述性文字"></w-step>
    <w-step title="步骤4" description="这是一段很长很长很长的描述性文字"></w-step>
  </w-steps>` ,
      }
    }
  }
</script>
<style lang="scss">
</style>
