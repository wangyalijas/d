<template>
  <section class="table-footer-demo">
    <coding-box :code="code" description="将show-summary设置为true就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用summary-method并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。">
      <w-table :data="tableData" border show-summary
               style="width: 100%">
    <w-table-column prop="id" label="ID" width="180">
    </w-table-column>
    <w-table-column prop="name" label="姓名">
    </w-table-column>
    <w-table-column prop="amount1" sortable label="数值 1">
    </w-table-column>
    <w-table-column prop="amount2" sortable label="数值 2">
    </w-table-column>
    <w-table-column prop="amount3" sortable label="数值 3">
    </w-table-column>
  </w-table>

  <w-table :data="tableData" border height="190"
           :summary-method="getSummaries"
           show-summary
           style="width: 100% margin-top: 20px">
    <w-table-column prop="id" label="ID" width="180">
    </w-table-column>
    <w-table-column prop="name" label="姓名">
    </w-table-column>
    <w-table-column prop="amount1" label="数值 1（元）">
    </w-table-column>
    <w-table-column prop="amount2" label="数值 2（元）">
    </w-table-column>
    <w-table-column prop="amount3" label="数值 3（元）">
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
  <w-table :data="tableData" border show-summary
           style="width: 100%">
    <w-table-column prop="id" label="ID" width="180">
    </w-table-column>
    <w-table-column prop="name" label="姓名">
    </w-table-column>
    <w-table-column prop="amount1" sortable label="数值 1">
    </w-table-column>
    <w-table-column prop="amount2" sortable label="数值 2">
    </w-table-column>
    <w-table-column prop="amount3" sortable label="数值 3">
    </w-table-column>
  </w-table>

  <w-table :data="tableData" border height="200"
           :summary-method="getSummaries"
           show-summary
           style="width: 100% margin-top: 20px">
    <w-table-column prop="id" label="ID" width="180">
    </w-table-column>
    <w-table-column prop="name" label="姓名">
    </w-table-column>
    <w-table-column prop="amount1" label="数值 1（元）">
    </w-table-column>
    <w-table-column prop="amount2" label="数值 2（元）">
    </w-table-column>
    <w-table-column prop="amount3" label="数值 3（元）">
    </w-table-column>
  </w-table>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [{
          id: '12987122',
          name: 'John',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'John',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'John',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'John',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'John',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      }
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价'
            return
          }
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
            sums[index] += ' 元'
          } else {
            sums[index] = 'N/A'
          }
        })

        return sums
      }
    }
  }
<\/script>`,
          tableData: [{
          id: '12987122',
          name: 'John',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'John',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'John',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'John',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'John',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
        }
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价'
            return
          }
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
            sums[index] += ' 元'
          } else {
            sums[index] = '-'
          }
        })

        return sums
      }
    }
}
</script>
<style lang="scss">
.table-footer-demo {
  table {
    margin: 0
  }
  .w-table + .w-table {
    margin-top: 20px;
  }
}
</style>