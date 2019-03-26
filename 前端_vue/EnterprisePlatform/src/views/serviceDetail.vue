<template>
  <div class="service">
    <div class="banner">
      <div :style="imgurl"></div>
    </div>
    <div class="main">
      <p class="title">启迪万华科技园</p>
      <el-row class="info" :gutter="30">
        <el-col :span="12" style="text-align:right"><img src="../assets/address.png" alt="">地点：浙江-杭州</el-col>
        <el-col :span="12"><img src="../assets/park.png" alt="">园区类型：产业园区</el-col>
      </el-row>
      <p class="tit">启迪万华科技园</p>
      <p class="cont">启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园启迪万华科技园</p>
      <p class="tit">园区地址：<span>浙江省杭州市余杭区兴中路511号</span></p>
      <p class="tit">园区风貌</p>
      <img class="scene" src="../assets/banner.png" alt="">
      <img class="scene" src="../assets/banner.png" alt="">
      <img class="scene" src="../assets/banner.png" alt="">
      <a class="apply" href="javascript:;">申请入驻园区</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgurl:{backgroundImage:"url(" + require("../assets/banner.png") + ")"},
    }
  },
}
</script>

<style scoped>
.service .banner{height: 380px;background-color: #fff;}
.service .banner div{height: 310px;background-size: cover;background-position: center center;}
.service .main{width: 820px;margin: -174px auto 50px;padding: 35px 55px;background-color: #fff;border-radius: 4px;}
.service .main .title{font-size: 20px;color: #333;font-weight: 600;text-align: center;line-height: 1;}
.service .main .info{line-height: 1;font-size: 13px;color: #676767;margin: 20px 0;}
.service .main .info img{width: 13px;height: 13px;margin-right: 3px;vertical-align: -8%;}
.service .main .tit{font-size: 15px;color: #656565;font-weight: bold;line-height: 48px;}
.service .main .tit span{font-weight: normal;}
.service .main .cont{font-size: 15px;color: #666;line-height: 28px;}
.service .main .scene{width: 100%;height: 335px;display: block;margin-bottom: 25px;}
.service .main .apply{display: block;width: 320px;height: 50px;line-height: 50px;text-align: center;color: #fff;font-size: 18px;background-color:#3b90d3;border-radius: 3px;margin:  40px auto;}
</style>