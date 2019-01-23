<template>
  <section class="input-number-demo__position">
    <coding-box :code="code" description="通过 controls-position 属性可以控制按钮的位置, 除默认值外, 可选值有 right">
      <w-input-number v-model="value1" size="medium"></w-input-number>
      <w-input-number v-model="value2" size="medium" controls-position="right"></w-input-number>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value1: '',
          value2: '',
          code: `<template>
  <w-input-number v-model="value1" size="medium"></w-input-number>
  <w-input-number v-model="value2" size="medium" controls-position="right"></w-input-number>
</template>
<script>
  export default {
    data () {
      return {
          value1: '',
          value2: ''
      }
    }
  }
<\/script>
`
        }
    }
}
</script>
<style lang="scss">
.input-number-demo__position {
  .w-input-number+.w-input-number {
    margin-left: 10px;
  }
}
</style>
