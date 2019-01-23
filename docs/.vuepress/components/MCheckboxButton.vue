<template>
  <section class="checkbox-demo">
    <coding-box :code="code">
      <div>
        <w-checkbox-group v-model="checkboxGroup1">
          <w-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</w-checkbox-button>
        </w-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <w-checkbox-group v-model="checkboxGroup2" size="medium">
          <w-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</w-checkbox-button>
        </w-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <w-checkbox-group v-model="checkboxGroup3" size="small">
          <w-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</w-checkbox-button>
        </w-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <w-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <w-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</w-checkbox-button>
        </w-checkbox-group>
      </div>
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
          checkboxGroup1: ['上海'],
          checkboxGroup2: ['上海'],
          checkboxGroup3: ['上海'],
          checkboxGroup4: ['上海'],
          cities: cityOptions
        }
    },
}
</script>
<style lang="scss">
.checkbox-demo {
}
</style>
