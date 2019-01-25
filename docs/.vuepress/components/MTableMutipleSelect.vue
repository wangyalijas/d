<template>
  <section class="table-demo">
    <coding-box :code="code" description="实现多选非常简单: 手动添加一个w-table-column，设type属性为selection即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用show-overflow-tooltip属性，它接受一个Boolean，为true时多余的内容会在 hover 时以 tooltip 的形式显示出来。">
      <w-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
    <w-table-column type="selection" width="55">
    </w-table-column>
    <w-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </w-table-column>
    <w-table-column prop="name" label="姓名" width="120">
    </w-table-column>
    <w-table-column prop="address" label="地址" show-overflow-tooltip>
    </w-table-column>
  </w-table>
  <div style="margin-top: 20px">
    <w-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</w-button>
    <w-button @click="toggleSelection()">取消选择</w-button>
  </div>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <w-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
           style="width: 100%"
           @selection-change="handleSelectionChange">
    <w-table-column type="selection" width="55">
    </w-table-column>
    <w-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </w-table-column>
    <w-table-column prop="name" label="姓名" width="120">
    </w-table-column>
    <w-table-column prop="address" label="地址" show-overflow-tooltip>
    </w-table-column>
  </w-table>
  <div style="margin-top: 20px">
    <w-button @click="toggleSelection([tableData[1], tableData[2]])">
      切换第二、第三行的选中状态
    </w-button>
    <w-button @click="toggleSelection()">取消选择</w-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }, {
          date: '2016-05-04',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }, {
          date: '2016-05-01',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }, {
          date: '2016-05-03',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }],
        multipleSelection: []
        }
      }
    },
    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          });
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }
<\/script>`,
          tableData: [{
          date: '2016-05-02',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }, {
          date: '2016-05-04',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }, {
          date: '2016-05-01',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }, {
          date: '2016-05-03',
          name: 'John',
          address: '合肥市蜀山区长江西路233号'
        }],
        multipleSelection: []
        }
    },
  methods: {
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          });
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
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