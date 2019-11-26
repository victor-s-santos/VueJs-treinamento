<template>
    <div>
        <h3 class="font-weight-light">Contatos mano</h3>
        <div class="form-group">
            <input 
                type="search" 
                class="form-control" 
                placeholder="Buscar contatos" 
                @keyup.enter="buscar" />
        </div>
        <hr>
        <ul class="list-group" v-if="contatos.length > 0">
            <contatos-lista-unitario
                class="list-group-item"
                v-for="contato in contatos"
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
    methods:{
        voltar(){
            //this.$router.push({path: '/'}) outra possibilidade
            this.$router.back()
        },
        buscar(){
            this.$router.push({
                
            })
        }
    }
}
</script>