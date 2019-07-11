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
            <el-row class="name-row">
              <h1 class="name">{{resume.name}}</h1>
              <el-button class="name-edit-button" @click="onNameEdit">edit</el-button>
            </el-row>
            <el-row>
              <p>应聘职位：{{resume.jobTitle}}</p>
            </el-row>
            <p>生日：{{resume.birthday}}|性别：{{resume.gender}}|电话：{{resume.phone}}|邮箱：{{resume.email}}|地址：{{resume.address}}</p>
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
    <name-edit v-show="nameEditVisible" ref="nameEdit" @nameEdited="onNameEdited"></name-edit>
  </div>
</template>

<script>
  import NameEdit from './name-edit'
  export default {
    name: 'resume',
    components: {
      NameEdit,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        value: '',
        resume: {
          name: '张飞',
          jobTitle: '三国第一谋士',
          birthday: '约165年',
          gender: '男',
          phone: '15900000001',
          email: 'zhangfei@shu.com',
          address: '小沛'

        },
        nameEditVisible: false
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
      },
      onNameEdit(){
        this.nameEditVisible = true
        this.$nextTick(()=>{
          this.$refs.nameEdit.init()
        })
      },
      onNameEdited(dataForm){
        console.log(dataForm, 'dataFOrm')
        /* for(i=0; i<this.resume.length; i++){
          this.resume[i] = dataForm[i]
        } */
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
    height: 100vh;
  }

  .left-aside{
    height: 100%;
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
    transform: translateY(-5px);
  }
  .right-content{
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    background: orange;
  }
  .right-content .resume{
    width: 60%;
  }
  .name-row{
    position: relative;
  }
  .name {
    margin: 2rem;
  }
  .name-edit-button{
    position: absolute;
    top: 2rem;
    right: 0;
  }
  .right-content .skills, .projects{
    margin: 1rem;
  }
  .skill-item{

  }
  .box-card{
    margin: 0 0 1rem 0;
  }

  .project-card{
    margin: 1rem 0;
  }
  .project-card-body{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .project-description{
    text-align: left;
    text-indent: 2em;
  }

</style>
