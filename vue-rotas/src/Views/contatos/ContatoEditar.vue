<template>
    <div>
        <h3 
        class="font-weight-light">
        Editar contato: {{id}}
        </h3>
        <button 
        class="btn btn-secondary mt-4 mb-4"
        @click="$router.back()">
        Voltar</button>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data(){
        return{
            nome: 'Victor Santos Silva'
        }
    },
    beforeRouteEnter(to, from, next){
        console.log('Executando beforeRouteEnter, de dentro do component')
        //console.log(`Nome: ${this.nome}`)
        // if(to.query.autenticado === 'true'){
        //     next((instanciavuedocomponent) => {
        //         console.log(`Nome: ${instanciavuedocomponent.nome}`)
        //     })
        //     return
        // }
        //next('/contatos')
        next()
    },
    beforeRouteLeave(to, from, next){
        console.log('Executando um beforeRouteLeave! Será chamado sempre ao sair da página.')
        const confirma = window.confirm('Você tem certeza que gostaria de sair da página?')
        next(confirma)
    }
}
</script>