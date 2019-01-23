<template>
  <section class="button-demo__icon">
    <coding-box :code="code">
      <section class="demo-wrapper">
        <w-button type="primary" icon="w-icon-edit"></w-button>
        <w-button type="primary" icon="w-icon-share"></w-button>
        <w-button type="primary" icon="w-icon-delete"></w-button>
        <w-button type="primary" icon="w-icon-search">搜索</w-button>
        <w-button type="primary">上传<i class="w-icon-upload w-icon--right"></i></w-button>
      </section>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: '',
          code: `<template>
  <w-button type="primary" icon="w-icon-edit"></w-button>
  <w-button type="primary" icon="w-icon-share"></w-button>
  <w-button type="primary" icon="w-icon-delete"></w-button>
  <w-button type="primary" icon="w-icon-search">搜索</w-button>
  <w-button type="primary">上传<i class="w-icon-upload w-icon--right"></i></w-button>
</template>
`
        }
    }
}
</script>
<style lang="scss">
</style>
