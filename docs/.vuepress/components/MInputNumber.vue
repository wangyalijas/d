<template>
  <section class="input-number-demo">
    <coding-box :code="code">
      <w-input-number v-model="value" :min="1" :max="5" @change="handleChange"></w-input-number>
      <span class="label">监听值变化: {{times}}次</span>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: 2,
          times: 0,
          code: `<template>
  <w-input-number v-model="value" :min="1" :max="5"
                  @change="handleChange"></w-input-number>
  <span class="label">监听值变化: {{times}}次</span>
</template>
<script>
  export default {
    data () {
      return {
          value: 2,
          times: 0
      }
    },
    methods: {
      handleChange () {
        this.times += 1
      }
    }
  }
<\/script>
`
        }
    },
    methods: {
      handleChange () {
        this.times += 1
      }
    }
}
</script>
<style lang="scss">
.input-number-demo {
  span.label {
    margin-left: 20px;
  }
}
</style>
