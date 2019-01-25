<template>
  <section class="dropdown-demo">
    <coding-box :code="code" description="通过组件slot来设置下拉触发的元素以及需要通过具名slot为dropdown 来设置下拉菜单。默认情况下，下拉按钮只要hover即可，无需点击也会显示下拉菜单。">
     <w-dropdown>
      <span class="w-dropdown-link">
        下拉菜单<i class="w-icon-arrow-down w-icon--right"></i>
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
      下拉菜单<i class="w-icon-arrow-down w-icon--right"></i>
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
