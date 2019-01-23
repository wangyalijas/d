import WAutocomplete from './src/autocomplete'

WAutocomplete.install = (Vue) => {
  Vue.component(WAutocomplete.name, WAutocomplete)
}

export default WAutocomplete
