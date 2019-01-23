<template>
  <section class="icon-group-demo">
    <div v-for="(icon, index) in icons" :key="index" class="icon-wrapper">
      <i :class="['w-icon', `w-icon-${icon.label}`]"></i>
      <span v-text="`w-icon-${icon.label}`" class="label"></span>
    </div>
  </section>
</template>

<script>
import {common} from '../../icons'
export default {
    data () {
        return {
          icons: common
        }
    }
}
</script>
<style lang="scss">
.icon-group-demo {
  .icon-x-toulu {
    font-size: 28px;
  }
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .icon-wrapper {
    flex-basis: calc(100% / 6);
    padding: 15px 10px;
    text-align: center;
    box-sizing: border-box;
    i.w-icon {
      line-height: 2;
      font-size: 30px;
      color: #666;
    }
    span.label {
      display: block;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>