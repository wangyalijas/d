<template>
  <div>
    <w-tabs v-model="activeName" @tab-click="handleClick">
      <w-tab-pane v-for="(item,itemIndex) in tableData"
                  :key="itemIndex"
                  :label="item.label"
                  :name="item.name">
        <w-table :data="item.data"
                 highlight-current-row
                 @row-click="getDetails"
                 style="width: 100%">
          <w-table-column prop="date" label="日期" width="180">
          </w-table-column>
          <w-table-column prop="name" label="姓名" width="180">
          </w-table-column>
          <w-table-column prop="address" label="地址">
          </w-table-column>
        </w-table>
      </w-tab-pane>
    </w-tabs>
    <div style="color: #666;margin-top: 20px">{{patientInfo}}</div>
  </div>
</template>

<script>
import WTabs from './../../tabs';
import WTable from './../../table';
export default {
  name: 'WPatientList',
  components: {
    WTabs, WTable
  },
  data() {
    return {
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
      activeName: 'first',
      patientInfo: ''
    };
  },
  methods: {
    handleClick(tab, event) {
      this.patientInfo = ''
    },
    getDetails (row) {
      this.patientInfo = row.date + '　　' + row.name + '　　' + row.address
    }
  },
  watch: {
  }
};
</script>
