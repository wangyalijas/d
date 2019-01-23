<template>
  <section class="input-demo">
    <coding-box :code="code" description="通过 rows 属性可以规定文本域的行数.">
      <w-input v-model="value" placeholder="这是一段3行高的文本域..."
               type="textarea" :rows="3"></w-input>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: '',
          code: `
<template>
  <w-input v-model="value" placeholder="这是一段3行高的文本域..."
           type="textarea" :rows="3"></w-input>
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
        width: 180px;
    }
}
</style>