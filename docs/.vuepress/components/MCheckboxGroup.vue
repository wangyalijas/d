<template>
  <section class="checkbox-demo">
    <coding-box :code="code">
      <w-checkbox-group v-model="checkList">
        <w-checkbox label="复选框 A"></w-checkbox>
        <w-checkbox label="复选框 B"></w-checkbox>
        <w-checkbox label="复选框 C"></w-checkbox>
        <w-checkbox label="禁用" disabled></w-checkbox>
        <w-checkbox label="选中且禁用" disabled></w-checkbox>
      </w-checkbox-group>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-checkbox-group v-model="checkList">
  <w-checkbox label="复选框 A"></w-checkbox>
  <w-checkbox label="复选框 B"></w-checkbox>
  <w-checkbox label="复选框 C"></w-checkbox>
  <w-checkbox label="禁用" disabled></w-checkbox>
  <w-checkbox label="选中且禁用" disabled></w-checkbox>
</w-checkbox-group>`,
          checkList: ['选中且禁用','复选框 A']
        }
    }
}
</script>
<style lang="scss">
.checkbox-demo {
}
</style>
