<template>
  <div>
    <el-row class='wrapper'>
      <el-col
        :lg='4'
        class="left-aside"
      >
        <div class="left-item">保存</div>
        <div class="left-item">保存</div>
        <div class="left-item">保存</div>
        <div class="left-item">保存</div>
      </el-col>
      <el-col :lg='20' class="right-content">
        <div class="resume">
          <section>
            <h1>姓名</h1>
            <p>信息|信息|信息|信息</p>
          </section>
          <section>
            <h2>技能描述</h2>
            <ul>
              <li>
                <span>技能1</span>
                <p>技能描述</p>
              </li>
              <li>
                <span>技能1</span>
                <p>技能描述</p>
              </li>
              <li>
                <span>技能1</span>
                <p>技能描述</p>
              </li>
              <li>
                <span>技能1</span>
                <p>技能描述</p>
              </li>
            </ul>
          </section>
          <section>
            <h2>项目经历</h2>
            <ol>
              <li>
                <span>项目名称</span>
                <span>关键词，关键词，关键词</span>
                <span>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</span>
                <span>http://xxx/xxx</span>
                <span>cover</span>
              </li>
              <li>
                <span>项目名称</span>
                <span>关键词，关键词，关键词</span>
                <span>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</span>
                <span>http://xxx/xxx</span>
                <span>cover</span>
              </li>
              <li>
                <span>项目名称</span>
                <span>关键词，关键词，关键词</span>
                <span>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</span>
                <span>http://xxx/xxx</span>
                <span>cover</span>
              </li>
              <li>
                <span>项目名称</span>
                <span>关键词，关键词，关键词</span>
                <span>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</span>
                <span>http://xxx/xxx</span>
                <span>cover</span>
              </li>
            </ol>
          </section>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        value: ''
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
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  *::after, *::before{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

</style>
<style scoped>
  .wrapper {
    border: 1px solid black;
    height: 100vh;
  }

  .left-aside{
    height: 100%;
    border: 1px solid red;
    background: rgb(243, 243, 243)    
  }
  .left-aside .left-item{
    background: rgb(255, 255, 255);
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .left-aside .left-item:hover{
    box-shadow: 0 0 5px rgba(0,0,0,.3);
  }
  .right-content{
    border: 1px solid green;
  }

</style>
