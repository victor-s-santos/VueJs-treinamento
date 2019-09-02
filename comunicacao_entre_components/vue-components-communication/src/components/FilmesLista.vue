<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <div class="list-group list-group-flush">

        <FilmesListaIten filmeTitulo="Dragon Ball Super"/>
        <FilmesListaIten filmeTitulo="O Clube da Luta"/>
        <FilmesListaIten filmeTitulo="Lapso do Tempo"/>

      </div>
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
  }
}
</script>
