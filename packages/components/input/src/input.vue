<template>
    <div :class="[
      inputSize ? `w-input--${inputSize}` : '',
      type === 'textarea' ? 'w-textarea' : 'w-input',
      {
        'is-disabled': inputDisabled,
        'w-input-group': $slots.prepend || $slots.append,
        'w-input-group--append': $slots.append,
        'w-input-group--prepend': $slots.prepend,
        'w-input--prefix': $slots.prefix || prefixIcon,
        'w-input--suffix': $slots.suffix || suffixIcon || clearable
      }
    ]" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <!-- 非textarea -->
        <template v-if="type !== 'textarea'">
            <!-- prepend element-->
            <div v-if="$slots.prepend" class="w-input-group__prepend">
                <slot name="prepend"></slot>
            </div>
            <!-- prepend content -->
            <span v-if="$slots.prefix || prefixIcon" class="w-input__prefix">
                <slot name="prefix"></slot>
                <i v-if="prefixIcon" :class="['w-input__icon', prefixIcon]"></i>
            </span>
            <!-- input -->
            <input v-bind="$attrs" ref="input" class="w-input__inner" :tabindex="tabindex"
                   :type="type" :disabled="inputDisabled" :readonly="readonly" :aria-label="label"
                   :autocomplete="autoComplete || autocomplete" :value="nativeInputValue"
                   @compositionstart="handleComposition"
                   @compositionupdate="handleComposition"
                   @compositionend="handleComposition"
                   @input="handleInput" @focus="handleFocus"
                   @blur="handleBlur" @change="handleChange">
            <!-- suf element -->
            <span v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon"
                  class="w-input__suffix">
              <span class="w-input__suffix-inner">
                <template v-if="!showClear">
                    <slot name="suffix"></slot>
                    <i v-if="suffixIcon" :class="['w-input__icon', suffixIcon]"></i>
                </template>
                <i v-else title="清空内容" class="w-input__icon w-icon-circle-close w-input__clear" @click="clear"></i>
                </span>
                <i v-if="validateState"
                   :class="['w-input__icon', 'w-input__validateIcon', validateIcon]">
                </i>
            </span>
            <!-- 后置元素 -->
            <div v-if="$slots.append" class="w-input-group__append">
                <slot name="append"></slot>
            </div>
        </template>
        <!-- textarea -->
        <textarea v-else v-bind="$attrs" ref="textarea" class="w-textarea__inner"
                  :aria-label="label" :tabindex="tabindex"
                  :value="nativeInputValue" :disabled="inputDisabled"
                  :readonly="readonly" :autocomplete="autoComplete || autocomplete"
                  :style="textareaStyle"
                  @compositionstart="handleComposition"
                  @compositionupdate="handleComposition"
                  @compositionend="handleComposition"
                  @input="handleInput" @focus="handleFocus"
                  @blur="handleBlur" @change="handleChange">
        </textarea>
    </div>
