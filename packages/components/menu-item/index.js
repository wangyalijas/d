import WMenuItem from '../menu/src/menu-item'

/* istanbul ignore next */
WMenuItem.install = function (Vue) {
  Vue.component(WMenuItem.name, WMenuItem)
}

export default WMenuItem
