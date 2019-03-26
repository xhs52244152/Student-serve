<template>
  <div class="activity">
    <div class="banner" :style="imgurl"></div>
    <div class="com-box">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/activity' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>创业活动</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="list">
        <div class="info">
          <img src="../assets/activity.jpg" alt="">
          <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <p class="cont">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <div class="time">2018-12-12<a href="javascript:;">活动报名 ></a></div>
        </div>
        <div class="info">
          <img src="../assets/activity.jpg" alt="">
          <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <p class="cont">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <div class="time">2018-12-12<a href="javascript:;">活动报名 ></a></div>
        </div>
        <div class="info">
          <img src="../assets/activity.jpg" alt="">
          <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <p class="cont">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <div class="time">2018-12-12<a href="javascript:;">活动报名 ></a></div>
        </div>
        <div class="info">
          <img src="../assets/activity.jpg" alt="">
          <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <p class="cont">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <div class="time">2018-12-12<a href="javascript:;">活动报名 ></a></div>
        </div>
        <div class="info">
          <img src="../assets/activity.jpg" alt="">
          <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <p class="cont">第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
          <div class="time">2018-12-12<a href="javascript:;">活动报名 ></a></div>
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
  }
}
</script>

<style scoped>
.activity{background-color: #fff;}
.activity .banner{height: 260px;background-size: cover;background-position: center center;}
.activity .com-box{padding: 30px 0;}
.activity .info{overflow: hidden;padding: 35px 15px;border-bottom: 1px solid #ccc;}
.activity .info:last-child{border: none;}
.activity .info img{width: 384px;height: 226px;float: left;display: block;margin-right: 30px;;}
.activity .info .tit{font-size: 21px;color: #333;line-height: 50px;}
.activity .info .cont{font-size: 15px;color: #666;line-height: 26px;height: 130px;margin-bottom: 10px;}
.activity .info .time{font-size: 14px;color: #656565;line-height: 34px;}
.activity .info .time a{display: block;width: 150px;height: 34px;border-radius: 3px;text-align: right;padding: 0 10px;font-size: 17px;color: #fff;background-color: #2b8ed1;float: right;}
.activity .page{width: 440px;margin: 30px auto;}
</style>