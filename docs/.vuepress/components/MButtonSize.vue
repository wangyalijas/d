<template>
  <section class="button-demo">
    <coding-box :code="code">
      <section class="demo-wrapper">
        <w-button>默认按钮</w-button>
        <w-button type="primary" size="medium" round>主要按钮</w-button>
        <w-button type="success" size="small" round>成功按钮</w-button>
        <w-button type="info" size="mini" round>信息按钮</w-button>
      </section>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: '',
          code: `<template>
  <w-button>默认按钮</w-button>
  <w-button type="primary" size="medium" round>主要按钮</w-button>
  <w-button type="success" size="small" round>成功按钮</w-button>
  <w-button type="info" size="mini" round>信息按钮</w-button>
</template>
`
        }
    }
}
</script>
<style lang="scss">
</style>
