<template>
    <span class="w-breadcrumb__item">
        <span :class="['w-breadcrumb__inner', jumpTo ? 'is-link' : '']"
               role="link" ref="breadcrumbLink">
            <slot></slot>
        </span>
        <i v-if="separatorIconClass" :class="separatorIconClass"
           class="w-breadcrumb__separator"></i>
        <span v-else v-text="separator"
              class="w-breadcrumb__separator" role="presentation"></span>
    </span>
</template>
<script>
  export default {
      name: 'WBreadcrumbItem',
      data () {
          return {
              separator: '',
              separatorIconClass: ''
          }
      },
      props: {
          jumpTo: {},
          replace: Boolean
      },
      inject: ['wBreadcrumb'], // 由breadcrumb组件注入依赖
      methods: {
          initSeparator () {
              this.separator = this.wBreadcrumb.separator
              this.separatorIconClass = this.wBreadcrumb.separatorIconClass
          },
          initLink () {
              const link = this.$refs.breadcrumbLink
              if (link) {
                  link.setAttribute('role', link)
                  link.addEventListener('click', () => {
                      const {jumpTo, $router} = this
                      if (!jumpTo || !$router) return
                      this.replace ? $router.replace(jumpTo) : this.$router.push(jumpTo)
                  })
              }
          }
      },
      mounted () {
          this.initSeparator()
          this.initLink()
      }
  }
</script>
