/**
 * 扩展 VuePress 应用
 */
import Vue from 'vue'
import WinDesign from '../../packages/local'


export default ({
  Vue
}) => {
  Vue.use(WinDesign)
}
