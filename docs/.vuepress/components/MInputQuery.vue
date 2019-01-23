<template>
  <section class="input-demo__query">
    <coding-box :code="code">
      <section class="demo-wrapper">
        <h1 class="label">激活时建议:</h1>
        <w-input v-model="value1" placeholder="请输入..." size="medium"></w-input>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">输入时建议:</h1>
        <w-input v-model="value2" placeholder="请输入..." size="medium"></w-input>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">自定义模板:</h1>
        <w-input v-model="value3" placeholder="请输入..." size="medium"></w-input>
      </section>
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
          code: `
<template>
  <w-input v-model="value" placeholder="请输入..."></w-input>
</template>
<script>
  export default {
    data () {
      return {
          value: ''
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
.input-demo__query {
  .slot-wrapper {
    overflow: auto;
  }
    .demo-wrapper {
      float: left;
      width: calc(100% / 3);
      h1.label {
        font-weight: normal;
        font-size: 14px;
      }
      .w-input {
        width: 180px;
      }
    }
}
</style>