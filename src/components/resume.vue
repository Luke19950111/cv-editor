<template>
  <div class="hello">
    <router-link to="/one">One</router-link>
    <router-link to="/two">Two</router-link>
    <button @click="initLeancloud">leancloud</button>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      initLeancloud() {
        var AV = require('leancloud-storage');

        var APP_ID = 'a2KJgfG27jM91H5weSdUSqox-gzGzoHsz';
        var APP_KEY = 'fU28rPRP3cTSCQEULPfOHdkH';

        AV.init({
          appId: APP_ID,
          appKey: APP_KEY
        });

        var TestObject = AV.Object.extend('TestObject');
        var testObject = new TestObject();
        testObject.save({
          words: 'Hello World!'
        }).then(function (object) {
          alert('LeanCloud Rocks!');
        })
      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
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
