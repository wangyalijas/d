<template>
  <section class="input-demo">
    <coding-box :code="code" description="你可以通过改变size来获得不同大小的input输入框, 除了默认的尺寸,你还可以选择medium / small / mini等.">
      <w-input v-model="value1" placeholder="请输入..."></w-input>
      <w-input v-model="value2" size="medium" placeholder="中号输入框..."></w-input>
      <w-input v-model="value3" size="small" placeholder="小号输入框..."></w-input>
      <w-input v-model="value4" size="mini" placeholder="迷你输入框..."></w-input>
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
  <w-input v-model="value1" placeholder="请输入..."></w-input>
  <w-input v-model="value2" size="medium" placeholder="中号输入框..."></w-input>
  <w-input v-model="value3" size="small" placeholder="小号输入框..."></w-input>
  <w-input v-model="value4" size="mini" placeholder="迷你输入框..."></w-input>
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
.input-demo {
    .w-input {
        width: 165px;
    }
    .w-input+.w-input {
      margin-left: 10px;
    }
}
</style>