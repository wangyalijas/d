<template>
  <section class="table-demo">
    <coding-box :code="code" description="只需要在 w-table-column 里面嵌套 w-table-column，就可以实现多级表头。">
      <w-table :data="tableData3" style="width: 100%">
        <w-table-column prop="date" label="日期" width="150">
        </w-table-column>
        <w-table-column label="配送信息">
          <w-table-column prop="name" label="姓名" width="120">
          </w-table-column>
          <w-table-column label="地址">
            <w-table-column prop="province" label="省份" width="120">
            </w-table-column>
            <w-table-column prop="city" label="市区" width="120">
            </w-table-column>
            <w-table-column prop="address" label="地址" width="300">
            </w-table-column>
            <w-table-column prop="zip" label="邮编" width="120">
            </w-table-column>
          </w-table-column>
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
  <w-table :data="tableData3" style="width: 100%">
    <w-table-column prop="date" label="日期" width="150">
    </w-table-column>
    <w-table-column label="配送信息">
      <w-table-column prop="name" label="姓名" width="120">
      </w-table-column>
      <w-table-column label="地址">
        <w-table-column prop="province" label="省份" width="120">
        </w-table-column>
        <w-table-column prop="city" label="市区" width="120">
        </w-table-column>
        <w-table-column prop="address" label="地址" width="300">
        </w-table-column>
        <w-table-column prop="zip" label="邮编" width="120">
        </w-table-column>
      </w-table-column>
    </w-table-column>
  </w-table>
</template>
<script>
  export default {
    data () {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }]
      }
    }
  }
<\/script>`,
          tableData3: [{
          date: '2016-05-03',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: 'John',
          province: '安徽省',
          city: '蜀山区',
          address: '合肥市蜀山区长江西路233号',
          zip: 200333
        }]
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