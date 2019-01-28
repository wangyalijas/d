<template>
  <section class="datepicker-demo">
    <coding-box :code="code">
      <div class="container">
        <div class="block">
          <span class="demonstration">默认为 Date 对象</span>
          <div class="demonstration">值：{{ value10 }}</div>
          <w-date-picker
            v-model="value10"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日">
          </w-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">默认为 Date 对象</span>
          <div class="demonstration">值：{{ value11 }}</div>
          <w-date-picker
            v-model="value11"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </w-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">时间戳</span>
          <div class="demonstration">值：{{ value12 }}</div>
          <w-date-picker
            v-model="value12"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp">
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
  <span class="demonstration">默认为 Date 对象</span>
  <div class="demonstration">值：{{ value10 }}</div>
  <w-date-picker
    v-model="value10"
    type="date"
    placeholder="选择日期"
    format="yyyy 年 MM 月 dd 日">
  </w-date-picker>
</div>
<div class="block">
  <span class="demonstration">使用 value-format</span>
  <div class="demonstration">值：{{ value11 }}</div>
  <el-date-picker
    v-model="value11"
    type="date"
    placeholder="选择日期"
    format="yyyy 年 MM 月 dd 日"
    value-format="yyyy-MM-dd">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">时间戳</span>
  <div class="demonstration">值：{{ value12 }}</div>
  <w-date-picker
    v-model="value12"
    type="date"
    placeholder="选择日期"
    format="yyyy 年 MM 月 dd 日"
    value-format="timestamp">
  </w-date-picker>
</div>`,
          value10: '',
          value11: '',
          value12: ''
        }
    }
}
</script>


<style lang="scss">
  table {
    display: table;
  }

</style>
<style lang="scss"  scoped>
  .datepicker-demo {
    .block {
      padding: 30px 0 50px;
      text-align: center;
      border-right: 1px solid #eff2f6;
      display: inline-block;
      width: 33%;
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
