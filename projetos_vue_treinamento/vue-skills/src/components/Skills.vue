<template>
  <div class="skills">
    <h1>Skills -> Understanding components</h1>
    <h2>{{ name }}</h2>
    <h3>{{ boleano ? 'The boleano is True' : 'The boleano is False' }}</h3>
    <br>
    <ul>
      <li v-for="(data, index) in skills" :key='index'>{{index}}.{{data.Skill}}</li>
    </ul>
    <div v-bind:style="{backgroundColor: bgcolor, width: bgwidth, height: bgheight }"></div>
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
      ],
      bgcolor: 'black',
      bgwidth: '100%',
      bgheight: '50px',
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alert{
    background-color: rgb(4, 22, 37);
    width: 100%;
    height: 50px;
  }
  .anotherclass{
    border: 5px solid red;
  }

</style>
