<template>
  <section class="pagination-demo">
    <coding-box :code="code" description="当总页数超过 7 页时，Pagination 会折叠多余的页码按钮">
      <section class="demo-wrapper">
        <h1 class="label">一般情况</h1>
        <w-pagination layout="prev, pager, next" :total="50"></w-pagination>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">页数较大</h1>
        <w-pagination layout="prev, pager, next" :total="120"></w-pagination>
      </section>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <section class="demo-wrapper">
    <h1 class="label">一般情况</h1>
    <w-pagination layout="pager, prev, next" :total="50"></w-pagination>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">页数较大</h1>
    <w-pagination layout="pager, prev, next" :total="120"></w-pagination>
  </section>
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