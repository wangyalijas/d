<script>
import Emitter from '../../../mixins/emitter'

export default {
  name: 'WCheckboxGroup',

  componentName: 'WCheckboxGroup',

  mixins: [Emitter],

  inject: {
    wFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _wFormItemSize () {
      return (this.wFormItem || {}).wFormItemSize
    },
    checkboxGroupSize () {
      return this.size || this._wFormItemSize || (this.$ELEMENT || {}).size
    }
  },

  watch: {
    value (value) {
      this.dispatch('WFormItem', 'w.form.change', [value])
    }
  }
}
</script>

<template>
  <div class="w-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
