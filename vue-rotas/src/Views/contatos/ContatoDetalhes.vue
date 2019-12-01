<template>
    <div v-if="contato">
        <h3 class="font-weight-light">Nome do Contato {{contato.nome}}</h3>
        <p>Email: {{contato.email}}</p>
        <button 
            class="btn btn-secondary.mr-2" 
            @click="$router.back()">Voltar</button>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary">
            Editar Contato</router-link>
    </div>
</template>

<script>
import EventBus from './../../event-bus'

export default {
    data(){
        return{
            nome: 'Victor Santos Silva',
            contato: undefined
        }
    },
    props: {
        id:{
            type: Number,
            required: true
        }
    },
    created(){
        this.contato = EventBus.buscarContato(this.id)
    },
    beforeRouteUpdate(to, from, next){
    }
    // data(){
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
     // watch: {
     //     '$route'(to, from){
     //         this.id = to.params.id
     //     }
     // },
    // beforeRouteUpdate(to, from, next){
    //     this.id = to.params.id
    //     next()
    // }
}
</script>