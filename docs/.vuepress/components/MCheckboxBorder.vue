<template>
  <section class="checkbox-demo">
    <coding-box :code="code">
      <div>
        <w-checkbox v-model="checked3" label="备选项1" border></w-checkbox>
        <w-checkbox v-model="checked4" label="备选项2" border></w-checkbox>
      </div>
      <div style="margin-top: 20px">
        <w-checkbox v-model="checked5" label="备选项1" border size="medium"></w-checkbox>
        <w-checkbox v-model="checked6" label="备选项2" border size="medium"></w-checkbox>
      </div>
      <div style="margin-top: 20px">
        <w-checkbox-group v-model="checkboxGroup5" size="small">
          <w-checkbox label="备选项1" border></w-checkbox>
          <w-checkbox label="备选项2" border disabled></w-checkbox>
        </w-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <w-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
          <w-checkbox label="备选项1" border></w-checkbox>
          <w-checkbox label="备选项2" border></w-checkbox>
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
          code: `<div>
  <w-checkbox v-model="checked3" label="备选项1" border></w-checkbox>
  <w-checkbox v-model="checked4" label="备选项2" border></w-checkbox>
</div>
<div style="margin-top: 20px">
  <w-checkbox v-model="checked5" label="备选项1" border size="medium"></w-checkbox>
  <w-checkbox v-model="checked6" label="备选项2" border size="medium"></w-checkbox>
</div>
<div style="margin-top: 20px">
  <w-checkbox-group v-model="checkboxGroup5" size="small">
    <w-checkbox label="备选项1" border></w-checkbox>
    <w-checkbox label="备选项2" border disabled></w-checkbox>
  </w-checkbox-group>
</div>
<div style="margin-top: 20px">
  <w-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
    <w-checkbox label="备选项1" border></w-checkbox>
    <w-checkbox label="备选项2" border></w-checkbox>
  </w-checkbox-group>
</div>`,
          checked3: true,
          checked4: false,
          checked5: false,
          checked6: true,
          checkboxGroup5: [],
          checkboxGroup6: []
        }
    },
}
</script>
<style lang="scss">
.checkbox-demo {
}
</style>
