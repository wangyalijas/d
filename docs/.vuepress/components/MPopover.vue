<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <button slot="reference">hover 激活</button>
      </w-popover>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: ` <w-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <button slot="reference">hover 激活</button>
      </w-popover>`
      }
    }
  }
</script>
<style lang="scss">
</style>
