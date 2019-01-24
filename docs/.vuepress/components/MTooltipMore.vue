<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tooltip placement="top">
        <div slot="content">多行信息<br/>第二行信息</div>
        <w-button>Top center</w-button>
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
        code: ` <w-tooltip placement="top">
        <div slot="content">多行信息<br/>第二行信息</div>
        <w-button>Top center</w-button>
      </w-tooltip>`,
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
