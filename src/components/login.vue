<template>
    <div class="login-wrapper">
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
            <router-link to="/signin">还没有账号，去注册</router-link>
          </el-button>
          <el-button type="text" class="to-sign-in">
            <router-link to="/">返回编辑</router-link>
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
        }
      }
    },

    methods: {
      onSubmit(){
        const that = this
        console.log('登录')
        AV.User.loginWithEmail(this.dataForm.email, this.dataForm.password).then(function (user) {
          // 登录成功
          console.log(user, '登录成功')
          that.$message({
            message: '登录成功！',
            type: 'success',
            center: true
          })
          let nextHref = window.location.href
          window.location.href = nextHref.split('#/', 1)
        }, function (error) {
          // 登录失败（可能是密码错误）
          console.log(error, '失败')
          let x = JSON.parse(JSON.stringify(error))
          console.log(x, 'stringgy')
          console.log(x.rawMessage, 'aaa')
          that.$message.error({
            message: x.rawMessage ,
            center: true
          });
        });
      },



    },

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .login-wrapper{
      border: 1px solid red;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .form-wrapper{
      border: 1px solid black;
      width: 25%;
      padding: 1rem 2rem;
    }
    .to-sign-in{
      padding: 0;
    }
    .login-title{
      margin-bottom: 1rem;
    }
    .login-button{
      width: 100%;
    }
  </style>
  