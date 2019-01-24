<template>
  <section class="select-demo">
    <coding-box :code="code">
      <w-select
        v-model="value10"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章标签">
        <w-option
          v-for="item in options5"
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
          code: `<w-select
  v-model="value10"
  multiple
  filterable
  allow-create
  default-first-option
  placeholder="请选择文章标签">
  <w-option
    v-for="item in options5"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </w-option>
</w-select>`,
          options5: [{
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }],
          value10: []
        }
    }
}
</script>
<style lang="scss">

</style>
