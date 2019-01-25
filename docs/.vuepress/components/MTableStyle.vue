<template>
  <section class="table-style-demo">
    <coding-box :code="code" description="为表格添加常见样式, stripe 属性可以获得斑马纹, border 可以将表格描边, 你还可以指定 row-class-name 为行添加自定义class类.">
      <section class="demo-wrapper">
        <h1 class="label"># 斑马纹表格</h1>
      <w-table :data="tableData" style="width: 100%" stripe>
        <w-table-column prop="date" label="日期" width="180">
        </w-table-column>
        <w-table-column prop="name" label="姓名" width="180">
        </w-table-column>
        <w-table-column prop="address" label="地址">
        </w-table-column>
      </w-table>
      </section>
      <section class="demo-wrapper">
        <h1 class="label"># 带边框表格</h1>
      <w-table :data="tableData" style="width: 100%" border>
        <w-table-column prop="date" label="日期" width="180">
        </w-table-column>
        <w-table-column prop="name" label="姓名" width="180">
        </w-table-column>
        <w-table-column prop="address" label="地址">
        </w-table-column>
      </w-table>
      </section>
      <section class="demo-wrapper">
        <h1 class="label"># 表格内容高亮</h1>
      <w-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
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
  <section class="demo-wrapper">
    <h1 class="label">斑马纹表格</h1>
    <w-table :data="tableData" style="width: 100%" stripe>
      <w-table-column prop="date" label="日期" width="180"></w-table-column>
      <w-table-column prop="name" label="姓名" width="180"></w-table-column>
      <w-table-column prop="address" label="地址"></w-table-column>
    </w-table>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">带边框表格</h1>
    <w-table :data="tableData" style="width: 100%" border>
      <w-table-column prop="date" label="日期" width="180"></w-table-column>
      <w-table-column prop="name" label="姓名" width="180"></w-table-column>
      <w-table-column prop="address" label="地址"></w-table-column>
    </w-table>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">表格内容高亮</h1>
    <w-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <w-table-column prop="date" label="日期" width="180"></w-table-column>
      <w-table-column prop="name" label="姓名" width="180"></w-table-column>
      <w-table-column prop="address" label="地址"></w-table-column>
    </w-table>
  </section>
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
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'warning-row';
        } else if (rowIndex === 2) {
          return 'success-row';
        }
        return ''
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
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'warning-row';
        } else if (rowIndex === 2) {
          return 'success-row';
        }
        return ''
      }
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