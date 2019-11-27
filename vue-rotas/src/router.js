import Vue from 'vue'
import VueRouter from 'vue-router'
import Contatos from './Views/contatos/Contatos.vue'
import ContatosHome from './Views/contatos/ContatosHome.vue'
import Home from './Views/Home.vue'
import ContatoDetalhes from './Views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './Views/contatos/ContatoEditar.vue'
import Erro404 from './Views/Erro404.vue'
import Erro404Contatos from './Views/contatos/Erro404Contatos.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/contatos', 
      component: Contatos, 
      alias: ['/meus-contatos', '/meus-fisicos', '/nobel'],
      props:(route) => {
        const busca = route.query.busca
        return busca ? {busca} : {}
      },
      children: [
      { path: ':id', 
        component: ContatoDetalhes, 
        name: 'contato', 
        props: true},
      { path: ':id/editar', 
        alias: ':id/alterar',
        components:{ default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes}, 
          props: {default: true, 'contato-detalhes': true}
      },
      { path: '', 
        component: ContatosHome, 
        name: 'contatos'},
      {path: '/contatos*', 
        component: Erro404Contatos},
    ] },
    // { path:'/contatos', redirect:'/meus-contatos'},
    { path: '/home', 
      component: Home, 
      name: 'home' },
    { path: '/', 
      redirect: 'contatos' },
    { path: '*', 
      component: Erro404}
    
  ]
})