</template>
<script>
import emitter from '../../../mixins/emitter'
import migrating from '../../../mixins/migrating'
import calcTextareaHeight from './computedTextareaHeight'
import merge from '../../../utils/merge'
export default {
    name: 'WInput',
    data () {
        return {
            focused: false,
            hovering: false,
            isOnComposition: false,
            textareaCalcStyle: {}
        }
    },
    props: {
        autosize: {
            type: [Boolean, Object],
            default: false
        },
        autocomplete: {
          type: String,
          default: 'off'
        },
        autoComplete: {
            type: String,
            validator(val) {
            process.env.NODE_ENV !== 'production' &&
                console.warn('[Win-design Warn][Input]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.')
            return true
            }
        },
        clearable: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        form: String,
        label: String,
        resize: String,
        readonly: Boolean,
        size: String,
        suffixIcon: String,
        prefixIcon: String,
        tabindex: String,
        type: {
            type: String,
            default: 'text'
        },
        value: [String, Number],
        validateEvent: {
            type: Boolean,
            default: true
        }
    },
    inheritAttrs: false,
    inject: {
      wForm: {
        default: ''
      },
      wFormItem: {
        default: ''
      }
    },
    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize
      },
      validateState() {
        return this.elFormItem ? this.elFormItem.validateState : ''
      },
      needStatusIcon() {
        return this.elForm ? this.elForm.statusIcon : false
      },
      validateIcon() {
        return {
          validating: 'w-icon-loading',
          success: 'w-icon-circle-check',
          error: 'w-icon-circle-close'
        }[this.validateState]
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize })
      },
      inputSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
      },
      inputDisabled() {
        return this.disabled || (this.elForm || {}).disabled
      },
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : this.value
      },
      showClear() {
        return this.clearable &&
          !this.inputDisabled &&
          !this.readonly &&
          this.nativeInputValue &&
          (this.focused || this.hovering)
      }
    },
    mixins: [emitter, migrating],
    methods: {
        focus() {
        (this.$refs.input || this.$refs.textarea).focus()
      },
      blur() {
        (this.$refs.input || this.$refs.textarea).blur()
      },
      getMigratingConfig() {
        return {
          props: {
            'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
            'on-icon-click': 'on-icon-click is removed.'
          },
          events: {
            'click': 'click is removed.'
          }
        }
      },
      handleBlur(event) {
        this.focused = false
        this.$emit('blur', event)
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.value])
        }
      },
      select() {
        (this.$refs.input || this.$refs.textarea).select()
      },
      resizeTextarea() {
        if (this.$isServer) return
        const { autosize, type } = this
        if (type !== 'textarea') return
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          }
          return
        }
        const minRows = autosize.minRows
        const maxRows = autosize.maxRows

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
      },
      handleFocus(event) {
        this.focused = true
        this.$emit('focus', event)
      },
      handleComposition(event) {
        if (event.type === 'compositionstart') {
          this.isOnComposition = true
        }
        if (event.type === 'compositionend') {
          this.isOnComposition = false
          this.handleInput(event)
        }
      },
      handleInput(event) {
        if (this.isOnComposition) return

        // hack for https://github.com/ElemeFE/element/issues/8548
        // should remove the following line when we don't support IE
        if (event.target.value === this.nativeInputValue) return

        this.$emit('input', event.target.value)

        // set input's value, in case parent refuses the change
        // see: https://github.com/ElemeFE/element/issues/12850
        this.$nextTick(() => { this.$refs.input.value = this.value })
      },
      handleChange(event) {
        this.$emit('change', event.target.value)
      },
      calcIconOffset(place) {
        let elList = [].slice.call(this.$el.querySelectorAll(`.w-input__${place}`) || [])
        if (!elList.length) return
        let el = null
        for (let i = 0; i < elList.length; i++) {
          if (elList[i].parentNode === this.$el) {
            el = elList[i]
            break
          }
        }
        if (!el) return
        const pendantMap = {
          suffix: 'append',
          prefix: 'prepend'
        }

        const pendant = pendantMap[place]
        if (this.$slots[pendant]) {
          el.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${this.$el.querySelector(`.w-input-group__${pendant}`).offsetWidth}px)`
        } else {
          el.removeAttribute('style')
        }
      },
      updateIconOffset() {
        this.calcIconOffset('prefix')
        this.calcIconOffset('suffix')
      },
      clear() {
        this.$emit('input', '')
        this.$emit('change', '')
        this.$emit('clear')
      }
    },
    created () {
        this.$on('inputSelect', this.select)
    },
    mounted () {
        this.resizeTextarea()
        this.updateIconOffset()
    },
    updated () {
        this.$nextTick(this.updateIconOffset)
    },
    watch: {
      value(val) {
        this.$nextTick(this.resizeTextarea)
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', [val])
        }
      }
    }
}
</script>
