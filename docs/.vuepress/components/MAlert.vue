<template>
  <section class="alert-demo">
    <coding-box :code="code">
      <w-alert title="成功的提示内容" type="success"></w-alert>
      <w-alert title="警告的提示内容" type="warning"></w-alert>
      <w-alert title="错误的提示内容" type="error"></w-alert>
      <w-alert title="普通的提示内容" type="info"></w-alert>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-alert title="成功的提示内容" type="success"></w-alert>
<w-alert title="警告的提示内容" type="warning"></w-alert>
<w-alert title="错误的提示内容" type="error"></w-alert>
<w-alert title="普通的提示内容" type="info"></w-alert>`
        }
    }
}
</script>
<style lang="scss">
.alert-demo {
    .w-alert+.w-alert {
        margin-top: 15px;
    }
}
</style>