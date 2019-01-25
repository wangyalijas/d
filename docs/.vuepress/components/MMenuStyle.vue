<template>
  <section class="menu-demo">
    <coding-box :code="code" description="可以通过对 background-color , text-color, active-text-color 属性进行设置, 以定制导航的配色方案.">
      <w-menu :default-active="activeIndex" class="w-menu-demo"
              background-color="#545c64" text-color="#fff"
              active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
        <w-menu-item index="1">待办事项</w-menu-item>
        <w-submenu index="2">
            <template slot="title">工作台</template>
            <w-menu-item index="2-1">选项1</w-menu-item>
            <w-menu-item index="2-2">选项2</w-menu-item>
            <w-menu-item index="2-3">选项3</w-menu-item>
            <w-submenu index="2-4">
            <template slot="title">选项4</template>
            <w-menu-item index="2-4-1">选项1</w-menu-item>
            <w-menu-item index="2-4-2">选项2</w-menu-item>
            <w-menu-item index="2-4-3">选项3</w-menu-item>
            </w-submenu>
        </w-submenu>
        <w-menu-item index="3" disabled>消息中心</w-menu-item>
      </w-menu>
    </coding-box>
  </section>
</template>

<script>
export default {
    data() {
      return {
        code: `<template>
  <w-menu :default-active="activeIndex"
          background-color="#545c64" text-color="#fff"
          active-text-color="#ffd04b" 
          mode="horizontal" @select="handleSelect">
    <w-menu-item index="1">待办事项</w-menu-item>
    <w-submenu index="2">
      <template slot="title">工作台</template>
      <w-menu-item index="2-1">选项1</w-menu-item>
      <w-menu-item index="2-2">选项2</w-menu-item>
      <w-menu-item index="2-3">选项3</w-menu-item>
      <w-submenu index="2-4">
        <template slot="title">选项4</template>
        <w-menu-item index="2-4-1">选项1</w-menu-item>
        <w-menu-item index="2-4-2">选项2</w-menu-item>
        <w-menu-item index="2-4-3">选项3</w-menu-item>
      </w-submenu>
    </w-submenu>
   <w-menu-item index="3" disabled>消息中心</w-menu-item>
  </w-menu>
</template>
<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
<\/script>`,
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
}
</script>
<style lang="scss">
.menu-demo {
    .slot-wrapper {
        position: relative;
    }
}
</style>