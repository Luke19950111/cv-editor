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
            <el-row>
              <h2 class="skills">技能描述</h2>
            </el-row>
            <el-row>
              <el-row :gutter='20'>
                <el-col :lg='12' class="skill-item">
                    <el-card class="box-card" shadow="hover">
                      <div slot="header" class="clearfix">
                        <span style="float: left;">卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                      </div>
                      <div>
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                      </div>
                    </el-card>
                      
                </el-col>
                <el-col :lg='12' class="skill-item">
                    <el-card class="box-card" shadow="hover">
                      <div slot="header" class="clearfix">
                        <span style="float: left;">卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                      </div>
                      <div>
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                      </div>
                    </el-card>
                </el-col>
              </el-row>
            </el-row>
            <el-row>
              <el-row :gutter='20'>
                <el-col :lg='12' class="skill-item">
                    <el-card class="box-card" shadow="hover">
                      <div slot="header" class="clearfix">
                        <span style="float: left;">卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                      </div>
                      <div>
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                      </div>
                    </el-card>
                </el-col>
                <el-col :lg='12' class="skill-item">
                    <el-card class="box-card" shadow="hover">
                      <div slot="header" class="clearfix">
                        <span style="float: left;">卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                      </div>
                      <div>
                        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                      </div>
                    </el-card>
                </el-col>
              </el-row>
            </el-row>
          </section>
          <section>
            <h2 class="projects">项目经历</h2>
            <el-card class="project-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span style="float: left;">卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div>
                <div class="project-card-body">
                  <span>keyWords, keyWords, keyWords</span>
                  <span>http://xxx/xxx</span>
                </div>
                <p class="project-description">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                
              </div>
            </el-card>
            <el-card class="project-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span style="float: left;">卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div>
                <div class="project-card-body">
                  <span>keyWords, keyWords, keyWords</span>
                  <span>http://xxx/xxx</span>
                </div>
                <p class="project-description">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                
              </div>
            </el-card>
            <el-card class="project-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span style="float: left;">卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div>
                <div class="project-card-body">
                  <span>keyWords, keyWords, keyWords</span>
                  <span>http://xxx/xxx</span>
                </div>
                <p class="project-description">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                
              </div>
            </el-card>
            <el-card class="project-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span style="float: left;">卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div>
                <div class="project-card-body">
                  <span>keyWords, keyWords, keyWords</span>
                  <span>http://xxx/xxx</span>
                </div>
                <p class="project-description">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                
              </div>
            </el-card>
            
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
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
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
    transition: .3s;
  }
  .right-content{
    border: 1px solid green;
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
  }
  .right-content .resume{
    width: 60%;
  }
  .right-content .skills, .projects{
    margin: 1em;
  }
  .skill-item{

  }
  .box-card{
    margin: .5em 0;
  }

  .project-card{
    margin: .5em 0;
  }
  .project-card-body{
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }
  .project-description{
    text-align: left;
    text-indent: 2em;
  }

</style>
