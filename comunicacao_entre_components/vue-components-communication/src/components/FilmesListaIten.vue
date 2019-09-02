<template>
    <li class="list-group-item">
        <!--<span>{{ filmeTitulo }}</span>-->
        <span>{{filmeConcatenado}} {{filmeLancamento}}</span>
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

        },
        filmeLancamento:{
            type: Number,
            required: true,
        } 
        
    },
    computed:{
        filmeConcatenado(){
            return `Título: ${this.filmeTitulo}`
        }
    }
}
</script>
