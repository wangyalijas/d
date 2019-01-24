<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
        <w-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</w-button>
      </w-tooltip>
    </coding-box>
  </section>
</template>

<script>
  import WTooltip from '../../../packages/components/tooltip/src/main'
  export default {
    components: {WTooltip},
    data () {
      return {
        code: `<w-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
        <w-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</w-button>
      </w-tooltip>`,
        disabled: false
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
