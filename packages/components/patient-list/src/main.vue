<template>
  <div>
    <w-tabs v-model="activeName" @tab-click="handleClick">
      <w-tab-pane v-for="(item,itemIndex) in listData"
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
      activeName: 'first',
      patientInfo: ''
    };
  },
  props: {
    listData: {
      type: Array
    }
  },
  methods: {
    handleClick (tab, event) {
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
