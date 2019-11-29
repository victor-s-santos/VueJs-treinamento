import Vue from 'vue'
import VueRouter from 'vue-router'
import Contatos from './Views/contatos/Contatos.vue'
import ContatosHome from './Views/contatos/ContatosHome.vue'
import Home from './Views/Home.vue'
import ContatoDetalhes from './Views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './Views/contatos/ContatoEditar.vue'
import Erro404 from './Views/Erro404.vue'
import Erro404Contatos from './Views/contatos/Erro404Contatos.vue'
import Login from './Views/login/Login.vue'

import EventBus from './event-bus'

Vue.use(VueRouter)

const extractParameterId = route => ({
  id: parseInt(route.params.id)
})
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition){
    return{x: 0, y:250}
  },
  routes: [
    { path: '/contatos', 
      component: Contatos, 
      alias: ['/meus-contatos', '/meus-fisicos', '/nobel'],
      props:(route) => {
        const busca = route.query.busca
        return busca ? {busca} : {}
      },
      children: [
      { path: ':id(\\d+)', 
        component: ContatoDetalhes, 
        name: 'contato', 
        props: extractParameterId
        },
      { 
        // path: ':id(\\d+)/editar/:opcional?',
        // path: ':id(\\d+)/editar/:zeroOumais*',
        //path: ':id(\\d+)/editar/:umOumais+',
        path: ':id(\\d+)/editar', 
        alias: ':id(\\d+)/alterar',
        meta: {requerAutenticacao: true},//assim requer autenticação
        beforeEnter(to, from, next){
          next() //continua a navegação
          //next(true) //continua a navegação
          //next(false) //interrompe a navegação
          //next('/contatos') //funciona como redirect,poderia ser assim: next({name: 'contatos})
          //next(new Error(`Você não possui permissões para acessar ${to.fullPath}`))
        },
        components:{ default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes}, 
          props: {default: extractParameterId, 'contato-detalhes': extractParameterId}
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
    { path: '/login', component: Login},

    { path: '/', 
      redirect: 'contatos' },
    { path: '*', 
      component: Erro404}
    
  ]
})

router.beforeResolve((to, from, next) => {
  console.log('Executando beforeResolve!')
  next()
}),

router.beforeEach((to, from, next) => {
  // console.log('Executado BeforeEach')
  const estaAutenticado = EventBus.autenticado
  //console.log("As rotas:", to.matched)
  if(to.matched.some(rota => rota.meta.requerAutenticacao)){//rotas que requerem autenticação
    if(!estaAutenticado){
      next({
        path:'/login',
        query:{ redirecionar: to.fullPath }
      })
      return
    }
  }
  next()
})
router.afterEach((to, from) => {
  console.log('Executado afterEach')
})

router.onError((erro) => {
  console.error(`${erro}!`)
})

export default router