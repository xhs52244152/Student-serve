<template>
  <div class="activity">
    <div class="com-box">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/activity' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>创业活动</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row style="margin-top:50px">
        <el-col :span="21">
          <p class="title">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <p class="time">2018-08-08</p>
        </el-col>
        <el-col :span="3"><div class="btn" @click="dialogFormVisible = true">活动报名></div></el-col>
      </el-row>
      <img class="banner" src="../assets/activity.jpg" alt="">
      <div class="info">
        <p class="tit">活动介绍</p>
        <p class="cont">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
      </div>
      <div class="info">
        <img src="" alt="">
        <p class="tit">大赛组委会</p>
        <p class="desc">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
      </div>
      <div class="info">
        <img src="" alt="">
        <p class="tit">大赛组委会</p>
        <p class="desc">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
      </div>
      <div class="info">
        <img src="" alt="">
        <p class="tit">大赛组委会</p>
        <p class="desc">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
      </div>
      <div class="info">
        <img src="" alt="">
        <p class="tit">大赛组委会</p>
        <p class="desc">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
      </div>
      <div class="info">
        <img src="" alt="">
        <p class="tit">大赛组委会联系方式</p>
        <div class="contact">
          <img src="" alt="">
          <p>活动举办时间：2018-07-08</p>
        </div>
        <div class="contact">
          <img src="" alt="">
          <p>活动举办时间：2018-07-08</p>
        </div>
        <div class="contact">
          <img src="" alt="">
          <p>活动举办时间：2018-07-08</p>
        </div>
        <div class="contact">
          <img src="" alt="">
          <p>活动举办时间：2018-07-08</p>
        </div>
        <p class="call">了解详情致电：13245678910（刘小姐）</p>
        <div class="signup" @click="dialogFormVisible = true">立即报名</div>
      </div>
    </div>
    <el-dialog title="感谢您参与本次活动，请填写个人真实信息" :visible.sync="dialogFormVisible" width="450px" :center="true">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '60px'
    }
  }
}
</script>

<style scoped>
.activity{background-color: #fff;padding: 20px 0;}
.activity .title{font-size: 28px;color: #333;line-height: 50px;}
.activity .time{font-size: 15px;color: #666;line-height: 1;}
.activity .btn{width: 100%;line-height: 36px;border-radius: 3px;text-align: right;padding: 0 10px;font-size: 17px;color: #fff;background-color: #2b8ed1;}
.activity .banner{width: 100%;height: 465px;display: block;margin: 40px 0;}
.activity .info{margin-bottom: 50px;}
.activity .info .tit{font-size: 24px;color: #333;line-height: 40px;margin-bottom: 10px;}
.activity .info .cont{font-size: 16px;color: #747474;line-height: 30px;}
.activity .info img{width: 30px;height: 40px;display: block;float: left;margin-right: 5px;}
.activity .info .desc{font-size: 16px;color: #747474;line-height: 30px;margin-left: 35px;}
.activity .info .contact{margin-left: 35px;line-height: 30px;margin-bottom: 5px;font-size: 17px;color: #a1a1aa;}
.activity .info .contact img{width: 30px;height: 30px;}
.activity .info .call{font-size: 15px;color: #474747;margin-left: 35px;}
.activity .info .signup{width: 200px;line-height: 50px;background-color: #2b8ed1;border-radius: 3px;text-align: center;font-size: 18px;color: #fff;margin: 20px 35px;}
</style>