<template>
  <section class="iconx-demo">
    <div v-for="(icon, index) in icons" :key="index" class="icon-wrapper">
      <w-iconx :name="`icon-x-${icon.label}`"></w-iconx>
      <span v-text="`icon-x-${icon.label}`" class="label"></span>
    </div>
  </section>
</template>

<script>
import {bussiness} from '../../icons'
export default {
    data () {
        return {
          icons: bussiness
        }
    }
}
</script>
<style lang="scss">
.iconx-demo {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 15px;
  .icon-wrapper {
    flex-basis: calc(100% / 6);
    padding: 15px;
    text-align: center;
    box-sizing: border-box;
    svg.w-iconx {
      width: 2em;
      height: 2em;
      margin-bottom: 15px;
    }
    span.label {
      display: block;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>