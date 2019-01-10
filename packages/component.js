import WTag from './components/tag'

const components = [
  WTag
]

const install = (Vue) => {
  if (install.installed) return
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WTag
}
