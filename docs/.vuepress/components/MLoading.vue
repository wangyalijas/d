<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%">
        <w-table-column
          prop="date"
          label="日期"
          width="180">
        </w-table-column>
        <w-table-column
          prop="name"
          label="姓名"
          width="180">
        </w-table-column>
        <w-table-column
          prop="address"
          label="地址">
        </w-table-column>
      </w-table>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-table
  v-loading="loading"
  :data="tableData"
  style="width: 100%">
  <w-table-column
    prop="date"
    label="日期"
    width="180">
  </w-table-column>
  <w-table-column
    prop="name"
    label="姓名"
    width="180">
  </w-table-column>
  <w-table-column
    prop="address"
    label="地址">
  </w-table-column>
</w-table>`,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      }
    }
  }
</script>
<style lang="scss">
  .tag-demo {
    .w-tag+.w-tag {
      margin-left: 5px;
    }
  }
</style>
