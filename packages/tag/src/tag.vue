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
      closable: Boolean,
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
