<template>
  <section class="input-demo">
    <coding-box :code="code">
      <w-input v-model="value" placeholder="请输入..." :disabled="true"></w-input>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: '',
          code: `<template>
  <w-input v-model="value" placeholder="请输入..." :disabled="true"></w-input>
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
.input-demo {
    .w-input {
        width: 160px;
    }
}
</style>