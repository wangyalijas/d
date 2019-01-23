<template>
  <section class="icon-demo">
    <coding-box :code="code">
      <section class="demo-wrapper">
        <h1 class="label">通用字体图标</h1>
        <i v-for="(icon, index) in icons" :key="index"
           :class="['w-icon-' + icon, 'w-icon']"></i>
      </section>
      <section class="demo-wrapper">
        <h1 class="label">行业图标</h1>
        <w-iconx v-for="(icon, index) in iconxs" :key="index"
                 :name="'icon-x-' + icon"></w-iconx>
      </section>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          icons: ['close', 'view', 'search', 'delete'],
          iconxs: ['toulu', 'erduo', 'xigainv', 'xizang', 'fei', 'weibu'],
          code: `<template>
  <section class="demo-wrapper">
    <h1 class="label">通用字体图标</h1>
    <i v-for="(icon, index) in icons" :key="index"
       :class="['w-icon-' + icon, 'w-icon']"></i>
  </section>
  <section class="demo-wrapper">
    <h1 class="label">行业图标</h1>
    <w-iconx v-for="(icon, index) in iconxs" :key="index"
             :name="'icon-x-' + icon"></w-iconx>
  </section>
</template>
<script>
<\/script>`
        }
    }
}
</script>
<style lang="scss">
.icon-demo {
  .demo-wrapper {
    margin-bottom: 10px;
    h1.label {
      margin: 0 0 15px 0;
      padding: 10px 0;
      font-size: 16px;
      font-weight: normal;
      border-bottom: 1px dashed #eee;
    }
    i.w-icon {
      font-size: 24px;
    }
    i.w-icon+i.w-icon,
    svg.w-iconx+svg.w-iconx {
      margin-left: 20px;
    }
  }
}
</style>