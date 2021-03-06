import Vue from 'vue'

export default new Vue({
    data:{
        autenticado: false,
        contatos: [
            {id: 1, nome: 'Marie Curie', email: 'marie@curie.com'},
            {id: 2, nome: 'Nicola Tesla', email: 'nicola@tesla.com'},
            {id: 3, nome: 'Leonardo Davinci', email: 'leonardo@davinci.com'},
            {id: 4, nome: 'Isaac Newton', email: 'isaac@newton.com'},
        ]
    },
    created(){
        this.$on('autenticar', (autenticado) => {
            this.autenticado = autenticado
        })
    },
    methods:{
        buscarContato(id){
            return Object.assign({}, this.contatos.find(c => c.id === id))
        },
        editarContato(contato){
            const indice = this.contatos.findIndex(c => c.id === contato.id)
            this.contatos.splice(indice, 1, contato)
        }
    }
//find retorna o registro; findIndex returna o indice
})