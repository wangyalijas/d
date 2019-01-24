<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-button :plain="true" @click="open">打开消息提示</w-button>
      <w-button :plain="true" @click="openVn">VNode</w-button>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: ` <w-button :plain="true" @click="open">打开消息提示</w-button>
<w-button :plain="true" @click="openVn">VNode</w-button>`
      }
    },
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
<style lang="scss">
  .tag-demo {
  }
</style>
