import WTable from './src/table'

/* istanbul ignore next */
WTable.install = function (Vue) {
  Vue.component(WTable.name, WTable)
}

export default WTable
