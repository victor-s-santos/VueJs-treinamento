<template>
  <div>
    <app-header></app-header>
    <tarefa-unitaria
      :titulo="titulo"
      :feito="feito"
      :tarefas="tarefas"
      >
    </tarefa-unitaria>
    <button @click="atualizaTarefa">Atualizar Tarefa</button>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/HeaderFoot/Footer'
import Tarefa from './components/Tarefa/TarefaUnitaria'

export default {
  data(){
    return{
      titulo: "Amar o mozi",
      feito: false,
      tarefas:
        {
          titulo: "passear com o Noob",
          feito: false,
        },
    }
  },
  methods:{
    atualizaTarefa(){
      this.feito = !this.feito,
      this.titulo = 'Amar o Noob'
    }
  },
  components:{
    'app-footer': Footer,
    'tarefa-unitaria': Tarefa
  }  
}
</script>

<style scoped>

body {
  padding: 0;
  margin: 0;
  background-color: aqua;
}
.container{
  min-height: 80vh;
  box-sizing: border-box;
  padding:20px;
}
</style>