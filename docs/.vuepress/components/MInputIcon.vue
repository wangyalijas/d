<template>
  <section class="input-demo__icon">
    <coding-box :code="code" description="具体的图标(icon)的classname请参见Icon图标详情页.">
      <w-input v-model="value1" prefix-icon="w-icon-search" placeholder="请输入内容"></w-input>
      <w-input v-model="value2" suffix-icon="w-icon-search" placeholder="请输入内容"></w-input>
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
  <w-input v-model="value1" prefix-icon="w-icon-search" placeholder="请输入内容"></w-input>
  <w-input v-model="value2" suffix-icon="w-icon-search" placeholder="请输入内容"></w-input>
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
.input-demo__icon {
    .w-input {
        width: 180px;
    }
    .w-input+.w-input {
      margin-left: 10px;
    }
}
</style>