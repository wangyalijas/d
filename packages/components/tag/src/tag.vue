<template>
  <span :class="['w-tag', `w-tag--${type}`, `w-tag--${size}`]">
    <slot></slot>
    <i v-if="closable" class="w-icon-close" @click="hiddenTag"></i>
  </span>
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
      },
      size: {
        type: String,
        default: 'normal'
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
