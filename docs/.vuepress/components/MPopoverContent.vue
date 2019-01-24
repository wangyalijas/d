<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-popover
        placement="right"
        width="400"
        trigger="click">
        <div>表格</div>
        <w-button slot="reference">click 激活</w-button>
      </w-popover>
    </coding-box>
  </section>
</template>

<script>
  import WButton from '../../../packages/components/button/src/button'
  export default {
    components: {WButton},
    data () {
      return {
        code: ` <w-popover
        placement="right"
        width="400"
        trigger="click">
        <div>表格</div>
        <w-button slot="reference">click 激活</w-button>
      </w-popover>`,
        visible: false
      }
    }
  }
</script>
<style lang="scss">
</style>
