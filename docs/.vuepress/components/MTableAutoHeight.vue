<template>
  <section class="table-style-demo">
    <coding-box :code="code" description="通过设置 max-height 属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。">
      <section class="demo-wrapper">
      <w-table :data="tableData" style="width: 100%" max-height="250">
        <w-table-column prop="date" label="日期" width="180">
        </w-table-column>
        <w-table-column prop="name" label="姓名" width="180">
        </w-table-column>
        <w-table-column prop="address" label="地址">
        </w-table-column>
      </w-table>
      </section>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <w-table :data="tableData" style="width: 100%" max-height="250">
    <w-table-column prop="date" label="日期" width="180">
    </w-table-column>
    <w-table-column prop="name" label="姓名" width="180">
    </w-table-column>
    <w-table-column prop="address" label="地址">
    </w-table-column>
  </w-table>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [{
            date: '2019-01-02',
            name: 'John',
            address: '合肥市蜀山区长江西路233号'
          }, {
            date: '2019-01-03',
            name: 'John',
            address: '合肥市蜀山区长江西路233号'
          }, {
            date: '2019-01-04',
            name: 'John',
            address: '合肥市蜀山区长江西路233号'
          }]
      }
    }
  }
<\/script>`,
          tableData: [{
            date: '2019-01-02',
            name: 'John',
            address: '合肥市蜀山区长江西路233号'
          }, {
            date: '2019-01-03',
            name: 'John',
            address: '合肥市蜀山区长江西路233号'
          }, {
            date: '2019-01-04',
            name: 'John',
            address: '合肥市蜀山区长江西路233号'
          }]
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
.table-style-demo {
  table {
    margin: 0;
  }
  .demo-wrapper {
    margin-bottom: 10px;
    h1.label {
      margin: 0 0 15px 0;
      padding: 10px 0;
      font-size: 18px;
      border-bottom: 1px dashed #eee;
    }
    .w-table .warning-row {
    background: oldlace;
  }

  .w-table .success-row {
    background: #f0f9eb;
  }
  }
}
</style>