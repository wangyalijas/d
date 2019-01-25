<template>
  <section class="menu-aside-demo">
    <coding-box :code="code">
      <w-menu default-active="2" @open="handleOpen" @close="handleClose">
      <w-submenu index="1">
        <template slot="title">
          <i class="w-icon-location"></i>
          <span>导航一</span>
        </template>
        <w-menu-item-group>
          <template slot="title">分组一</template>
          <w-menu-item index="1-1">选项1</w-menu-item>
          <w-menu-item index="1-2">选项2</w-menu-item>
        </w-menu-item-group>
        <w-menu-item-group title="分组2">
          <w-menu-item index="1-3">选项3</w-menu-item>
        </w-menu-item-group>
        <w-submenu index="1-4">
          <template slot="title">选项4</template>
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
  <w-menu default-active="2" @open="handleOpen" @close="handleClose">
      <w-submenu index="1">
        <template slot="title">
          <i class="w-icon-location"></i>
          <span>导航一</span>
        </template>
        <w-menu-item-group>
          <template slot="title">分组一</template>
          <w-menu-item index="1-1">选项1</w-menu-item>
          <w-menu-item index="1-2">选项2</w-menu-item>
        </w-menu-item-group>
        <w-menu-item-group title="分组2">
          <w-menu-item index="1-3">选项3</w-menu-item>
        </w-menu-item-group>
        <w-submenu index="1-4">
          <template slot="title">选项4</template>
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
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
<\/script>`
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
.menu-aside-demo {
    .slot-wrapper > ul.w-menu {
      width: 30%;
    }
}
</style>