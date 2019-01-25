<template>
  <section class="radio-demo">
    <coding-box :code="code">
      <w-patient-list :listData="tableData">
      </w-patient-list>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<w-patient-list :listData="tableData"></w-patient-list>`,
        tableData: [
          {
            label: '未就诊',
            name: 'first',
            data: [
              {
                date: '2019-01-02',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-03',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-04',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              }
            ]
          },
          {
            label: '就诊中',
            name: 'second',
            data: [
              {
                date: '2019-02-02',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-03',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-04',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              }
            ]
          },
          {
            label: '检查中',
            name: 'third',
            data: [
              {
                date: '2019-03-02',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-03',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-04',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              }
            ]
          },
          {
            label: '已结束',
            name: 'fourth',
            data: [
              {
                date: '2019-04-02',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-03',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              },
              {
                date: '2019-01-04',
                name: 'John',
                address: '合肥市蜀山区长江西路233号'
              }
            ]
          }
        ],
      }
    }
  }
</script>
<style lang="scss">
  table {
    margin: 0;
  }
</style>
