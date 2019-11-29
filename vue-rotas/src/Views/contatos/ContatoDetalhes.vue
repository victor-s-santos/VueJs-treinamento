<template>
    <div>
        <h3 class="font-weight-light">Detatlhes do Contato {{id}}</h3>
        <div style="height: 900px"></div>
        <h4 class="font-weight-light">Parâmetros do Contato {{parametros}}</h4>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary">
            Editar Contato</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nome: 'Victor Santos Silva',
            parametros: this.$route.params
        }
    },
    props: {
        id:{
            type: Number,
            required: true
        }
    },
    beforeRouteUpdate(to, from, next){
        console.log('Executando beforeRouteUpdate de dentro do component')
        console.log(`Não necessito de um callback para acessar a instância vue ${this.nome}`)
        this.parametros = to.params
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