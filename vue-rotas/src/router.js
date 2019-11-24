import Vue from 'vue'
import VueRouter from 'vue-router'
import Contatos from './Views/contatos/Contatos.vue'
import Home from './Views/Home.vue'
import ContatoDetalhes from './Views/contatos/ContatoDetalhes.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/contatos', component: Contatos },
    { path: '/contatos/:id', component: ContatoDetalhes}, //rotas-contatos.com/contatos/1, rota dinâmica
    { path: '/', component: Home }
  ]
})
