/**
 * 发布用
 */
import components from './components'

const install = (Vue) => {
  if (install.installed) return
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  ...components
}

module.exports.default = module.exports
