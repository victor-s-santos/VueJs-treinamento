<template>
    <div class="containuer">
        <div class="tarefa_unitaria">
            <h3>Tarefa:</h3>
            <ul>
                <li><span>Título: </span>{{titulo}}</li>
                <li><span>Importância(0 a 10): </span>{{importancia}}</li>
                <li><span>Feito: </span>{{feito}}</li>
            </ul>
            <h3>Lista de Tarefas</h3> 
            <ul>
                <li v-for="(key, value, index) in tarefas" :key="index">
                    <span>
                        {{value}}:
                    </span>
                        {{key}}
                </li>
            </ul>
        </div>
        <button @click="mudaTarefa">Muda tarefa</button>
    </div>
</template>

<script>
export default {
    //props: ['titulo', 'feito']
    //validando
    props:{
        titulo: String,
        importancia: Number,
        feito: Boolean,
        tarefas: Object
        // tarefas:{ isso nao funciona
        //     titulo: String,
        //     importancia: Number,
        //     feito: Boolean
        // }

    },
    methods:{
        mudaTarefa(){
            this.$emit('mudaTarefa', 'uma nova tarefa')
        } 

    }
}
</script>

<style scoped>
    span {
        font-weight: 800;
    }
    .tarefa_unitaria{
        border: 1px solid rgb(28, 22, 70); 
        padding: 10px;
        border-radius: 25px;
    }
</style>