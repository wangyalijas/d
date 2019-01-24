<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tooltip content="Top center" placement="top">
        <w-button>Dark</w-button>
      </w-tooltip>
      <w-tooltip content="Bottom center" placement="bottom" effect="light">
        <w-button>Light</w-button>
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
        code: `<w-tooltip content="Top center" placement="top">
        <w-button>Dark</w-button>
      </w-tooltip>
      <w-tooltip content="Bottom center" placement="bottom" effect="light">
        <w-button>Light</w-button>
      </w-tooltip>`,
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
