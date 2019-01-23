<template>
  <section class="input-input-demo__size">
    <coding-box :code="code" description="通过设置 size 属性可以使数字输入框拥有不同尺寸, 尺寸有默认大小与其他可选 medium / small / mini">
      <w-input-number v-model="value1" :min="1" :max="10"></w-input-number>
      <w-input-number v-model="value2" :min="1" :max="10" size="medium"></w-input-number>
      <w-input-number v-model="value3" :min="1" :max="10" size="small"></w-input-number>
      <w-input-number v-model="value4" :min="1" :max="10" size="mini"></w-input-number>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          code: `<template>
  <w-input-number v-model="value1" :min="1" :max="10"></w-input-number>
  <w-input-number v-model="value2" :min="1" :max="10" size="medium"></w-input-number>
  <w-input-number v-model="value3" :min="1" :max="10" size="small"></w-input-number>
  <w-input-number v-model="value4" :min="1" :max="10" size="mini"></w-input-number>
</template>
<script>
  export default {
    data () {
      return {
          value1: '',
          value2: '',
          value3: '',
          value4: ''
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
.input-input-demo__size {
  .w-input-number+.w-input-number {
    margin-left: 10px;
  }
}
</style>