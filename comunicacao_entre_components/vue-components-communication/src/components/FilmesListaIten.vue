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
            default(){ 
                return `Efeito Borboleta`
            },
            validator(titulo){
                return titulo.includes('a')
//como o nome default possui a string a, não acusa erro no console
            }

        } 
        
    },
    computed:{
        filmeConcatenado(){
            return `Título: ${this.filmeTitulo}`
        }
    }
}
</script>
