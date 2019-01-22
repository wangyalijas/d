<template>
  <section class="breadcrumb-demo">
    <coding-box description="separator-icon-class可以传iconfont的class名称, 这样就可以使用指定的图标进行分隔了." :code="code">
      <w-breadcrumb separator-icon-class="w-icon-arrow-right">
        <w-breadcrumb-item :jump-to="{ path: '/' }">首页</w-breadcrumb-item>
        <w-breadcrumb-item><a href="/">列表页面</a></w-breadcrumb-item>
        <w-breadcrumb-item>详情页面</w-breadcrumb-item>
      </w-breadcrumb>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-breadcrumb separator-icon-class="w-icon-arrow-right">
  <w-breadcrumb-item :jump-to="{ path: '/' }">首页</w-breadcrumb-item>
  <w-breadcrumb-item><a href="/">列表页面</a></w-breadcrumb-item>
  <w-breadcrumb-item>详情页面</w-breadcrumb-item>
</w-breadcrumb>`
        }
    }
}
</script>
