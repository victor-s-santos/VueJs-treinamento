//definindo cabeçalho

let titulo = {
    template: '<h1>Semáforo</h1>'
};

let cabecalho = new Vue({
    el:'#cabecalho',
    components:{
        titulo: titulo
    }, 
});

//definindo o esquema das bolas do semáforo
let bola = {
    props:['cor'],
    template:`
        <div class="bola" v-bind:class="cor">
        </div>
    `
};
Vue.component('sinalizador', {
    props:['posicao'],
    components:{
        bola: bola
    },
    template:`
        <div class="layout">
            <template v-if="posicao == 'fechado'">
            <bola cor='vermelho'/>
            <bola cor='branco'/>
            <bola cor='branco'/>
            </template>
            <template v-else-if="posicao == 'dormente'">
            <bola cor='branco'/>
            <bola cor='amarelo'/>
            <bola cor='branco'/>
            </template>
            <template v-else-if="posicao == 'aberto'">
            <bola cor='branco'/>
            <bola cor='branco'/>
            <bola cor='verde'/>
            </template>
        </div>
        `
});

let mydiv1 = new Vue({
    el: '#mydiv1',
    data:{
        posicao:'fechado'
    },
    methods:{
        sinalAberto: function(){
            this.posicao = 'aberto';
            //vai ficar verde

        },
        sinalFechado: function(){
            this.posicao = 'fechado';
            //vai ficar vermelho
        }
    },
    watch:{
        posicao: function(posicao){
            if(this.posicao == 'fechado'){
                this.posicao = 'dormente'
                setTimeout(() => this.posicao = 'aberto', 1000)
            }
        }
    }
});



