<template>
    <div>
        <h3 class="font-weight-light">Detatlhes do Contato {{id}}</h3>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary">
            Editar Contato</router-link>
    </div>
</template>

<script>
export default {
    props: {
        id:{
            type: Number,
            required: true
        }
    },
    beforeRouteUpdate(to, from, next){
        console.log('Executando beforeRouteUpdate de dentro do component')
        next()
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