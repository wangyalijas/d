<template>
  <transition name="w-zoom-in-center">
    <div class="w__tag" :class="'w__tag--'+color">
      <span class="w__tag--desc"><slot></slot></span>
      <i v-if="closable" class="w-icon-close2 w__tag--close" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'WTag',
    props: {
      closable: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
<style lang="scss">
.w__tag {
    display: inline-block;
    padding: 1px 8px;
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    outline: 0;
    color: #3f536e;
    border-color: #dfdfdf;
    background-color: #f7f7f7;
}
</style>
