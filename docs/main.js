// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import components from '../packages'
import CodingBox from './components/CodingBox'

Vue.use(components)

Vue.component(CodingBox.name, CodingBox)
console.log(components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
