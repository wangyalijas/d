<template>
  <section class="table-demo">
    <coding-box :code="code" description="当w-table元素中注入data对象数组后，在w-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。">
      <w-table :data="tableData" style="width: 100%">
        <w-table-column prop="date" label="日期" width="180">
        </w-table-column>
        <w-table-column prop="name" label="姓名" width="180">
        </w-table-column>
        <w-table-column prop="address" label="地址">
        </w-table-column>
      </w-table>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <w-table :data="tableData" style="width: 100%">
    <w-table-column prop="date" label="日期" width="180">
    </w-table-column>
    <w-table-column prop="name" label="姓名" width="180">
    </w-table-column>
    <w-table-column prop="address" label="地址">
    </w-table-column>
  </w-table>
</template>`,
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
          }, {
            date: '2019-01-05',
            name: 'John',
            address: '合肥市蜀山区长江西路233号'
          }]
        }
    }
}
</script>
<style lang="scss">
.table-demo {
  table {
    margin: 0;
    th, td {
      border: none;
    }
  }
}
</style>