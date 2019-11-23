import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Contatos from './Views/contatos/Contatos.vue'
import Home from './Views/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/contatos', component: Contatos },
    { path: '/', component: Home }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
