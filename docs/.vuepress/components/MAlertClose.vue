<template>
  <section class="alert-demo">
    <coding-box :code="code">
      <w-alert close-text="关闭" title="文本内容作为关闭按钮" type="success"></w-alert>
      <w-alert title="关闭回调函数" type="warning" @close="handleClose"></w-alert>
      <w-alert :closable="false" title="隐藏关闭按钮" type="error"></w-alert>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-alert close-text="关闭" title="文本内容作为关闭按钮" type="success"></w-alert>
<w-alert title="关闭回调函数" type="warning" @close="handleClose"></w-alert>
<w-alert :closable="false" title="隐藏关闭按钮" type="info"></w-alert>`
        }
    },
    methods: {
        handleClose () {
            alert('关闭了!')
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