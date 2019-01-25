import WMenu from './src/menu'

/* istanbul ignore next */
WMenu.install = function (Vue) {
  Vue.component(WMenu.name, WMenu)
}

export default WMenu
