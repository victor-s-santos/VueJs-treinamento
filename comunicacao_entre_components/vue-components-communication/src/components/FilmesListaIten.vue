<template>
    <li class="list-group-item">
        <!--<span>{{ filmeTitulo }}</span>-->
        <span>{{filmeConcatenado}} {{ano}}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props: {
        titulo:{
            type: [String, Array],
            required: true,
            default(){ 
                return `Efeito Borboleta`
            },
//             validator(titulo){
//                 return titulo.includes('a')
// como o nome default possui a string a, não acusa erro no console
//             }

        },
        ano:{
            type: Number,
            // default(){
            //     return 1993
            // },
            required: false,
        } 
        
    },
    computed:{
        filmeConcatenado(){
            return `Título: ${this.titulo}`
        }
    }
}
</script>
