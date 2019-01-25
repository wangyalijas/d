<template>
  <section class="menu-demo">
    <coding-box :code="code">
      <w-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <w-radio-button :label="false">展开</w-radio-button>
  <w-radio-button :label="true">收起</w-radio-button>
</w-radio-group>
<w-menu default-active="1-4-1" class="w-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <w-submenu index="1">
    <template slot="title">
      <i class="w-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <w-menu-item-group>
      <span slot="title">分组一</span>
      <w-menu-item index="1-1">选项1</w-menu-item>
      <w-menu-item index="1-2">选项2</w-menu-item>
    </w-menu-item-group>
    <w-menu-item-group title="分组2">
      <w-menu-item index="1-3">选项3</w-menu-item>
    </w-menu-item-group>
    <w-submenu index="1-4">
      <span slot="title">选项4</span>
      <w-menu-item index="1-4-1">选项1</w-menu-item>
    </w-submenu>
  </w-submenu>
  <w-menu-item index="2">
    <i class="w-icon-menu"></i>
    <span slot="title">导航二</span>
  </w-menu-item>
  <w-menu-item index="3" disabled>
    <i class="w-icon-document"></i>
    <span slot="title">导航三</span>
  </w-menu-item>
  <w-menu-item index="4">
    <i class="w-icon-setting"></i>
    <span slot="title">导航四</span>
  </w-menu-item>
</w-menu>
    </coding-box>
  </section>
</template>

<script>
export default {
    data() {
      return {
        code: `<template>
  <w-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <w-radio-button :label="false">展开</w-radio-button>
  <w-radio-button :label="true">收起</w-radio-button>
</w-radio-group>
<w-menu default-active="1-4-1" class="w-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <w-submenu index="1">
    <template slot="title">
      <i class="w-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <w-menu-item-group>
      <span slot="title">分组一</span>
      <w-menu-item index="1-1">选项1</w-menu-item>
      <w-menu-item index="1-2">选项2</w-menu-item>
    </w-menu-item-group>
    <w-menu-item-group title="分组2">
      <w-menu-item index="1-3">选项3</w-menu-item>
    </w-menu-item-group>
    <w-submenu index="1-4">
      <span slot="title">选项4</span>
      <w-menu-item index="1-4-1">选项1</w-menu-item>
    </w-submenu>
  </w-submenu>
  <w-menu-item index="2">
    <i class="w-icon-menu"></i>
    <span slot="title">导航二</span>
  </w-menu-item>
  <w-menu-item index="3" disabled>
    <i class="w-icon-document"></i>
    <span slot="title">导航三</span>
  </w-menu-item>
  <w-menu-item index="4">
    <i class="w-icon-setting"></i>
    <span slot="title">导航四</span>
  </w-menu-item>
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
        isCollapse: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
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