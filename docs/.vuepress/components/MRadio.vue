<template>
  <section class="radio-demo">
    <coding-box :code="code">
      <w-radio v-model="radio" label="1">备选项</w-radio>
      <w-radio v-model="radio" label="2">备选项</w-radio>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-radio v-model="radio" label="1">备选项</w-radio>
<w-radio v-model="radio" label="2">备选项</w-radio>`,
          radio: '1',
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
