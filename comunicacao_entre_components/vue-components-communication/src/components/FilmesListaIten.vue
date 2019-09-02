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
        filmeTitulo:{
            type: [String, Array],
            //required: true,
            default: "Efeito Borboleta"

        } 
        
    },
    computed:{
        filmeConcatenado(){
            return `Título: ${this.filmeTitulo}`
        }
    }
}
</script>
