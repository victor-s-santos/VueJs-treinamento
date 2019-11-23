<template>
    <div>
        <h3 class="font-weight-light">Contatos mano</h3>
        <button class="btn btn-secondary mb-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>
<script>
export default {
    methods:{
        voltar(){
            //this.$router.push({path: '/'}) outra possibilidade
            this.$router.back()
        }
    }
}
</script>