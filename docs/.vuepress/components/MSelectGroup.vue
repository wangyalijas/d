<template>
  <section class="select-demo">
    <coding-box :code="code">
      <w-select v-model="value7" placeholder="请选择">
        <w-option-group
          v-for="group in options3"
          :key="group.label"
          :label="group.label">
          <w-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </w-option>
        </w-option-group>
      </w-select>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-select v-model="value7" placeholder="请选择">
  <w-option-group
    v-for="group in options3"
    :key="group.label"
    :label="group.label">
    <w-option
      v-for="item in group.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </w-option>
  </w-option-group>
</w-select>`,
          options3: [{
            label: '热门城市',
            options: [{
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Beijing',
              label: '北京'
            }]
          }, {
            label: '城市名',
            options: [{
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Dalian',
              label: '大连'
            }]
          }],
          value7: ''
        }
    }
}
</script>
<style lang="scss">

</style>
