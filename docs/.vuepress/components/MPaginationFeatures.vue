<template>
  <section class="pagination-features-demo">
    <coding-box :code="code" description="为组件添加background属性, 可以为分页按钮添加背景色.">
      <section class="demo-wrapper">
        <h1 class="label">显示总数</h1>
        <w-pagination layout="prev, pager, next, total" :total="120"></w-pagination>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">跳转至某一页</h1>
        <w-pagination layout="prev, pager, next, jumper" :total="120"></w-pagination>
      </section>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <w-pagination background layout="prev, pager, next" :total="500">
</template>`
        }
    }
}
</script>
<style lang="scss">
.pagination-features-demo {
  .demo-wrapper {
    margin-bottom: 10px;
    h1.label {
      margin: 0 0 15px 0;
      padding: 10px 0;
      font-size: 16px;
      font-weight: normal;
      border-bottom: 1px dashed #eee;
    }
  }
}
</style>