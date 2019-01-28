<template>
  <section class="datepicker-demo">
    <coding-box :code="code">
      <div class="block">
        <p class="demonstration">组件值：{{ value13 }}</p>
        <w-date-picker
          v-model="value13"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']">
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
  <p>组件值：{{ value13 }}</p>
  <w-date-picker
    v-model="value13"
    type="daterange"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :default-time="['00:00:00', '23:59:59']">
  </w-date-picker>
</div>`,
          value13: ''
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
<style lang="scss"  scoped>
  .datepicker-demo {
    tr:nth-child(2n) {
      background-color: white !important;
    }
    .block {
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;
      display: inline-block;
      width: 100%;
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
