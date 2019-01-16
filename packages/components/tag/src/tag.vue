<template>
  <transition name="w-zoom-in-center">
    <div class="w-tag" :class="`w-tag__${type}`">
      <span class="w-tag__desc"><slot></slot></span>
      <i v-if="closable" class="w-icon-close2 w-tag__close" @click="hiddenTag"></i>
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
      type: {
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
.w-tag {
    display: inline-block;
    height: 32px;
    line-height: 30px;
    padding: 0 10px;
    white-space: nowrap;
    font-size: 12px;
    color: #409eff;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(64,158,255,.2);
    background-color: rgba(64,158,255,.1);
}
.w-tag__success {
  background-color: rgba(103,194,58,.1);
  border-color: rgba(103,194,58,.2);
  color: #67c23a;
}
.w-tag__info {
  background-color: hsla(220,4%,58%,.1);
  border-color: hsla(220,4%,58%,.2);
  color: #909399;
}
.w-tag__warning {
  background-color: rgba(230,162,60,.1);
  border-color: rgba(230,162,60,.2);
  color: #e6a23c;
}
.w-tag__error {
  background-color: hsla(0,87%,69%,.1);
  border-color: hsla(0,87%,69%,.2);
  color: #f56c6c;
}
</style>
