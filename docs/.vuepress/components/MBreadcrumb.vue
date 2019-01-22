<template>
  <section class="breadcrumb-demo">
    <coding-box :code="code">
      <w-breadcrumb separator="/">
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
          code: `<w-breadcrumb separator="/">
  <w-breadcrumb-item :jump-to="{ path: '/' }">首页</w-breadcrumb-item>
  <w-breadcrumb-item><a href="/">列表页面</a></w-breadcrumb-item>
  <w-breadcrumb-item>详情页面</w-breadcrumb-item>
</w-breadcrumb>`
        }
    }
}
</script>
