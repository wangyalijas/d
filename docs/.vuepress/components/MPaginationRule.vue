<template>
  <section class="pagination-demo">
    <coding-box :code="code" description="当总页数超过 7 页时，Pagination 会折叠多余的页码按钮, 通过pager-count属性可以设置最大页码按钮数。">
      <w-pagination :page-size="20" :pager-count="11"
                    layout="prev, pager, next" :total="1000">
      </w-pagination>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <w-pagination :page-size="20" :pager-count="11"
                layout="prev, pager, next" :total="1000">
  </w-pagination>
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