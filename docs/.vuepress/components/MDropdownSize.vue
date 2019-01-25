<template>
  <section class="dropdown-demo">
    <coding-box :code="code" description="通过对 size 属性的设置, 可以得到不同尺寸大小的下拉菜单, 除了默认大小可选值有 medium, small, mini. ">
     <w-dropdown split-button type="primary">
      默认尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>

    <w-dropdown size="medium" split-button type="primary">
      中等尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>

    <w-dropdown size="small" split-button type="primary">
      小型尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>

    <w-dropdown size="mini" split-button type="primary">
      超小尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
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
  <w-dropdown split-button type="primary">
      默认尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>

    <w-dropdown size="medium" split-button type="primary">
      中等尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>

    <w-dropdown size="small" split-button type="primary">
      小型尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>

    <w-dropdown size="mini" split-button type="primary">
      超小尺寸
      <w-dropdown-menu slot="dropdown">
        <w-dropdown-item>选项一</w-dropdown-item>
        <w-dropdown-item>选项二</w-dropdown-item>
        <w-dropdown-item>选项三</w-dropdown-item>
        <w-dropdown-item>选项四</w-dropdown-item>
        <w-dropdown-item>选项五</w-dropdown-item>
      </w-dropdown-menu>
    </w-dropdown>
</template>`
        }
    }
}
</script>
