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

export default {
    components:{
        ContatosListaUnitario
    },
    props: ['busca'],
    data(){
        return {
            contatos: [
                {id: 1, nome: 'Marie Curie', email: 'marie@curie.com'},
                {id: 2, nome: 'Nicola Tesla', email: 'nicola@tesla.com'},
                {id: 3, nome: 'Leonardo Davinci', email: 'leonardo@davinci.com'},
                {id: 4, nome: 'Isaac Newton', email: 'isaac@newton.com'},
            ]
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