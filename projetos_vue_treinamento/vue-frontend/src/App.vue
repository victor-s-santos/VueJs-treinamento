<template>
  <div>
    <app-header></app-header>
    <tarefa-unitaria
      :titulo="titulo"
      :feito="feito"
      :tarefas="tarefas"
      @eventomuda="titulo = $event"
      >
    </tarefa-unitaria>
    <button @click="atualizaTarefa('Tarefinha nova')">Atualizar Tarefa</button>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/HeaderFoot/Footer'
import Tarefa from './components/Tarefa/TarefaUnitaria'

export default {
  data(){
    return{
      titulo: "Primeira Tarefa",
      feito: false,
      tarefas:
        {
          titulo: "Segunda Tarefa",
          feito: false,
          importancia: 10
        },
    }
  },
  methods:{
    atualizaTarefa(value){
      this.feito = !this.feito,
      this.titulo = value
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