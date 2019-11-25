import Vue from 'vue'
import VueRouter from 'vue-router'
import Contatos from './Views/contatos/Contatos.vue'
import ContatosHome from './Views/contatos/ContatosHome.vue'
import Home from './Views/Home.vue'
import ContatoDetalhes from './Views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './Views/contatos/ContatoEditar.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/contatos', component: Contatos, alias: ['/meus-contatos', '/meus-fisicos', '/nobel'],
      children: [
      { path: ':id', component: ContatoDetalhes, name: 'contato'},
      { path: ':id/editar',
        alias: ':id/alterar',
        components:{
          default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes 
        }
      },
      { path: '', component: ContatosHome, name: 'contatos'}
    ] },
    // { path:'/contatos', redirect:'/meus-contatos'},
    { path: '/home', component: Home, name: 'home' },
    { path: '/', redirect: 'contatos' },
    { path: '*', redirect: 'home'}
  ]
})
