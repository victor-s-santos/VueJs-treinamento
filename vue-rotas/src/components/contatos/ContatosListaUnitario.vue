<!-- 
    :to="`/contatos/${contato.id}`"
-->
<template>
    <li>
        <span>{{ contato.nome }}</span>
        <router-link 
            :to="{ 
                path: `/contatos/${contato.id}`,
                
            }"
            class="btn btn-info btn-sm float-right">Saber mais</router-link>
        <!-- <button 
            class="btn btn-info btn-sm float-right"
            @click="verdetalhes">
            Saber Mais
        </button> -->
    </li>
</template>

<script>
export default {
    props:{
        contato: {
            type: Object,
            required: true
        }
    },
   // methods:{
        //verdetalhes(){
            //this.$router.push(`/contatos/${this.contato.id}`)
            // this.$router.push({path:`/contatos/${this.contato.id}`})
            //this.$router.push({name: 'contato', params: {id: this.contato.id}})
        //}
    //}
}
</script>