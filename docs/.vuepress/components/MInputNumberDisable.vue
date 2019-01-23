<template>
  <section class="input-demo">
    <coding-box :code="code" description="通过设置 disabled 属性, 设置其为 true 则将禁用输入框">
      <w-input-number v-model="value" :disabled="true"></w-input-number>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: 233,
          code: `<template>
  <w-input-number v-model="value" :disabled="true"></w-input-number>
</template>
<script>
  export default {
    data () {
      return {
          value: 233
      }
    }
  }
<\/script>
`
        }
    }
}
</script>
