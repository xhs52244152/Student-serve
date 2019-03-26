<template>
  <div class="service">
    <div class="banner" :style="imgurl"></div>
    <div class="com-box">
      <h2>第三方服务</h2>
      <ul class="tabs">
        <li class="active">孵化器</li>
        <li>股权架构</li>
        <li>公司注册</li>
        <li>财税</li>
        <li>投融资</li>
      </ul>
      <div class="box">
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
        <div class="list">
          <img src="../assets/project.png" alt="">
          <p class="name">上海汽车后市场平台项目</p>
        </div>
      </div>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
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
  methods: {
     
  }
}
</script>

<style scoped>
.service{background-color: #fff;}
.service .banner{height: 270px;background-size: cover;background-position: center center;}
.service .tabs{padding-bottom: 7px;border-bottom: 1px solid #e6e6e6;margin-bottom: 14px;overflow: hidden;}
.service .tabs li{float: left;font-size: 18px;color: #333;font-weight: 500;line-height: 26px;border-right: 1px solid #999;padding-right: 50px;margin-right: 50px;}
.service .tabs li:last-child{border: none;}
.service .tabs li.active{color: #2291e2;font-weight: 600;}
.service .box{overflow: hidden;}
.service .list{float: left;width: 384px;height: 227px;margin:0 24px 30px 0;position: relative;}
.service .list:nth-child(3n){margin-right: 0;}
.service .list img{width: 100%;height: 100%;}
.service .list .name{position: absolute;bottom: 0;width: 100%;color: #fff;font-size: 16px;line-height: 30px;text-align: center;background-color: rgba(0, 0, 0, 0.7);}
.service .page{width: 440px;margin: 0 auto; padding: 40px 0;}
</style>