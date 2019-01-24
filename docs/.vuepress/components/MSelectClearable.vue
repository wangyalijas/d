<template>
  <section class="select-demo">
    <coding-box :code="code">
      <w-select v-model="value4" clearable placeholder="请选择">
        <w-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </w-option>
      </w-select>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-select v-model="value4" placeholder="请选择">
  <w-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </w-option>
</w-select>`,
          options: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }
          ],
          value4: ''
        }
    }
}
</script>
<style lang="scss">

</style>
