<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <!-- <ul class="list-group list-group-flush">
        <FilmesListaIten 
        v-for="(filme, index) in filmes"
        :key="index" 
        :filmeTitulo="filme"/> -->
      <filmes-lista-iten :filmeTitulo="filmes[0]"/>


      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data: function(){
    return{
      filmes: ["Dragon Ball Super", "O Clube da Luta", "Lapso do Tempo"]
    }
  }
}
</script>
