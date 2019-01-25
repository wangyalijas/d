<template>
  <section class="table-demo">
    <coding-box :code="code" description="Table 组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow。如果需要显示索引，可以增加一列w-table-column，设置type属性为index即可显示从 1 开始的索引号。">
      <w-table ref="singleTable" :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%">
    <w-table-column type="index" width="50">
    </w-table-column>
    <w-table-column property="date" label="日期" width="120">
    </w-table-column>
    <w-table-column property="name" label="姓名" width="120">
    </w-table-column>
    <w-table-column property="address" label="地址">
    </w-table-column>
  </w-table>
  <div style="margin-top: 20px">
    <w-button size="medium" @click="setCurrent(tableData[1])">选中第二行</w-button>
    <w-button size="medium" @click="setCurrent()">取消选择</w-button>
  </div>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<template>
  <w-table ref="singleTable" :data="tableData"
           highlight-current-row
           @current-change="handleCurrentChange"
           style="width: 100%">
    <w-table-column type="index" width="50">
    </w-table-column>
    <w-table-column property="date" label="日期" width="120">
    </w-table-column>
    <w-table-column property="name" label="姓名" width="120">
    </w-table-column>
    <w-table-column property="address" label="地址">
    </w-table-column>
  </w-table>
  <div style="margin-top: 20px">
    <w-button size="medium" @click="setCurrent(tableData[1])">选中第二行</w-button>
    <w-button size="medium" @click="setCurrent()">取消选择</w-button>
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
        currentRow: null
        }
      }
    },
    methods: {
      setCurrent (row) {
        this.$refs.singleTable.setCurrentRow(row)
      },
      handleCurrentChange (val) {
        this.currentRow = val
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
        currentRow: null
        }
    },
  methods: {
    setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row)
      },
      handleCurrentChange(val) {
        this.currentRow = val
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