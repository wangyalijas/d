<template>
  <section class="time-picker-demo">
    <coding-box :code="code">
      <w-time-select
        v-model="value1"
        :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
        placeholder="选择时间">
      </w-time-select>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-time-select
  v-model="value1"
  :picker-options="{
start: '08:30',
step: '00:15',
end: '18:30'
}"
  placeholder="选择时间">
</w-time-select>`,
          value1: ''
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
  .time-picker-demo {
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
