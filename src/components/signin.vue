<template>
  <div class="login-wrapper">
    <div class="form-wrapper">
      <h3 class="login-title">注册</h3>
      <el-row>
        <el-form :model="dataForm">
          <el-form-item>
            <el-input placeholder="请填写用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请填写密码"></el-input>
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
export default {
  name: 'Login',
  data () {
    return {
      dataForm: {
        userName: '',
        password: ''
      }
    }
  },

  methods: {
    onSubmit(){
      console.log('登录')
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
