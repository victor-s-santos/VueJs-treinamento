let listadetarefas = {
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
        nome: "Victor",
        tarefas: ['varrer a casa', 'lavar louça'],
    },
    components:{
        listadetarefas
    }
});