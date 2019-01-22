<template>
  <section class="radio-demo">
    <coding-box :code="code">
      <w-radio-group v-model="radio2">
        <w-radio :label="3">备选项</w-radio>
        <w-radio :label="6">备选项</w-radio>
        <w-radio :label="9">备选项</w-radio>
      </w-radio-group>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-radio-group v-model="radio2">
  <w-radio :label="3">备选项</w-radio>
  <w-radio :label="6">备选项</w-radio>
  <w-radio :label="9">备选项</w-radio>
</w-radio-group>`,
          radio2: 3
        }
    }
}
</script>
<style lang="scss">
.radio-demo {

}
</style>
