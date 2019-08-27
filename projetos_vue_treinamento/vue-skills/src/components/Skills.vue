<template>
  <div class="skills">
    <h1>Skills -> Understanding components</h1>
    <h2>{{ name }}</h2>
    <h3>{{ boleano ? 'The boleano is disabled' : 'The boleano is enabled' }}</h3>
    <br>
    <ul>
      <li v-for="(data, index) in skills" :key='index'>{{index}}.{{data.Skill}}</li>
    </ul>
    <p v-if="skills.length >= 1">Congratulations, because you have one or more skills!</p>
    <p v-else>You have no skills.</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return{
      name: 'Victor Santos Silva',
      boleano: true,
      skills: [
        {"Skill": "Vue.js"},
        {"Skill": "Node.js"}
      ]
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
