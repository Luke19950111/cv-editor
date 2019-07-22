<template>
  <div>
    <el-row class='wrapper'>
      <el-col
        :lg='4'
        class="left-aside"
      >
        <div>
          <div class="left-item" @click="onSaveClick">保存</div>
          <div class="left-item">保存</div>
          <div class="left-item">保存</div>
          <div class="left-item">保存</div>
        </div>
        <div>
          <div v-show="avatarVisible">
            <el-avatar :size="70">
              <img src="../assets/image/timg.gif">
            </el-avatar>
            <div>
              {{user}}
            </div>
          </div>
          <div class="left-item" @click="onLoginClick" v-show="loginButtonVisible">登录</div>
          <div class="left-item" @click="onLogoutClick" v-show="avatarVisible">退出</div>
        </div>
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
                <el-col :lg='12' class="skill-item" v-for="(skill,index) in resume.skills" :key="index">
                    <el-card class="box-card" shadow="hover">
                      <div slot="header" class="clearfix">
                        <span style="float: left;">{{skill.name}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="onSkillsEdit(index)">操作按钮</el-button>
                      </div>
                      <div>
                        {{skill.description}}
                      </div>
                    </el-card>
                      
                </el-col>
              </el-row>
            </el-row>
          </section>
          <section>
            <h2 class="projects">项目经历</h2>

            <el-card class="project-card" shadow="hover" v-for="(project, index) in resume.projects" :key="index">
              <div slot="header" class="clearfix">
                <span style="float: left;">{{project.name}}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="onProjectsEdit(index)">操作按钮</el-button>
              </div>
              <div>
                <div class="project-card-body">
                  <span>{{project.keywords}}</span>
                  <span>{{project.url}}</span>
                </div>
                <p class="project-description">{{project.description}}</p>
                
              </div>
            </el-card>
          </section>
        </div>
      </el-col>
    </el-row>
    <name-edit v-show="nameEditVisible" ref="nameEdit" @nameEdited="onNameEdited"></name-edit>
    <skill-edit v-show="skillEditVisible" ref="skillEdit" @skillEdited="onSkillEdited"></skill-edit>
    <project-edit v-show="projectEditVisible" ref="projectEdit" @projectEdited="onProjectEdited"></project-edit>
  </div>
</template>

<script>
  var AV = require('leancloud-storage');
  var APP_ID = 'a2KJgfG27jM91H5weSdUSqox-gzGzoHsz';
  var APP_KEY = 'fU28rPRP3cTSCQEULPfOHdkH';
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });


  import NameEdit from './name-edit'
  import SkillEdit from './skill-edit'
  import ProjectEdit from './project-edit'
  export default {
    name: 'resume',
    components: {
      NameEdit,
      SkillEdit,
      ProjectEdit
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
          address: '小沛',
          skills: [
            {name: '技能名称', description: '技能描述'},
            {name: '技能名称', description: '技能描述'},
            {name: '技能名称', description: '技能描述'},
            {name: '技能名称', description: '技能描述'}
          ],
          projects: [
            {name: '项目名称', description: '项目描述', url: '项目链接', keywords: '关键字'},
            {name: '项目名称', description: '项目描述', url: '项目链接', keywords: '关键字'},
            {name: '项目名称', description: '项目描述', url: '项目链接', keywords: '关键字'}
          ]
        },
        nameEditVisible: false,
        skillEditVisible: false,
        projectEditVisible: false,
        loginButtonVisible: true,
        avatarVisible: false,
        user: '',
        editingResume: '',
        
      }
    },
    created() {
      this.initLeancloud()
      
      /* if(this.$route.query.skills[0].name){
        this.editingResume = this.$route.query
        console.log('zzz')
      } */
      // console.log(this.editingResume, 'eeee')
      
      
      this.checkLogStatus()


    },
    methods: {
      initLeancloud() {
        // var AV = require('leancloud-storage');

        /* var APP_ID = 'a2KJgfG27jM91H5weSdUSqox-gzGzoHsz';
        var APP_KEY = 'fU28rPRP3cTSCQEULPfOHdkH';

        AV.init({
          appId: APP_ID,
          appKey: APP_KEY
        }); */

        /* var TestObject = AV.Object.extend('TestObject');
        var testObject = new TestObject();
        testObject.save({
          words: 'Hello World!'
        }).then(function (object) {
          alert('LeanCloud Rocks!');
        }) */
      },
      onNameEdit(){
        this.nameEditVisible = true
        this.$nextTick(()=>{
          this.$refs.nameEdit.init(this.resume)
        })
      },
      onNameEdited(dataForm){
        console.log(dataForm, 'dataFOrm')
        this.resume = dataForm
        
      },

      onSkillsEdit(index){
        this.skillEditVisible = true
        this.$nextTick(()=>{
          this.$refs.skillEdit.init(this.resume.skills[index], index)
        })
      },
      onSkillEdited(skills, index){
        console.log(skills, index, 'xxxxx')
        // this.resume.skills[index] = skills
        this.resume.skills.splice(index, 1, skills);
        console.log(this.resume.skills[index], 'iii')
        console.log(this.resume, 'resume')
      },

      onProjectsEdit(index){
        this.projectEditVisible = true
        this.$nextTick(()=>{
          this.$refs.projectEdit.init(this.resume.projects[index], index)
        })
      },
      onProjectEdited(project, index){
        // this.resume.projects[index] = project
        this.resume.projects.splice(index, 1, project)
      },

      onSaveClick(){

        let currentUser = AV.User.current();
        console.log(currentUser, 'user')
        //检查是否登录状态
        if (currentUser) {
           this.loginButtonVisible = false
           this.avatarVisible = true
           this.saveResume()
        }
        else {
          //currentUser 为空时，可打开用户注册界面…
          this.$confirm('未登录，是否登录?', '提示', {
          confirmButtonText: '登录',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(() => {
              // window.location.href = window.location.href + 'login'
              this.$router.push({
                path:'/login',
                // query: this.resume
              })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消保存',
              center: true
            });         
          });


        }
      },

      saveResume(){
        let {id} = AV.User.current();
        console.log(id, 'id')
        var user = AV.Object.createWithoutData('User', id);
        user.set('resume', this.resume);
        user.save().then(()=>{
          this.$message({
            type: 'success',
            message: '保存成功',
            center: true
          })
        })
      },

      //检查是否登录状态
      checkLogStatus(){
        let currentUser = AV.User.current();
        console.log(currentUser, 'user111')
        if (currentUser) {
           this.loginButtonVisible = false
           this.avatarVisible = true
           this.user = currentUser.attributes.username
           console.log(this.editingResume, 'pppp')
           //有编辑中未保存的内容，保存
           if(this.editingResume){
             this.resume = this.editingResume
             console.log(this.resume, 'iiiiiii')
            //  this.saveResume()
           }else{
            //登录后展示当前用户resume
            console.log('xxxxxx')
            if(currentUser.attributes.resume){
             this.resume = currentUser.attributes.resume
             console.log(this.resume, 'oooooooo')
            }
           }
           
           
           
        }
      },

      onLogoutClick(){
        AV.User.logOut();
        // 现在的 currentUser 是 null 了
        let currentUser = AV.User.current();
        this.$message({
          type: 'success',
          message: '已退出登录',
          center: true
        }); 
        this.loginButtonVisible = true
        this.avatarVisible = false
      },

      onLoginClick(){
        // window.location.href = window.location.href + 'login'
        this.$router.push({
          path:'/login',
          
        })
      },



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
    background: rgb(243, 243, 243);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .left-aside .left-item{
    background: rgb(255, 255, 255);
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    cursor: pointer;
    word-wrap: wrap;
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
    height: 100%;
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
