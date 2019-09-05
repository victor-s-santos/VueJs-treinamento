Vue.component('adiciona-tarefa', {//component global
    data: function(){
        return{
            nometarefa: '',
        }
    },
    methods:{
        adiciona: function(){
            this.$emit('chamaadd', this.nometarefa);
        }
    },
    template:`
        <div>
            <h2>Insira a tarefa aqui:</h2>
            <input v-model="nometarefa"/>
            <button @click="adiciona">Inserir</button>
        </div>
    `
});

let listadetarefas = {//component local
    props:['tarefas'],
    template: `
        <div>
        <h1>Lista de tarefas</h1>
        <ul>
            <li v-for="tarefa in tarefas">{{tarefa}}</li>
        </ul>
        </div>
    
    `
};

let app1 = new Vue({//setada a primeira instância
    el:"#mydiv1",
    data:{
        tarefas: ['varrer a casa', 'lavar louça'],
    },
    methods:{
        additem:function(nometarefa){
            this.tarefas.push(nometarefa);
        }
    },
    components:{
        listadetarefas
    }
});

let app2 = new Vue({
    el:"#mydiv2",
    methods:{
        adicionalistadetarefas: function(nometarefa){
            app1.additem(nometarefa);
        }

    }
});