//components globais
Vue.component('btn-contador', {
    data:function(){
        return{
            contagem:0,
        };
    },
    methods:{
        incrementa: function(){
            this.contagem++;
        }
    },
    template: '<div><span>{{contagem}}x</span><button @click="incrementa">+1</button></div>'
});

Vue.component('contador-global', {
    data:function(){
        return{
            x: 0,
        }
    },
    methods:{
        incrementa: function(){
            this.x++;
        }
    },
    template:'<div><button @click="incrementa"><h2>Clicado {{x}} vezes!</h2><button></div>'
})

//components locais

let menusuperior = {//este component só pode ser chamado na div header
    template:'<span>Cabeçalho</span>'
};

let header = new Vue({
    el:'#header',
    data:{
        title:'Blablabla'
    },
    components:{
        menusuperior: menusuperior
    }
});

//passando props
let mensagem = {
    props:['titulo', 'texto'],
    data:function(){
        return{
            i:'dados internos do sistema',
        }
    },
    template:`<div><h2>{{titulo}}</h2><p>{{texto}}</p>{{i}}</div>`
}

let conteudo = new Vue({
    el:'#app2',
    data:{
    },
    components:{
        mensagem
    }
});

let app1 = new Vue({//chama a instância
    el: '#app1',
    data: {
        nome: 'Victor Santos Silva'
    }
});