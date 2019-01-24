<template>
  <section class="select-demo">
    <coding-box :code="code">
      <w-select v-model="value6" placeholder="请选择">
        <w-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </w-option>
      </w-select>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-select v-model="value6" placeholder="请选择">
  <w-option
    v-for="item in cities"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
  </w-option>
</w-select>`,
          cities: [{
            value: 'Beijing',
            label: '北京'
          }, {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Nanjing',
            label: '南京'
          }, {
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }],
          value6: ''
        }
    }
}
</script>
<style lang="scss">

</style>
