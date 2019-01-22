<template>
    <div v-show="visible" :class="['w-alert', typeClass, alignCenter ? 'is-center' : '']" role="alert">
        <!-- icon -->
        <i v-if="showIcon" :class="['w-alert__icon', iconClass]"></i>
        <!-- content -->
        <div class="w-alert__content">
            <span v-if="title || $slots.title" :class="['w-alert__title', isBoldTitle]">
                <slot name="title">{{title}}</slot>
            </span>
            <slot>
                <p v-if="description" v-text="description" class="w-alert__description"></p>
            </slot>
        </div>
        <!-- close icon -->
        <i v-show="closable" v-text="closeText" :class="{'is-default': closeText !== '', 'w-icon-close': closeText === ''}"
           class="w-alert__closebutton" @click="handleClose()"></i>
    </div>
</template>
<script>
export default {
  name: 'WAlert',
  data () {
    return {
      visible: true
    }
  },
  props: {
    showIcon: Boolean,
    alignCenter: Boolean,
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    boldTitle: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeClass () {
      return `w-alert--${this.type}`
    },
    iconClass () {
      return this.type ? `w-icon-${this.type}` : 'w-icon-info'
    },
    isBoldTitle () {
      return this.boldTitle && this.description ? 'is-bold' : ''
    }
  },
  methods: {
    handleClose () {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>
