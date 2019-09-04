let tarefainput = {//component local
    data:function(){
        return{
            listadetarefas: [],
            tarefa: "",
        }
    },
    methods:{
        enviar: function(){
            this.listadetarefas.push(this.tarefa);
            this.tarefa = '';
        }
    },
    template:`
    <div>
    <h2>
        Insira as tarefas a serem computadas:
    </h2>
    <br>
    <input v-model="tarefa" placeholder="Tarefa"/>
    <button @click="enviar">Adiciona Tarefa</button>
    </div>`

};

let cabecalho = new Vue({//primeira instância
    el:'#mydiv1',
    data:{
        titulo: 'Usando Components',
    }
});

let corpo = new Vue({//segunda instância
    el: '#mydiv2',
    data:{
        informativo: 'Registrando sua lista de tarefas.',
        listadetarefas: [],
        tarefa: "",

    },
    components:{
        tarefainput: tarefainput
    }
});
