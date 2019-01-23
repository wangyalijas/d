<template>
  <section class="pagination-demo">
    <coding-box :code="code" description="为组件添加background属性, 可以为分页按钮添加背景色.">
      <w-pagination background layout="prev, pager, next" :total="500">
      </w-pagination>
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
.pagination-demo {
    .slot-wrapper {
        display: flex;
        justify-content: flex-start;
    }
  .demo-wrapper {
    flex-basis: 50%;
    margin-bottom: 10px;
    padding-right: 30px;
    text-align: center;
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