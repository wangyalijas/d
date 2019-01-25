<template>
  <transition name="w-zoom-in-top" @after-leave="doDestroy">
    <div v-show="showPopper" role="region"
         :class="['w-autocomplete-suggestion', 'w-popper', !parent.hideLoading && parent.loading ? 'is-loading' : '']"
         :style="{ width: dropdownWidth }">
      <w-scrollbar tag="ul"
                    wrap-class="w-autocomplete-suggestion__wrap"
                    view-class="w-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading">
          <i class="w-icon-loading"></i>
        </li>
        <slot v-else></slot>
      </w-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from '../../../utils/vue-popper'
  import Emitter from '../../../mixins/emitter'
  import WScrollbar from '../../scrollbar'
  export default {
    components: { WScrollbar },
    mixins: [Popper, Emitter],
    componentName: 'WAutocompleteSuggestions',
    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },
    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },
    methods: {
      select(item) {
        this.dispatch('WAutocomplete', 'item-click', item)
      }
    },
    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper()
      })
    },
    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el
      this.referenceElm = this.$parent.$refs.input.$refs.input
      this.referenceList = this.$el.querySelector('.w-autocomplete-suggestion__list')
      this.referenceList.setAttribute('role', 'listbox')
      this.referenceList.setAttribute('id', this.id)
    },
    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px'
        this.showPopper = val
      })
    }
  }
</script>
