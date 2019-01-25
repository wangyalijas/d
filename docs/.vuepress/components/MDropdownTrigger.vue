<template>
  <section class="dropdown-trigger-demo">
    <coding-box :code="code" description="展开菜单的触发方式有2种: click, hover(默认).">
     <w-dropdown>
      <span class="w-dropdown-link">
        hover下拉菜单<i class="w-icon-arrow-down w-icon--right"></i>
      </span>
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item disabled>选项三</w-dropdown-item>
        <w-dropdown-item divided>选项四</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>
    <w-dropdown trigger="click">
      <span class="w-dropdown-link">
        click下拉菜单<i class="w-icon-arrow-down w-icon--right"></i>
      </span>
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item disabled>选项三</w-dropdown-item>
        <w-dropdown-item divided>选项四</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <w-dropdown>
    <span class="w-dropdown-link">
      hover下拉菜单<i class="w-icon-arrow-down w-icon--right"></i>
    </span>
    <w-dropdown-menu slot="dropdown">
      <w-dropdown-item>选项一</w-dropdown-item>
      <w-dropdown-item>选项二</w-dropdown-item>
      <w-dropdown-item disabled>选项三</w-dropdown-item>
      <w-dropdown-item divided>选项四</w-dropdown-item>
    </w-dropdown-menu>
  </w-dropdown>
  <w-dropdown trigger="click">
    <span class="w-dropdown-link">
      click下拉菜单<i class="w-icon-arrow-down w-icon--right"></i>
    </span>
    <w-dropdown-menu slot="dropdown">
      <w-dropdown-item>选项一</w-dropdown-item>
      <w-dropdown-item>选项二</w-dropdown-item>
      <w-dropdown-item disabled>选项三</w-dropdown-item>
      <w-dropdown-item divided>选项四</w-dropdown-item>
    </w-dropdown-menu>
  </w-dropdown>
</template>`
        }
    }
}
</script>
<style lang="scss">
.dropdown-trigger-demo {
  .slot-wrapper {
    display: flex;
    justify-content: space-around;
  }
}
</style>
