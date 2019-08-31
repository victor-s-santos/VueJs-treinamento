import Vue from 'vue'

//assim se registra globalmente um component
/*
Vue.component('vss-component', {
  data: function(){
    return{
      nome: 'Victor Santos Silva',
      contador: 0,
    } 
  },
  methods:{
    incrementa: function(){
      this.contador ++
    }
  },
  template:`
  <div>
    <h1>Meu nome é: {{nome}}</h1>
    <h2>{{contador}}</h2>
    <button @click="incrementa">Clicado {{contador}} vezes</button>
  </div>
  `
})
*/
//assim se registra localmente
const vssComponent = {
    data: function(){
      return{
        nome: 'Victor Santos Silva',
        contador: 0,
      } 
    },
    methods:{
      incrementa: function(){
        this.contador ++
      }
    },
    template:`
    <div>
      <h1>Meu nome é: {{nome}}</h1>
      <h2>{{contador}}</h2>
      <button @click="incrementa">Clicado {{contador}} vezes</button>
    </div>
    `
  }
new Vue({
  el: '#app',
  components: {
    'vss-component': vssComponent
  }
})
new Vue({
  el:'#app2',
  components:{
    'vss-component': vssComponent
  }
})
//aqui se verifica que, apesar de haver 2 contador, eles são individuais, um
//para cada component chamado