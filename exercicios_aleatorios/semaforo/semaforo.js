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
    template:`
        <div class="bola">
        </div>
    `
};
Vue.component('sinalizador', {
    components:{
        bola: bola
    },
    template:`
        <div class="layout">
            <bola />
            <bola />
            <bola />
        </div>
        `
});

let mydiv1 = new Vue({
    el: '#mydiv1',
    
});



