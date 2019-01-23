<template>
  <section class="input-demo">
    <coding-box :code="code">
      <w-dropdown split-button type="primary">
        默认尺寸
        <w-dropdown-menu slot="dropdown">
          <w-dropdown-item>黄金糕</w-dropdown-item>
          <w-dropdown-item>狮子头</w-dropdown-item>
          <w-dropdown-item>螺蛳粉</w-dropdown-item>
          <w-dropdown-item>双皮奶</w-dropdown-item>
          <w-dropdown-item>蚵仔煎</w-dropdown-item>
        </w-dropdown-menu>
      </w-dropdown>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: '',
          code: `<template>
  <w-input v-model="value" placeholder="请输入..."></w-input>
</template>
<script>
  export default {
    data () {
      return {
          value: ''
      }
    }
  }
<\/script>
`
        }
    }
}
</script>
