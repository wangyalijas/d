<template>
  <ul class="w-select-group__wrap" v-show="visible">
    <li class="w-select-group__title">{{ label }}</li>
    <li>
      <ul class="w-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
import Emitter from '../../../mixins/emitter'

export default {
  mixins: [Emitter],

  name: 'WOptionGroup',

  componentName: 'WOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      visible: true
    }
  },

  watch: {
    disabled (val) {
      this.broadcast('WOption', 'handleGroupDisabled', val)
    }
  },

  methods: {
    queryChange () {
      this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true)
    }
  },

  created () {
    this.$on('queryChange', this.queryChange)
  },

  mounted () {
    if (this.disabled) {
      this.broadcast('WOption', 'handleGroupDisabled', this.disabled)
    }
  }
}
</script>
