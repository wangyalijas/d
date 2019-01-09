import WTag from './tag/index'

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

module.exports = {
  install,
  WTag
}

module.exports.default = module.exports
