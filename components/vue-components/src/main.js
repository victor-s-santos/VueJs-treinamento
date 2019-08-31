import Vue from 'vue'

Vue.component('vss-component', {
  //necessita ser passada como função
  data: function(){
    return {
      nome: 'Victor Santos Silva'
    }

  },
  template: '<h1>{{nome}}</h1>'
})

new Vue({
  el: '#app',
})
