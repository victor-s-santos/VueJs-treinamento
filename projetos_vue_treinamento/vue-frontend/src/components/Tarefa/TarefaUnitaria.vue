<template>
    <div class="containuer">
        <div class="tarefa_unitaria">
            <h3>Tarefa:</h3>
            <ul>
                <li><span>Título: </span>{{titulo}}</li>
                <li><span>Feito: </span>{{feito}}</li>
            </ul>
            <h3>Lista de Tarefas</h3> 
            <ul>
                <li v-for="(key, value, index) in tarefas" :key="index">
                    <span>
                        {{key}}:
                    </span>
                    {{value}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    //props: ['titulo', 'feito']
    //validando
    props:{
        titulo: String,
        feito: Boolean,
        tarefas: Object
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