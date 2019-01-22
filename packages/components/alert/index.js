import Alert from './src/alert'

Alert.install = (Vue) => {
  Vue.install(Alert.name, Alert)
}
export default Alert
