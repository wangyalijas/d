<template>
  <section class="radio-demo">
    <coding-box :code="code">
      <div>
      <w-radio-group v-model="radio3">
        <w-radio-button label="上海"></w-radio-button>
        <w-radio-button label="北京"></w-radio-button>
        <w-radio-button label="广州"></w-radio-button>
        <w-radio-button label="深圳"></w-radio-button>
      </w-radio-group>
      </div>
      <div style="margin-top: 20px">
        <w-radio-group v-model="radio4" size="medium">
          <w-radio-button label="上海" ></w-radio-button>
          <w-radio-button label="北京"></w-radio-button>
          <w-radio-button label="广州"></w-radio-button>
          <w-radio-button label="深圳"></w-radio-button>
        </w-radio-group>
      </div>
      <div style="margin-top: 20px">
        <w-radio-group v-model="radio5" size="small">
          <w-radio-button label="上海"></w-radio-button>
          <w-radio-button label="北京" disabled ></w-radio-button>
          <w-radio-button label="广州"></w-radio-button>
          <w-radio-button label="深圳"></w-radio-button>
        </w-radio-group>
      </div>
      <div style="margin-top: 20px">
        <w-radio-group v-model="radio6" disabled size="mini">
          <w-radio-button label="上海"></w-radio-button>
          <w-radio-button label="北京"></w-radio-button>
          <w-radio-button label="广州"></w-radio-button>
          <w-radio-button label="深圳"></w-radio-button>
        </w-radio-group>
      </div>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<div>
<w-radio-group v-model="radio3">
  <w-radio-button label="上海"></w-radio-button>
  <w-radio-button label="北京"></w-radio-button>
  <w-radio-button label="广州"></w-radio-button>
  <w-radio-button label="深圳"></w-radio-button>
</w-radio-group>
</div>
<div style="margin-top: 20px">
  <w-radio-group v-model="radio4" size="medium">
    <w-radio-button label="上海" ></w-radio-button>
    <w-radio-button label="北京"></w-radio-button>
    <w-radio-button label="广州"></w-radio-button>
    <w-radio-button label="深圳"></w-radio-button>
  </w-radio-group>
</div>
<div style="margin-top: 20px">
  <w-radio-group v-model="radio5" size="small">
    <w-radio-button label="上海"></w-radio-button>
    <w-radio-button label="北京" disabled ></w-radio-button>
    <w-radio-button label="广州"></w-radio-button>
    <w-radio-button label="深圳"></w-radio-button>
  </w-radio-group>
</div>
<div style="margin-top: 20px">
  <w-radio-group v-model="radio6" disabled size="mini">
    <w-radio-button label="上海"></w-radio-button>
    <w-radio-button label="北京"></w-radio-button>
    <w-radio-button label="广州"></w-radio-button>
    <w-radio-button label="深圳"></w-radio-button>
  </w-radio-group>
</div>`,
          radio3: '上海',
          radio4: '上海',
          radio5: '上海',
          radio6: '上海'
        }
    }
}
</script>
<style lang="scss">
.radio-demo {

}
</style>
