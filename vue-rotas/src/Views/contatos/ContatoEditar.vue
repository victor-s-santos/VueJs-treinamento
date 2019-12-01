<template>
    <div v-if="contato">
        <h3 
        class="font-weight-light">
        Nome do Contato: {{contato.nome}}
        </h3>
        <form @submit.prevent="salvar">
            <div ckass="form-group">
                <label>Nome:</label>
                <input type="text"
                    class="form-control"
                    placeholder="Insira um nome"
                    v-model="contato.nome">
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email"
                    class="form-control"
                    placeholder="Insira um email"
                    v-model="contato.email">
            </div>
            <button type="button"
                class="btn btn-secondary mt-4 nb-4 mr-2"
                @click="$router.back()">Voltar</button>

        <button type="submit" 
            class="btn btn-success mt-4 nb-4 mr-2">Salvar</button>
        </form>
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
    },
    methods:{
        salvar(){
            EventBus.editarContato(this.contao)
            this.$router.push('/contatos')
        }

    }
}
</script>