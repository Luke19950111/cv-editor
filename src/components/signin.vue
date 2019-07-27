<template>
  <div class="login-wrapper" :style="background">
    <img src="../assets/image/login-bg.jpg" style="width:100%;height:100%;" v-show="showBgImg">
    <el-color-picker v-model="color" @active-change="onColorChange" class="login-color-picker" size="mini" show-alpha :predefine="predefineColors"></el-color-picker>
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
          <router-link :to="{path:'/login', query:{whichPage: whichPage, editingResume: editingResume}}">已经有账号，去登录</router-link>
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
        password: '',
        email: '',
      },
      whichPage: 1,
      editingResume: '',
      color: null,
      background: {
        
      },
      showBgImg: true,
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
    console.log(this.$route.query, 'querysignin')    
    let query = this.$route.query
    this.whichPage = query.whichPage
    this.editingResume = query.editingResume
  },

  methods: {
    onSubmit(){
      const that = this

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
          that.$message({
            type: 'success',
            message: '注册成功！已登录。',
            center: true
          });
          that.$router.push({
            path:'/',
            query: {editingResume: that.editingResume, whichPage: that.whichPage}
            
          })
      }, function (error) {
        let x = JSON.parse(JSON.stringify(error))
        that.$message.error({
          message: x.rawMessage,
          center: true
        });
      });
    },

    onColorChange(color){
      this.showBgImg = false
      console.log(color, 'color')
      this.color = color
      this.background = {'background': color}
      console.log(this.background, 'bababa')
    }



  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-wrapper{
    /* height: 100vh; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* background-image: url(../assets/image/login-bg.jpg); */
    /* background-size: cover; */
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  .form-wrapper{
    width: 20%;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, .8);
    border-radius: 5px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

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

  .login-color-picker{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
</style>
