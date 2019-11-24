<template>
    <div>
        <contatos-lista />
        <router-view></router-view>
    </div>
</template>
<script>
import ContatosLista from './../../components/contatos/ContatosLista.vue'
export default {
    components:{
        ContatosLista
    }
}
</script>