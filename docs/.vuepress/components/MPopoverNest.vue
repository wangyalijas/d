<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-popover
        placement="top"
        width="160"
        v-model="visible2">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <w-button size="mini" type="text" @click="visible2 = false">取消</w-button>
          <w-button type="primary" size="mini" @click="visible2 = false">确定</w-button>
        </div>
        <w-button slot="reference">删除</w-button>
      </w-popover>
    </coding-box>
  </section>
</template>

<script>
  import WButton from '../../../packages/components/button/src/button'
  export default {
    components: {WButton},
    data () {
      return {
        code: `<w-popover
        placement="top"
        width="160"
        v-model="visible2">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <w-button size="mini" type="text" @click="visible2 = false">取消</w-button>
          <w-button type="primary" size="mini" @click="visible2 = false">确定</w-button>
        </div>
        <w-button slot="reference">删除</w-button>
      </w-popover>`,
        visible2: false
      }
    }
  }
</script>
<style lang="scss">
</style>
