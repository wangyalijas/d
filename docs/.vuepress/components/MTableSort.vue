<template>
  <section class="table-demo">
    <coding-box :code="code" description="在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。可以通过 Table 的default-sort属性设置默认的排序列和排序顺序。可以使用sort-method或者sort-by使用自定义的排序规则。如果需要后端排序，需将sortable设置为custom，同时在 Table 上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理。">
      <w-table :data="tableData" style="width: 100%"
               :default-sort = "{prop: 'date', order: 'descending'}">
        <w-table-column sortable prop="date" label="日期" width="180">
        </w-table-column>
        <w-table-column sortable prop="name" label="姓名" width="180">
        </w-table-column>
        <w-table-column sortable prop="address" label="地址">
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
    },
    methods: {
      formatter(row, column) {
        return row.address
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
      formatter(row, column) {
        return row.address
      }
    }
}
</script>
<style lang="scss">
.table-demo {
  table {
    margin: 0;
  }
}
</style>