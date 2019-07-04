<template>
    <div>
      <h1>{{ msg }}</h1>
      <router-link to="/">返回</router-link>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'One',
    data () {
      return {
        msg: '222222222222'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  