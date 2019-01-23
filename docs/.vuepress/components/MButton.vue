<template>
  <section class="button-demo">
    <coding-box :code="code">
      <section class="demo-wrapper">
        <h1 class="label">默认样式</h1>
        <w-button>默认按钮</w-button>
        <w-button type="primary">主要按钮</w-button>
        <w-button type="success">成功按钮</w-button>
        <w-button type="info">信息按钮</w-button>
        <w-button type="warning">警告按钮</w-button>
        <w-button type="danger">危险按钮</w-button>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">轻量按钮 (plain)</h1>
        <w-button plain>默认按钮</w-button>
        <w-button type="primary" plain>主要按钮</w-button>
        <w-button type="success" plain>成功按钮</w-button>
        <w-button type="info" plain>信息按钮</w-button>
        <w-button type="warning" plain>警告按钮</w-button>
        <w-button type="danger" plain>危险按钮</w-button>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">圆角按钮 (round)</h1>
        <w-button round>默认按钮</w-button>
        <w-button type="primary" round>主要按钮</w-button>
        <w-button type="success" round>成功按钮</w-button>
        <w-button type="info" round>信息按钮</w-button>
        <w-button type="warning" round>警告按钮</w-button>
        <w-button type="danger" round>危险按钮</w-button>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">圆形按钮 (circle)</h1>
        <w-button icon="w-icon-search" circle></w-button>
        <w-button type="primary" icon="w-icon-edit" circle></w-button>
        <w-button type="success" icon="w-icon-check" circle></w-button>
        <w-button type="info" icon="w-icon-message" circle></w-button>
        <w-button type="warning" icon="w-icon-star-off" circle></w-button>
        <w-button type="danger" icon="w-icon-delete" circle></w-button>
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
  <section class="demo-wrapper">
    <h1 class="label">默认样式</h1>
    <w-button>默认按钮</w-button>
    <w-button type="primary">主要按钮</w-button>
    <w-button type="success">成功按钮</w-button>
    <w-button type="info">信息按钮</w-button>
    <w-button type="warning">警告按钮</w-button>
    <w-button type="danger">危险按钮</w-button>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">轻量按钮 (plain)</h1>
    <w-button plain>默认按钮</w-button>
    <w-button type="primary" plain>主要按钮</w-button>
    <w-button type="success" plain>成功按钮</w-button>
    <w-button type="info" plain>信息按钮</w-button>
    <w-button type="warning" plain>警告按钮</w-button>
    <w-button type="danger" plain>危险按钮</w-button>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">圆角按钮 (round)</h1>
    <w-button round>默认按钮</w-button>
    <w-button type="primary" round>主要按钮</w-button>
    <w-button type="success" round>成功按钮</w-button>
    <w-button type="info" round>信息按钮</w-button>
    <w-button type="warning" round>警告按钮</w-button>
    <w-button type="danger" round>危险按钮</w-button>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">圆形按钮 (circle)</h1>
    <w-button icon="w-icon-search" circle></w-button>
    <w-button type="primary" icon="w-icon-edit" circle></w-button>
    <w-button type="success" icon="w-icon-check" circle></w-button>
    <w-button type="info" icon="w-icon-message" circle></w-button>
    <w-button type="warning" icon="w-icon-star-off" circle></w-button>
    <w-button type="danger" icon="w-icon-delete" circle></w-button>
  </section>
</template>
`
        }
    }
}
</script>
<style lang="scss">
.button-demo {
  .demo-wrapper {
    margin-bottom: 10px;
    h1.label {
      margin: 0 0 15px 0;
      padding: 10px 0;
      font-size: 16px;
      font-weight: normal;
      border-bottom: 1px dashed #eee;
    }
  }
}
</style>
