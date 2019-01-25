<template>
  <section class="table-fixed-demo">
    <coding-box :code="code" description="只要在w-table元素中定义了 height 属性，即可实现固定表头的表格。 通过设置 fixed 属性, 可以达到固定列的效果, fixed 有可选的值, left / right.">
      <section class="demo-wrapper">
        <h1 class="label"># 固定表头</h1>
      <w-table :data="tableData" style="width: 100%" height="240">
        <w-table-column prop="date" label="日期" width="180">
        </w-table-column>
        <w-table-column prop="name" label="姓名" width="180">
        </w-table-column>
        <w-table-column prop="address" label="地址">
        </w-table-column>
      </w-table>
      </section>
      <section class="demo-wrapper">
        <h1 class="label"># 固定列</h1>
        <w-table :data="tableData" style="width: 100%">
          <w-table-column prop="date" label="日期" width="180">
          </w-table-column>
          <w-table-column prop="name" label="姓名" width="180">
          </w-table-column>
          <w-table-column prop="address" label="地址" width="300">
          </w-table-column>
          <w-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <w-button type="text" size="small">查看</w-button>
              <w-button type="text" size="small">编辑</w-button>
            </template>
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
    <h1 class="label"># 固定表头</h1>
    <w-table :data="tableData" style="width: 100%" height="240">
      <w-table-column prop="date" label="日期" width="180">
      </w-table-column>
      <w-table-column prop="name" label="姓名" width="180">
      </w-table-column>
      <w-table-column prop="address" label="地址">
      </w-table-column>
    </w-table>
  </section>
  <section class="demo-wrapper">
     <h1 class="label"># 固定列</h1>
     <w-table :data="tableData" style="width: 100%">
       <w-table-column prop="date" label="日期" width="180">
       </w-table-column>
      <w-table-column prop="name" label="姓名" width="180">
      </w-table-column>
      <w-table-column prop="address" label="地址" width="300">
      </w-table-column>
      <w-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <w-button type="text" size="small">查看</w-button>
           <w-button type="text" size="small">编辑</w-button>
         </template>
      </w-table-column>
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
    }
}
</script>
<style lang="scss">
.table-fixed-demo {
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
  }
}
</style>