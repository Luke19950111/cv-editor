<template>
  <div class="login-wrapper">
    <div class="form-wrapper">
      <h3 class="login-title">注册</h3>
      <el-row>
        <el-form :model="dataForm">
          <el-form-item>
            <el-input placeholder="请填写邮箱" v-model="dataForm.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请填写密码" v-model="dataForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="login-button">注册</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <el-button type="text" class="to-sign-in">
          <router-link to="/login">已经有账号，去登录</router-link>
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
        password: '',
        email: '',
      }
    }
  },

  methods: {
    onSubmit(){
      // 新建 AVUser 对象实例
      var user = new AV.User();
      // 设置用户名
      user.setUsername(this.dataForm.email);
      // 设置密码
      user.setPassword(this.dataForm.password);
      // 设置邮箱
      user.setEmail(this.dataForm.email);
      user.signUp().then(function (loggedInUser) {
          console.log(loggedInUser);
          this.$message({
            type: 'success',
            message: '注册成功！已登录。',
            center: true
          });
          window.location.href = window.location.href + 'login'
      }, function (error) {
        console.log(error, 'error')
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
