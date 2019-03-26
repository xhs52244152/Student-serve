<template>
  <div class="reset">
    <div class="box">
      <el-steps :active="1" process-status="finish" finish-status="success" align-center>
        <el-step title="选择方式"></el-step>
        <el-step title="验证用户"></el-step>
        <el-step title="重置密码"></el-step>
      </el-steps>
      <div class="step1" v-if="false">
        <p class="title">您正在为账户<span>13245678910</span>重置登录密码，请选择找回方式：</p>
        <div class="mode">
          <img src="../assets/phone.png" alt="">
          <span class="sp1">手机号</span>
          <span class="sp2">如果您的13245678910手机还在正常使用，请选择此方式</span>
          <span class="sp3">立即找回</span>
        </div>
        <div class="mode">
          <img src="../assets/email.png" alt="">
          <span class="sp1">邮箱</span>
          <span class="sp2">如果您是通过邮箱来重置密码，请选择此方式</span>
          <span class="sp3">立即找回</span>
        </div>
      </div>
      <div class="step2">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.reset{width: 1000px;margin: 0 auto;padding-top: 35px;}
.reset .box{height: 460px;border-radius: 3px;background-color: #fff;padding: 50px 125px;}
.reset .step1 .title{font-size: 16px;color: #333;line-height: 40px;}
.reset .step1 .title span{font-weight: 600;}
.reset .step1 .mode{height: 91px;padding: 29px 0;line-height: 32px;font-size: 14px;color: #484848;border-bottom: 1px solid #ededed;}
.reset .step1 .mode img{width: 27px;height: 28px;display: block;float: left;margin: 2px 10px 0 0;}
.reset .step1 .mode .sp1{display: inline-block;width: 90px;font-size: 18px;color: #333;}
.reset .step1 .mode .sp3{display: block;float: right;width: 80px;border-radius: 3px;background-color: #2292dd;color: #fff;text-align: center;}

</style>