<template>
  <section class="checkbox-demo">
    <coding-box :code="code">
      <w-checkbox v-model="checked1" disabled>备选项1</w-checkbox>
      <w-checkbox v-model="checked2" disabled>备选项</w-checkbox>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-checkbox v-model="checked1" disabled>备选项1</w-checkbox>
<w-checkbox v-model="checked2" disabled>备选项</w-checkbox>`,
          checked1: false,
          checked2: true
        }
    }
}
</script>
<style lang="scss">
.checkbox-demo {
}
</style>
