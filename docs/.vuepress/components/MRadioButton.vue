<template>
  <section class="radio-demo">
    <coding-box :code="code">
      <w-radio-group v-model="radio3">
        <w-radio-button label="上海"></w-radio-button>
        <w-radio-button label="北京"></w-radio-button>
        <w-radio-button label="广州"></w-radio-button>
        <w-radio-button label="深圳"></w-radio-button>
      </w-radio-group>
      <w-radio-group v-model="radio3" size="medium">
        <w-radio-button label="上海"></w-radio-button>
        <w-radio-button label="北京"></w-radio-button>
        <w-radio-button label="广州"></w-radio-button>
        <w-radio-button label="深圳"></w-radio-button>
      </w-radio-group>
      <w-radio-group v-model="radio3" size="small">
        <w-radio-button label="上海"></w-radio-button>
        <w-radio-button label="北京"></w-radio-button>
        <w-radio-button label="广州"></w-radio-button>
        <w-radio-button label="深圳"></w-radio-button>
      </w-radio-group>
      <w-radio-group v-model="radio3" size="mini">
        <w-radio-button label="上海"></w-radio-button>
        <w-radio-button label="北京"></w-radio-button>
        <w-radio-button label="广州"></w-radio-button>
        <w-radio-button label="深圳"></w-radio-button>
      </w-radio-group>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-radio-group v-model="radio3">
  <w-radio-button label="上海"></w-radio-button>
  <w-radio-button label="北京"></w-radio-button>
  <w-radio-button label="广州"></w-radio-button>
  <w-radio-button label="深圳"></w-radio-button>
</w-radio-group>`,
          radio3: '上海',
        }
    }
}
</script>
<style lang="scss">
.radio-demo {

}
</style>
