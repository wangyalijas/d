<template>
  <section class="datepicker-demo">
    <coding-box :code="code">
      <div class="block">
        <span class="demonstration">默认</span>
        <w-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </w-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <w-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </w-date-picker>
      </div>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<div class="block">
  <span class="demonstration">默认</span>
  <w-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期">
  </w-date-picker>
  </div>
  <div class="block">
  <span class="demonstration">带快捷选项</span>
  <w-date-picker
    v-model="value2"
    align="right"
    type="date"
    placeholder="选择日期"
    :picker-options="pickerOptions1">
  </w-date-picker>
</div>`,
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
        }
    }
}
</script>


<style lang="scss">
  table {
    display: table;
  }

  tr:nth-child(2n) {
    background-color: white !important;
  }
</style>
<style lang="scss" scoped>
  .datepicker-demo {
    tr:nth-child(2n) {
      background-color: white !important;
    }
    .block {
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;
      display: inline-block;
      width: 50%;
      box-sizing: border-box;
      float: left;
      &:last-child {
        border: none;
      }
    }
    .demonstration {
      display: block;
      color: #8492a6;
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
</style>
