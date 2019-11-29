<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <div class="form-group">
            <input 
                type="search" 
                class="form-control" 
                placeholder="Buscar contatos" 
                @keyup.enter="buscar"
                :value="busca" />
        </div>
        <hr>
        <ul class="list-group" v-if="contatosfiltrados.length > 0">
            <contatos-lista-unitario
                class="list-group-item"
                v-for="contato in contatosfiltrados"
                :key="contato.id"
                :contato="contato" />
        </ul>
        <p v-else>Nenhum contato encontrado!</p>
        <button class="btn btn-secondary mb-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
import ContatosListaUnitario from './ContatosListaUnitario.vue'
import EventBus from './../../event-bus'

export default {
    components:{
        ContatosListaUnitario
    },
    props: ['busca'],
    data(){
        return {
            contatos: []
        }
    },
    computed:{
        contatosfiltrados(){
            const busca = this.busca
            return !busca 
                ?this.contatos 
                : this.contatos.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()))
        }
    },
    created(){
        this.contatos = EventBus.contatos
    },
    methods:{
        voltar(){
            //this.$router.push({path: '/'}) outra possibilidade
            this.$router.back()
        },
        buscar(){
            this.$router.push({
                path:'/contatos',
                query: { busca: event.target.value}
            })
        }
    }
}
</script>