<template>
    <div class="login-wrapper" :style="background">
      <el-color-picker v-model="color" @change="onColorChange" class="login-color-picker" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
      <div class="form-wrapper">
        <h3 class="login-title">登录</h3>
        <el-row>
          <el-form :model="dataForm">
            <el-form-item>
              <el-input placeholder="请填写邮箱" v-model="dataForm.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请填写密码" v-model="dataForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" class="login-button">登录</el-button>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row>
          <el-button type="text" class="to-sign-in">
            <router-link :to="{path:'/signin', query:{whichPage: whichPage, editingResume: editingResume}}">还没有账号，去注册</router-link>
          </el-button>
          <el-button type="text" class="to-sign-in">
            <router-link :to="{path:'/', query:{whichPage: 3, editingResume: editingResume}}">返回编辑</router-link>
          </el-button>
        </el-row>
      </div>
    </div>
  </template>
  
  <script>
  var AV = require('leancloud-storage');

  export default {
    name: 'Login',
    data () {
      return {
        dataForm: {
          email: '',
          password: ''
        },
        editingResume: '',
        whichPage: 1,
        color: null,
        background: {
          'background-image': "url('../assets/image/1.jpg');",
          'background-size': 'cover'
        },
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    },
    created() {
      let query = this.$route.query
      this.whichPage = query.whichPage
      this.editingResume = query.editingResume
    },

    methods: {
      onSubmit(){
        const that = this
        AV.User.loginWithEmail(this.dataForm.email, this.dataForm.password).then(function (user) {
          // 登录成功
          that.$message({
            message: '登录成功！',
            type: 'success',
            center: true
          })
          that.$router.push({
            path:'/',
            query: {editingResume: that.editingResume, whichPage: that.whichPage}

          })
        }, function (error) {
          // 登录失败（可能是密码错误）
          let x = JSON.parse(JSON.stringify(error))
          that.$message.error({
            message: x.rawMessage ,
            center: true
          });
        });
      },

      onColorChange(color){
        this.color = color
        this.background = {'background': color}
      }



    },

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .login-wrapper{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("../assets/image/1.jpg");
      background-size: cover;
    }
    .form-wrapper{
      width: 20%;
      min-width: 284px;
      padding: 1rem 2rem;
      background: rgba(0, 0, 0, .8);
      border-radius: 5px;
    }
    .to-sign-in{
      padding: 0;
    }
    .login-title{
      margin-bottom: 1rem;
      color: white;
    }
    .login-button{
      width: 100%;
    }
    .login-color-picker{
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  </style>
  