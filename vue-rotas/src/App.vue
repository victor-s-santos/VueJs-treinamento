<template>
  <div id="app">
    
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">
      <router-link 
        to="/home" 
        class="btn btn-info mb-2 mr-2"
        exact>
          Home
        </router-link>
      <router-link 
        :to="{path: '/contatos'}" 
        class="btn btn-info mb-2 mr-2"
        >
          Contatos
          </router-link>
      <router-link 
        to="/contatos/1" 
        class="btn btn-info mb-2 mr-2">
          Contato 1
        </router-link>
      <router-link 
        to="/contatos/2" 
        class="btn btn-info mb-2 mr-2">
          Contato 2
        </router-link>
      <transition name="escorrega" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<style scoped>
  .slide-enter, .slide-leave-to{
    transform: translateX(-50px);
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active{
    transition: all 0.3s;
  }

</style>