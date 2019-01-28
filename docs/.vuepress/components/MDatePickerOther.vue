<template>
  <section class="datepicker-demo">
    <coding-box :code="code">
      <div class="container">
        <div class="block">
          <span class="demonstration">周</span>
          <w-date-picker
            v-model="value3"
            type="week"
            format="yyyy 第 WW 周"
            placeholder="选择周">
          </w-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">月</span>
          <w-date-picker
            v-model="value4"
            type="month"
            placeholder="选择月">
          </w-date-picker>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <span class="demonstration">年</span>
          <w-date-picker
            v-model="value5"
            type="year"
            placeholder="选择年">
          </w-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">多个日期</span>
          <w-date-picker
            type="dates"
            v-model="value14"
            placeholder="选择一个或多个日期">
          </w-date-picker>
        </div>
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
          value3: '',
          value4: '',
          value5: '',
          value14: ''
        }
    }
}
</script>


<style lang="scss">
  table {
    display: table;
  }

</style>
<style lang="scss">
  .datepicker-demo {
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
