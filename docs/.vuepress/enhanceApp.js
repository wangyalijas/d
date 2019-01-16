/**
 * 扩展 VuePress 应用
 */
import Vue from 'vue'
import HighLight from 'highlight.js'
import WinDesign from '../../packages/local'


export default ({
  Vue
}) => {
  Vue.use(WinDesign)
  Vue.prototype.$highLight = HighLight
}
