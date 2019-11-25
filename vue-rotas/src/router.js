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
    { path: '/contatos', component: Contatos, children: [
      { path: ':id', component: ContatoDetalhes, name: 'contato'},
      { path: ':id/editar', 
        components:{
          default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes 
        }
      },
      { path: '', component: ContatosHome}
    ] },
    { path: '/', component: Home }
  ]
})
