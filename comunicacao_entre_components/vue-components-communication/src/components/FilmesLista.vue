<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">
        <FilmesListaIten 
        v-for="filme in filmes"
        :key="filme.id" 
        :filme="filme"/>


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
      filmes: [
        {id: 0, titulo: "Dragon Ball Super", ano:2016},
        {id: 1, titulo: "O Clube da Luta", ano: 1999}, 
        {id: 2, titulo: "Lapso do Tempo", ano: 2017},
        {id: 3, titulo: "O Poderoso Chefão"}
        ]
    }
  }
}
</script>
