<template>
    <span class="w-breadcrumb__item">
        <span :class="['w-breadcrumb__inner', to ? 'is-link' : '']"
               role="link" ref="breadcrumbLink">
            <slot></slot>
        </span>
        <i v-if="separatorClass" :class="separatorClass"
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
              separatorClass: ''
          }
      },
      props: {
          to: {},
          replace: Boolean
      },
      inject: ['wBreadcrumb'], // 由breadcrumb组件注入依赖
      methods: {
          initSeparator () {
              this.separator = this.wBreadcrumb.separator
              this.separatorClass = this.wBreadcrumb.separatorClass
          },
          initLink () {
              const link = this.$refs.breadcrumbLink
              if (link) {
                  link.setAttribute('role', link)
                  link.addEventListener('click', () => {
                      const {to, $router} = this
                      if (!to || !$router) return
                      this.replace ? $router.replace(to) : this.$router.push(to)
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
