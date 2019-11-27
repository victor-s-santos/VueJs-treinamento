<template>
    <div>
        <contatos-lista :busca="busca" />
        <router-view></router-view>
        <router-view name="contato-detalhes"></router-view>
    </div>
</template>
<script>
import ContatosLista from './../../components/contatos/ContatosLista.vue'
export default {
    components:{
        ContatosLista
    }, 
    props: ['busca']
}
</script>