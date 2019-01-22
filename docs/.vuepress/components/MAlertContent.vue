<template>
  <section class="alert-demo">
    <coding-box :code="code" description="只有存在描述内容(description)且bold-title为true时, 标题才会加粗.">
      <w-alert :bold-title="true" title="通知标题" type="success"
               description="这是一段描述性内容, 也许是一段报告详细内容..."></w-alert>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-alert :bold-title="true" title="通知标题" type="success"
          description="这是一段描述性内容, 也许是一段报告详细内容..."></w-alert>`
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