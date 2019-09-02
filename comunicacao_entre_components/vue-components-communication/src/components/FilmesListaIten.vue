<template>
    <li class="list-group-item">
        <!--<span>{{ filmeTitulo }}</span>-->
        <span>{{filmeConcatenado}}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props: {
        filmeTitulo: String
        },
    computed:{
        filmeConcatenado(){
            return `Título: ${this.filmeTitulo}`
        }
    }
}
</script>
