<template>
  <section class="table-demo">
    <coding-box :code="code" description="通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。 也可以返回一个键名为rowspan和colspan的对象。">
      <w-table :data="tableData6"
               :span-method="arraySpanMethod" border
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

    <w-table :data="tableData6"
             :span-method="objectSpanMethod"
             border style="width: 100%; margin-top: 20px">
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
  <w-table :data="tableData6"
           :span-method="arraySpanMethod" border
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
  </w-table
  <w-table :data="tableData6"
           :span-method="objectSpanMethod"
           border style="width: 100%; margin-top: 20px">
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
        tableData6: [{
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
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  }
<\/script>`,
          tableData6: [{
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
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
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