<template>
  <label
    class="w-radio"
    :class="[
      border && radioSize ? 'w-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="w-radio__input"
          :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="w-radio__inner"></span>
      <input
        class="w-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="w-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../../mixins/emitter'

export default {
  name: 'WRadio',
  componentName: 'WRadio',

  mixins: [Emitter],

  inject: {
    wForm: {
      default: ''
    },

    wFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data () {
    return {
      focus: false
    }
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'WRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      get () {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        if (this.isGroup) {
          this.dispatch('WRadioGroup', 'input', [val])
        } else {
          this.$emit('input', val)
        }
      }
    },
    _wFormItemSize () {
      return (this.wFormItem || {}).wFormItemSize
    },
    radioSize () {
      const temRadioSize = this.size || this._wFormItemSize || (this.$ELEMENT || {}).size
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize
    },
    isDisabled () {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled || (this.wForm || {}).disabled
        : this.disabled || (this.wForm || {}).disabled
    },
    tabIndex () {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0
    }
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this.isGroup && this.dispatch('WRadioGroup', 'handleChange', this.model)
      })
    }
  }
}
</script>
