Vue.component('menu-superior', {
    data: function(){
        return {
            titulo: 'Botão Inicial'
        };
    },
    template: '<button>{{titulo}}</button>'
});

let app1 = new Vue({
    el: '#app1',
    data: {
        nome: 'Victor Santos Silva'
    }
});