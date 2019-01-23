<template>
  <section class="checkbox-demo">
    <coding-box :code="code">
      <w-checkbox v-model="checked">备选项</w-checkbox>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: ` <w-checkbox v-model="checked">备选项</w-checkbox>`,
          checked: true,
        }
    }
}
</script>
<style lang="scss">
.checkbox-demo {

}
</style>
