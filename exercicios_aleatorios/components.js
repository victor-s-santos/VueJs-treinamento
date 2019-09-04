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

let app1 = new Vue({
    el: '#app1',
    data: {
        nome: 'Victor Santos Silva'
    }
});