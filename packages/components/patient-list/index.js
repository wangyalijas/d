import PatientList from './src/main';

/* istanbul ignore next */
PatientList.install = function(Vue) {
  Vue.component(PatientList.name, PatientList);
};

export default PatientList;
