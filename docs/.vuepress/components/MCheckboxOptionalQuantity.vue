<template>
  <section class="checkbox-demo">
    <coding-box :code="code">
      <w-checkbox-group
        v-model="checkedCities1"
        :min="1"
        :max="2">
        <w-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</w-checkbox>
      </w-checkbox-group>
    </coding-box>
  </section>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    data () {
        return {
          code: `<w-checkbox-group
  v-model="checkedCities1"
  :min="1"
  :max="2">
  <w-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</w-checkbox>
</w-checkbox-group>`,
          checkedCities1: ['上海', '北京'],
          cities: cityOptions
        }
    },
}
</script>
<style lang="scss">
.checkbox-demo {
}
</style>
