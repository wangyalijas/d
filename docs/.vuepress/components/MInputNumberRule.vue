<template>
  <section class="input-number-demo__rule">
    <coding-box :code="code" description="通过设置 step 属性可以控制增量, step 与 precision 一起就可以控制数值精度. precision 必须为整数类型.">
      <section class="demo-wrapper">
        <h1 class="label">增量控制:</h1>
        <w-input-number v-model="value1" size="medium" :step="2"></w-input-number>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">精度控制:</h1>
        <w-input-number v-model="value2" size="medium" :precision="2" :step="0.01"></w-input-number>
      </section>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value1: 1,
          value2: 2.33,
          code: `<template>
  <section class="demo-wrapper">
    <h1 class="label">增量控制:</h1>
    <w-input-number v-model="value1"
                    size="medium" :step="2"></w-input-number>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">精度控制:</h1>
    <w-input-number v-model="value2" size="medium"
                    :precision="2" :step="0.01"></w-input-number>
  </section>
</template>
<script>
  export default {
    data () {
      return {
          value1: 1,
          value2: 2.33
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
.input-number-demo__rule {
  .slot-wrapper {
    overflow: auto;
  }
  .demo-wrapper {
    float: left;
    width: 50%;
    h1.label {
      margin: 0 0 10px 0;
      font-weight: normal;
      font-size: 14px;
    }
  }
}
</style>
