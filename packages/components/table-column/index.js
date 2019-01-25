import WTableColumn from '../table/src/table-column'

/* istanbul ignore next */
WTableColumn.install = function (Vue) {
  Vue.component(WTableColumn.name, WTableColumn)
}

export default WTableColumn
