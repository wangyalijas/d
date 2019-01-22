<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <div style="height: 300px;">
        <w-steps direction="vertical" :active="1">
          <w-step title="步骤 1"></w-step>
          <w-step title="步骤 2"></w-step>
          <w-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></w-step>
        </w-steps>
      </div>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<div style="height: 300px;">
        <w-steps direction="vertical" :active="1">
          <w-step title="步骤 1"></w-step>
          <w-step title="步骤 2"></w-step>
          <w-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></w-step>
        </w-steps>
      </div>` ,
      }
    }
  }
</script>
<style lang="scss">
</style>
