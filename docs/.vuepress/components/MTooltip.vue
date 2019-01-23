<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tooltip content="Top center" placement="top">
        <button>Dark</button>
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
        code: ` <w-tooltip content="Top center" placement="top">
        <button>Dark</button>
      </w-tooltip>`,
      }
    }
  }
</script>
<style lang="scss">
</style>
