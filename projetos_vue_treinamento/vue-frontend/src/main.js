import Vue from 'vue';
import App from './App.vue';
import Header from './components/HeaderFoot/Header.vue';

//registrando component globalmente
Vue.component('app-header', Header)

new Vue({
  el: '#mydiv1',
  render: h => h(App)
})