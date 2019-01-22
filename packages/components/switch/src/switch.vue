<template>
  <span class="w-switch"
        role="checkbox"
        tabindex="0"
        @click="toggle"
        :aria-checked="toggled.toString()"
  ></span>
</template>

<script>
export default {
  name: 'WSwitch',
  model: {
    prop: 'toggled',
    event: 'toggle'
  },
  props: ['toggled'],
  methods: {
    toggle () {
      this.$emit('toggle', !this.toggled)
    }
  }
}
</script>
