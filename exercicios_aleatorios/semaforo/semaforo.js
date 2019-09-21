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

//definindo o esquema do semáforo
let bola = {
    template:`
        <div class="bola">
        </div>
    `
};
let sinalizador = {
    components:{
        bola: bola
    },
    template:`
        <div class="sinalizador">
            <bola></bola>
            <bola></bola>
            <bola></bola>
        </div>
        `
}

let mydiv1 = new Vue({
    el: '#mydiv1',
});



