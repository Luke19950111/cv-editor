<template>
  <div class="all">
    <el-row v-show="outPreviewVisible" class="top-notice">
      <p>正在预览<span class="user-span">{{preUser}}</span>的简历，可点击<el-button type="text" @click="outPreview">退出预览</el-button>来编辑自己的简历！</p>
    </el-row>
    <el-row class='wrapper'>
      <el-col
        :md='4'
        :lg='4'
        class="left-aside"
        v-show="mode"
        :style="leftBgStyle"
      >
        <div>
          <div class="left-item" @click="onSaveClick" :style="leftItemStyle"><i class="el-icon-potato-strips"></i>保存</div>
          <div class="left-item" @click="onShareClick" :style="leftItemStyle"><i class="el-icon-cold-drink
            "></i>分享</div>
          <div class="left-item" @click="onPrintClick" :style="leftItemStyle"><i class="el-icon-tableware"></i>打印</div>
          <div class="left-item" @click="onThemeEdit" :style="leftItemStyle"><i class="el-icon-lollipop"></i>主题</div>
        </div>
        <div>
          <div v-show="avatarVisible">
            <el-avatar :size="70">
              <img src="../assets/image/timg.gif">
            </el-avatar>
            <div :style="leftUserStyle">
              {{user}}
            </div>
          </div>
          <div class="left-item" @click="onLoginClick" v-show="loginButtonVisible" :style="leftItemStyle"><i class="el-icon-sugar"></i>登录</div>
          <div class="left-item" @click="onLogoutClick" v-show="avatarVisible" :style="leftItemStyle"><i class="el-icon-cherry
            "></i>退出</div>
        </div>
      </el-col>
      <el-col :md='rightWidth' :lg='rightWidth' class="right-content" :style="rightBgStyle">
        <div class="resume">
          <section>
            
            <el-row class="name-row-wrapper">
              <el-col :md="16" :lg="16" class="name-left-info">
                <el-row class="name-row">
                  <h1 class="name" :style="rightTextStyle">{{resume.name}}</h1>
                  <el-button class="name-edit-button" @click="onNameEdit" v-show="mode" icon="el-icon-pear" type="success" plain round>基本信息</el-button>
                </el-row>

                <el-row :style="rightTextStyle">
                  <el-col :md="24" :lg="12">
                    <p><i class="el-icon-star-on"></i>应聘职位：{{resume.jobTitle}}</p>
                    <p><i class="el-icon-s-shop"></i>生日：{{resume.birthday}}</p>
                    <p><i class="el-icon-phone"></i>电话：{{resume.phone}}</p>
                  </el-col>
                  <el-col :md="24" :lg="12">
                    <p><i class="el-icon-location"></i>工作地址：{{resume.address}}</p>
                    <p><i class="el-icon-s-help"></i>性别：{{resume.gender}}</p>
                    <p><i class="el-icon-s-promotion"></i>邮箱：{{resume.email}}</p>
                  </el-col>
                </el-row>


                <!-- <el-row class="info-detail">
                  <p style="margin-right: 2em;">应聘职位：{{resume.jobTitle}}</p><p>工作地址：{{resume.address}}</p>
                </el-row>
                <el-row class="info-detail">
                  <p style="margin-right: 2em;">生日：{{resume.birthday}}</p><p>性别：{{resume.gender}}</p>
                </el-row>
                <el-row class="info-detail">
                  <p style="margin-right: 2em;">电话：{{resume.phone}}</p><p>邮箱：{{resume.email}}</p>
                </el-row> -->
                
              </el-col>

              <el-col :md="8" :lg="8" class="right-photo-col">
                <img src="../assets/image/zhangfei.jpg" class="photo">
              </el-col>
            </el-row>


          </section>
          <section>
            <el-row class="skill-name-row">
              <h2 class="skills" :style="rightTextStyle">My Skills</h2>
              <el-button @click="addSkills" class="skill-add-button" v-show="mode" icon="el-icon-apple" type="success" plain round>添加更多</el-button>
            </el-row>
            <el-row>
              <el-row :gutter='20'>
                <el-col :md='12' :lg='12' class="skill-item" v-for="(skill,index) in resume.skills" :key="index">
                    <el-card class="box-card" shadow="hover" :style="rightItemStyle">
                      <div slot="header" class="clearfix">
                        <span style="float: left;"><i class="
                          el-icon-grape"></i>{{skill.name}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="onSkillsEdit(index)" v-show="mode" class="edit-skill-project">编辑</el-button>
                        <el-button style="float: right; padding: 3px 0; margin-right: 3px;" v-if="index>=4 && mode" type="text" @click="removeSkills(index)" class="item-remove">删除</el-button>
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
            <el-row class="project-name-row">
              <h2 class="projects" :style="rightTextStyle">My Projects</h2>
              <el-button @click="addProjects" class="project-add-button" v-show="mode" icon="el-icon-watermelon" type="success" plain round>添加更多</el-button>
            </el-row>

            <el-card class="project-card" shadow="hover" v-for="(project, index) in resume.projects" :key="index" :style="rightItemStyle">
              <div slot="header" class="clearfix">
                <span style="float: left;"><i class="
                  el-icon-milk-tea"></i>{{project.name}}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="onProjectsEdit(index)" v-show="mode" class="edit-skill-project">编辑</el-button>
                <el-button style="float: right; padding: 3px 0; margin-right: 3px;" v-if="index>=3 && mode" type="text" @click="removeProjects(index)" class="item-remove">删除</el-button>
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
    <theme-edit v-show="themeEditVisible" ref="themeEdit" @themeEdited="onThemeEdited"></theme-edit>
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
  import ThemeEdit from './theme-edit'
  export default {
    name: 'resume',
    components: {
      NameEdit,
      SkillEdit,
      ProjectEdit,
      ThemeEdit
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        value: '',
        resume: {
          name: '张飞',
          jobTitle: '三国第一谋士',
          birthday: '0165-01-11',
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
          ],
          colors: {
            leftItemColor: 'rgb(255,255,255)',
            leftBgColor: 'rgb(243,243,243)',
            leftUserColor: 'rgb(0,0,0)',
            rightTextColor: 'rgb(0,0,0)',
            rightBgColor: 'rgb(255,165,0)',
            rightItemColor: 'rgb(255,255,255)'
          }
        },
        nameEditVisible: false,
        skillEditVisible: false,
        projectEditVisible: false,
        loginButtonVisible: true,
        avatarVisible: false,
        user: '',
        editingResume: '',
        fromPage: 1,
        mode: true,
        rightWidth: 20,
        outPreviewVisible: false,
        preUser: '',
        themeEditVisible: false,
        leftBgStyle: {},
        leftItemStyle: {},
        leftUserStyle: {},
        rightTextStyle: {},
        rightBgStyle: {},
        rightItemStyle: {}
        
      }
    },
    created() {

      //判断是否预览模式
      let isPreview = window.location.search.split('=')[0]
      let previewId = window.location.search.split('=')[1]
      console.log(isPreview, 'issiisisi')
      console.log(previewId, 'preId')
      if(isPreview){
        this.mode = false
        this.rightWidth = 24
        this.outPreviewVisible = true
        this.getPreviewResume(previewId)
      }else{
        this.mode = true
        console.log(this.$route.query, 'resumequery')
        let query = this.$route.query
        console.log(query, 'qqq')
        
        //???????未登录从保存跳转登录，成功后返回resume后再刷新，为何query有内容??????
        if(query.editingResume){
          if(query.editingResume.name){
            this.fromPage = query.whichPage
            this.editingResume = query.editingResume
            console.log('111')
          }
        }
        console.log(this.fromPage, 'formPage')
        //formPage == 1，未编辑；
        //fromPage==2，未登录编辑后点击保存跳转注册/登录后再返回resume；
        //fromPage==3，返回编辑按钮回到resume
        if(this.fromPage == 1){
          this.checkLogStatus()
          console.log('1')
        }else if(this.fromPage == 2){
          this.fromPage = 1
          this.fromOtherPage()
          console.log('2')
        }else if(this.fromPage == 3){
          this.fromPage = 1
          this.resume = this.editingResume
          console.log('333')
        }
      }




    },
    methods: {
      
      onNameEdit(){
        this.nameEditVisible = true
        this.$nextTick(()=>{
          this.$refs.nameEdit.init(this.resume)
        })
      },
      onNameEdited(dataForm){
        this.resume = dataForm
        
      },

      onSkillsEdit(index){
        this.skillEditVisible = true
        this.$nextTick(()=>{
          this.$refs.skillEdit.init(this.resume.skills[index], index)
        })
      },
      onSkillEdited(skills, index){
        // this.resume.skills[index] = skills
        this.resume.skills.splice(index, 1, skills);
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
      onThemeEdit(){
        this.themeEditVisible = true
        this.$nextTick(()=>{
          this.$refs.themeEdit.init()
        })
      },
      onThemeEdited(colors){
        console.log(colors, '8888')
        this.resume.colors.leftBgColor = colors.leftBgColor
        this.leftBgStyle = {'background':colors.leftBgColor}

        this.resume.colors.leftItemColor = colors.leftItemColor
        this.leftItemStyle = {'background':colors.leftItemColor}

        this.resume.colors.leftUserColor = colors.leftUserColor
        this.leftUserStyle = {'color':colors.leftUserColor}

        this.resume.colors.rightTextColor = colors.rightTextColor
        this.rightTextStyle = {'color':colors.rightTextColor}

        this.resume.colors.rightItemColor = colors.rightItemColor
        this.rightItemStyle = {'background':colors.rightItemColor}

        this.resume.colors.rightBgColor = colors.rightBgColor
        this.rightBgStyle = {'background':colors.rightBgColor}
      },

      onSaveClick(){

        let currentUser = AV.User.current();
        console.log(currentUser, 'user')
        //检查是否登录状态
        if (currentUser) {
          //  this.loginButtonVisible = false
          //  this.avatarVisible = true
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
                query: {editingResume: this.resume, whichPage: 2}
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
           
            //登录后展示当前用户resume
            console.log('xxxxxx')


           


            if(currentUser.attributes.resume){
             this.resume = currentUser.attributes.resume
             console.log(this.resume, 'oooooooo')
            }
            let that = this
            let id = currentUser.id
            let query = new AV.Query('User');
            query.get(id).then(function (user) {
              console.log(user, 'user888')
              if(user.attributes.resume){
                let newResume = user.attributes.resume
                console.log(newResume, '7777')
                that.resume = newResume
                console.log(this.resume, '9999')
              }
              
            })
           
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
          query: {editingResume: this.resume, whichPage: 1}
          
        })
      },

      //从保存按钮到注册登录页在返回resume页时触发
      fromOtherPage(){
        let currentUser = AV.User.current()
        this.user = currentUser.attributes.username
        this.loginButtonVisible = false
        this.avatarVisible = true

        this.resume = this.editingResume
        console.log(this.resume, 'iiiiiii')
        console.log(this.resume.name, 'nameeee')
        
        this.saveResume2()
        console.log(this.fromPage, 'fromPageN')
      },

      saveResume2(){
        let {id} = AV.User.current();
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

      addSkills(){
        this.resume.skills.push({name: '技能名称', description: '技能描述'})
      },
      removeSkills(index){
        this.resume.skills.splice(index, 1)
      },

      addProjects(){
        this.resume.projects.push({name: '项目名称', description: '项目描述', url: '项目链接', keywords: '关键字'})
      },
      removeProjects(index){
        this.resume.projects.splice(index, 1)
      },

      onShareClick(){
        let currentUser = AV.User.current();
        if(currentUser){
          let id = currentUser.id
          let shareLink = location.origin + location.pathname + '?user_id=' + id

          this.$alert(shareLink, '请复制链接分享', {
            confirmButtonText: '确定',
          }).then(()=>{
            console.log('复制成功')
            /* this.$message({
              type: 'success',
              message: '复制成功',
              center: true
            }) */
          })
        }else{
          this.$message({
            type: 'info',
            message: '请登录后再分享',
            center: true
          })
        }
      },

      outPreview(){
        this.mode = true
        this.rightWidth = 20
        this.outPreviewVisible = false
        window.location.search = ''
      },
      getPreviewResume(id){
        const that = this
        let query = new AV.Query('User');
        query.get(id).then(function (user) {
          console.log(user, 'preUser')
          that.preUser = user.attributes.username
          if(user.attributes.resume){
            console.log('xxx')
            let preResume = user.attributes.resume
            console.log(preResume, 'pre777')
            that.resume = preResume
            console.log(that.resume, 'pre999')
          }
          
        })
      },

      onPrintClick(){
        window.print()
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
    color: #dddddd;
    background: orange;
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
  .name-row-wrapper{
    margin-bottom: 1rem;
  }
  .name-row{
    position: relative;
  }
  .name {
    margin: 2rem 0;
  }
  .name-edit-button{
    position: absolute;
    top: 2rem;
    right: 0;
  }
  .photo{
    width: 60%;
    margin-top: 2rem;
    max-height: 150px;
  }

  .skill-name-row, .project-name-row{
    position: relative;
  }
  .skills{
    margin-top: 1rem;
  }
  .skill-add-button, .project-add-button{
    position: absolute;
    top: 1rem;
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

  .top-notice{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: white;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .5)
  }
  .top-notice > p{
    padding: 10px;
  }
  .user-span{
    color: rgb(0, 255, 0);
  }

  @media print{
    .left-aside, .name-edit-button, .skill-add-button, .project-add-button, .edit-skill-project, .photo, .item-remove{
      display: none;
    }
    .right-content{
      overflow: visible;
    }
    
  }

  i{
    margin-right: .5em;
  }

  .name-left-info{
    text-align: left;
  }
  .right-photo-col{
    text-align: right;
  }
  .info-detail{
    display: flex;
    justify-content: flex-start;
  }
</style>
