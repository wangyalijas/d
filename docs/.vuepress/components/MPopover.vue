<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <w-button slot="reference">hover 激活</w-button>
      </w-popover>

      <w-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <w-button slot="reference">click 激活</w-button>
      </w-popover>

      <w-popover
        ref="popover"
        placement="right"
        title="标题"
        width="200"
        trigger="focus"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </w-popover>
      <w-button v-popover:popover>focus 激活</w-button>

      <w-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="manual"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        v-model="visible">
        <w-button slot="reference" @click="visible = !visible">手动激活</w-button>
      </w-popover>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <w-button slot="reference">hover 激活</w-button>
      </w-popover>

      <w-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <w-button slot="reference">click 激活</w-button>
      </w-popover>

      <w-popover
        ref="popover"
        placement="right"
        title="标题"
        width="200"
        trigger="focus"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </w-popover>
      <w-button v-popover:popover>focus 激活</w-button>

      <w-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="manual"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        v-model="visible">
        <w-button slot="reference" @click="visible = !visible">手动激活</w-button>
      </w-popover>`,
        visible: false
      }
    }
  }
</script>
<style lang="scss">
</style>
