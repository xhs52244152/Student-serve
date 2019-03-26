<template>
  <div class="login">
    <div class="com-box">
      <div class="cont">
        <p class="title">登陆</p>
        <el-form :model="loginInfo" :rules="loginRule" ref="login">
          <el-form-item prop="phone">
            <el-input v-model="loginInfo.phone" placeholder="手机号码"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginInfo.password" type="password" placeholder="登陆密码"></el-input>
          </el-form-item>
          <div style="height:40px"></div>
          <el-form-item>
            <el-button type="primary" @click="loginSubmit('login')">登陆</el-button>
          </el-form-item>
        </el-form>
        <span class="enroll">注册</span>
        <span class="find">找回密码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loginInfo: {
        phone:'',
        password: '',
      },
      loginRule: {
        phone:[
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods:{
    loginSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.login{width: 100%;height: 540px;background-image: url(../assets/login_bg.png);background-size: cover;background-position: center center;}
.login .cont{float: right;width: 360px;height: 420px;background-color: #fff;border-radius: 3px;margin-top: 55px;padding:15px 25px;}
.login .title{font-size: 38px;color: #333;text-align: center;line-height: 110px;}
.login span{font-size: 14px;color: #4976eb;margin-top: -10px;display: block;}
.login .enroll{float: right;}
</style>