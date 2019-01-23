<template>
  <section class="button-demo__disable">
    <coding-box :code="code">
      <section class="demo-wrapper">
        <w-button plain disabled>默认按钮</w-button>
        <w-button type="primary" plain disabled>主要按钮</w-button>
        <w-button type="success" plain disabled>成功按钮</w-button>
        <w-button type="info" plain disabled>信息按钮</w-button>
        <w-button type="warning" plain disabled>警告按钮</w-button>
        <w-button type="danger" plain disabled>危险按钮</w-button>
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
  <w-button plain disabled>默认按钮</w-button>
  <w-button type="primary" plain disabled>主要按钮</w-button>
  <w-button type="success" plain disabled>成功按钮</w-button>
  <w-button type="info" plain disabled>信息按钮</w-button>
  <w-button type="warning" plain disabled>警告按钮</w-button>
  <w-button type="danger" plain disabled>危险按钮</w-button>
</template>
`
        }
    }
}
</script>
<style lang="scss">
</style>
