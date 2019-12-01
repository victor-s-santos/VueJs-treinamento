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
import EventBus from './../../event-bus'

export default {
    props: ['id'],
    data(){
        return{
            contato: undefined
        }
    },
    beforeRouteEnter(to, from, next){
       next(vm => {
           vm.contato = EventBus.buscarContato(+to.params.id)
       })
   },
    beforeRouteLeave(to, from, next){
        console.log('Executando um beforeRouteLeave! Será chamado sempre ao sair da página.')
        const confirma = window.confirm('Você tem certeza que gostaria de sair da página?')
        next(confirma)
    }
}
</script>