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
        console.log(`Nome: ${this.nome}`)
        if(to.query.autenticado === 'true'){
            next()
            return
        }
        next('/contatos')
    }
}
</script>