<template>
  <div class="skills">
    <h1>Skills -> Understanding components</h1>
    <h2>{{ name }}</h2>
    <h3>{{ boleano ? 'The btn is disabled' : 'The btn is enabled' }}</h3>
    <br>
    <button @click="changeMyName" v-bind:disabled="boleano">Change my name</button>
    <button @click="boleano = !boleano">Boleano</button>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return{
      name: 'Victor Santos Silva',
      boleano: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
