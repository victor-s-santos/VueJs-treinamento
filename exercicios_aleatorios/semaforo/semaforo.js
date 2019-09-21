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
            <template v-if="posicao == 'vermelho'">
            <bola cor='vermelho'/>
            <bola cor='branco'/>
            <bola cor='branco'/>
            </template>
            <template v-else-if="posicao == 'amarelo'">
            <bola cor='branco'/>
            <bola cor='amarelo'/>
            <bola cor='branco'/>
            </template>
            <template v-else-if="posicao == 'verde'">
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
        posicao:'verde'
    },
    methods:{
        sinalAberto: function(){
            this.posicao = 'verde';
            //vai ficar verde: verde = aberto

        },
        sinalFechado: function(){
            this.posicao = 'vermelho';
            //vai ficar vermelho: vermelho = fechado
        }
    },
    watch:{
        posicao: function(posicao){
            if(this.posicao == 'verde'){
                this.posicao = 'amarelo',
                setTimeout(this.sinalFechado, 1000)
            }
            // else if(this.posicao == 'amarelo'){
            //     this.sinalAberto
            // } 
        }
    }
});



