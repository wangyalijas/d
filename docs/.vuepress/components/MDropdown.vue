<template>
  <section class="input-demo">
    <coding-box :code="code">
      <w-dropdown>
  <span class="w-dropdown-link">
    下拉菜单<i class="w-icon-arrow-down w-icon--right"></i>
  </span>
  <w-dropdown-menu slot="dropdown">
    <w-dropdown-item>黄金糕</w-dropdown-item>
    <w-dropdown-item>狮子头</w-dropdown-item>
    <w-dropdown-item>螺蛳粉</w-dropdown-item>
    <w-dropdown-item disabled>双皮奶</w-dropdown-item>
    <w-dropdown-item divided>蚵仔煎</w-dropdown-item>
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
