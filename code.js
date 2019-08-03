new Vue({
	el:".mydiv",
  data:{
  	texto: "Olá VueJS!",
    texto2: "Olá VueJS 2!",
    texto3: ""
  },
  methods:{
  	mudarnome: function(event){
    	this.texto3 = event.target.value;
    }
  }
});