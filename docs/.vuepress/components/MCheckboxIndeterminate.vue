<template>
  <section class="checkbox-demo">
    <coding-box :code="code">
      <w-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</w-checkbox>
      <div style="margin: 15px 0;"></div>
      <w-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
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
          code: `<w-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</w-checkbox>
<div style="margin: 15px 0;"></div>
<w-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
  <w-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</w-checkbox>
</w-checkbox-group>`,
          checkAll: false,
          checkedCities: ['上海', '北京'],
          cities: cityOptions,
          isIndeterminate: true
        }
    },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
}
</script>
<style lang="scss">
.checkbox-demo {
}
</style>
