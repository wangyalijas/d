<template>
    <div class="w-breadcrumb" aria-label="Breadcrumb" role="navigation">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'WBreadcrumb',
    props: {
        separator: {
            type: String,
            default: '/'
        },
        separatorClass: {
            type: String,
            default: ''
        }
    },
    provide () {
        return {
            wBreadcrumb: this
        }
    },
    mounted () {
        const breadcrumbItems = this.$el.querySelectorAll('.w-breadcrumb__item')
        if (breadcrumbItems.length) {
            breadcrumbItems[breadcrumbItems.length - 1].setAttribute('aria-current', 'page')
        }
    }
}
</script>

