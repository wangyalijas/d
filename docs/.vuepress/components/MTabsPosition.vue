<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-tabs v-model="activeName" tab-position="left" @tab-click="handleClick">
        <w-tab-pane label="用户管理" name="first">用户管理</w-tab-pane>
        <w-tab-pane label="配置管理" name="second">配置管理</w-tab-pane>
        <w-tab-pane label="角色管理" name="third">角色管理</w-tab-pane>
        <w-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</w-tab-pane>
      </w-tabs>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-tabs v-model="activeName" tab-position="left" @tab-click="handleClick">
    <w-tab-pane label="用户管理" name="first">用户管理</w-tab-pane>
    <w-tab-pane label="配置管理" name="second">配置管理</w-tab-pane>
    <w-tab-pane label="角色管理" name="third">角色管理</w-tab-pane>
    <w-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</w-tab-pane>
</w-tabs>`,
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="scss">
  .tag-demo {
    .w-tag+.w-tag {
      margin-left: 5px;
    }
  }
</style>
