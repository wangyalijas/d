/**
 * 发布用
 */
import './themes/fonts/iconfont'
import components from './components'
import methods from './methods'

const install = (Vue) => {
  if (install.installed) return
  components.forEach(component => Vue.component(component.name, component))
  let {Loading, Message, MessageBox, Notification} = methods
  Vue.use(Loading.directive)
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  ...components
}

module.exports.default = module.exports
