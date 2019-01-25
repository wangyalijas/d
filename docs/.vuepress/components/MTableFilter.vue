<template>
  <section class="table-demo">
    <coding-box :code="code" description="在列中设置filtersfilter-method属性即可开启该列的筛选，filters 是一个数组，filter-method是一个方法，它用于决定某些数据是否显示，会传入三个参数：value, row 和 column。">
      <w-button @click="resetDateFilter">清除日期过滤器</w-button>
  <w-button @click="clearFilter">清除所有过滤器</w-button>
  <w-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <w-table-column
      prop="date"
      label="日期"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </w-table-column>
    <w-table-column
      prop="name"
      label="姓名"
      width="180">
    </w-table-column>
    <w-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </w-table-column>
    <w-table-column
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <w-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</w-tag>
      </template>
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
            address: '合肥市蜀山区长江西路233号',
            tag: '公司'
          }, {
            date: '2019-01-03',
            name: 'John',
            address: '合肥市蜀山区长江西路233号',
            tag: '公司'
          }, {
            date: '2019-01-04',
            name: 'John',
            address: '合肥市蜀山区长江西路233号',
            tag: '家'
          }]
        }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date')
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter()
      },
      formatter(row, column) {
        return row.address
      },
      filterTag(value, row) {
        return row.tag === value
      },
      filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value
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