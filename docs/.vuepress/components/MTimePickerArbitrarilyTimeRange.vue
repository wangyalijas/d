<template>
  <section class="time-picker-demo">
    <coding-box :code="code">
      <div class="block">
        <w-time-picker
          is-range
          v-model="value4"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </w-time-picker>
      </div>
      <div class="block">
        <w-time-picker
          is-range
          arrow-control
          v-model="value5"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </w-time-picker>
      </div>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-time-picker
  v-model="value2"
  :picker-options="{
selectableRange: '18:30:00 - 20:30:00'
}"
  placeholder="任意时间点">
</w-time-picker>
<w-time-picker
  arrow-control
  v-model="value3"
  :picker-options="{
selectableRange: '18:30:00 - 20:30:00'
}"
  placeholder="任意时间点">
</w-time-picker>`,
          value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
          value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
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
      padding: 30px 10px 20px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;
      display: inline-block;
      width: 50%;
      box-sizing: border-box;
      float: left;
      &:last-child {
        border: none;
        padding-left: 10px;
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
