<template>
  <section class="table-demo">
    <coding-box :code="code" description="通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。">
      <w-table :data="tableData" style="width: 100%">
        <w-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="w-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </w-table-column>
        <w-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <w-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <w-tag size="medium">{{ scope.row.name }}</w-tag>
              </div>
            </w-popover>
          </template>
        </w-table-column>
        <w-table-column label="操作">
          <template slot-scope="scope">
            <w-button size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</w-button>
            <w-button size="mini" type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</w-button>
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
    <w-table-column label="日期" width="180">
      <template slot-scope="scope">
        <i class="w-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </w-table-column>
    <w-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <w-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <w-tag size="medium">{{ scope.row.name }}</w-tag>
          </div>
         </w-popover>
      </template>
    </w-table-column>
    <w-table-column label="操作">
      <template slot-scope="scope">
         <w-button size="mini"
           @click="handleEdit(scope.$index, scope.row)">编辑</w-button>
         <w-button size="mini" type="danger"
           @click="handleDelete(scope.$index, scope.row)">删除</w-button>
       </template>
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
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
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
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
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