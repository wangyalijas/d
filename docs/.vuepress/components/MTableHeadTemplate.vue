<template>
  <section class="table-demo">
    <coding-box :code="code" description="通过设置 Scoped slot 来自定义表头。">
      <w-table :data="tableData.filter(data =>
        !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
        <w-table-column label="Date" prop="date">
        </w-table-column>
        <w-table-column label="Name" prop="name">
        </w-table-column>
        <w-table-column align="right">
          <template slot="header" slot-scope="scope">
            <w-input v-model="search" size="mini"
                      placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <w-button size="mini"
                      @click="handleEdit(scope.$index, scope.row)">Edit</w-button>
            <w-button size="mini" type="danger"
                      @click="handleDelete(scope.$index, scope.row)">Delete</w-button>
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
  <w-table :data="tableData.filter(data =>
    !search || data.name.toLowerCase().includes(search.toLowerCase()))"
             style="width: 100%">
     <w-table-column label="Date" prop="date">
     </w-table-column>
     <w-table-column label="Name" prop="name">
     </w-table-column>
     <w-table-column align="right">
       <template slot="header" slot-scope="scope">
         <w-input v-model="search" size="mini"
                   placeholder="输入关键字搜索"/>
       </template>
       <template slot-scope="scope">
         <w-button size="mini"
                   @click="handleEdit(scope.$index, scope.row)">Edit</w-button>
         <w-button size="mini" type="danger"
                   @click="handleDelete(scope.$index, scope.row)">Delete</w-button>
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
          }],
        search: ''
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
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
          }],
        search: ''
        }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
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