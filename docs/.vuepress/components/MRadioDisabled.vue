<template>
  <section class="radio-demo">
    <coding-box :code="code">
      <w-radio v-model="radio" label="禁用" disabled>备选项</w-radio>
      <w-radio v-model="radio" label="选中且禁用" disabled>选中且禁用</w-radio>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-radio v-model="radio" label="禁用" disabled>备选项</w-radio>
<w-radio v-model="radio" label="选中且禁用" disabled>选中且禁用</w-radio>`,
          radio: '选中且禁用',
        }
    }
}
</script>
<style lang="scss">
.radio-demo {
  .w-radio+.w-radio {
    margin-left: 5px;
  }
}
</style>
