<template>
  <div class="news">
    <div class="banner" :style="imgurl"></div>
    <div class="title"><p>新闻资讯</p></div>
    <div class="list">
      <div class="info">
        <img src="../assets/news.png" alt="">
        <p class="tit">网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="sub">网信智投与南天信息达成战略合作 共推商业银行零售科技转型网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="time">2018-07-07</p>
      </div>
      <div class="info">
        <img src="../assets/news.png" alt="">
        <p class="tit">网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="sub">网信智投与南天信息达成战略合作 共推商业银行零售科技转型网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="time">2018-07-07</p>
      </div>
      <div class="info">
        <img src="../assets/news.png" alt="">
        <p class="tit">网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="sub">网信智投与南天信息达成战略合作 共推商业银行零售科技转型网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="time">2018-07-07</p>
      </div>
      <div class="info">
        <img src="../assets/news.png" alt="">
        <p class="tit">网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="sub">网信智投与南天信息达成战略合作 共推商业银行零售科技转型网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="time">2018-07-07</p>
      </div>
      <div class="info">
        <img src="../assets/news.png" alt="">
        <p class="tit">网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="sub">网信智投与南天信息达成战略合作 共推商业银行零售科技转型网信智投与南天信息达成战略合作 共推商业银行零售科技转型</p>
        <p class="time">2018-07-07</p>
      </div>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
.news{background-color: #fff;}
.news .banner{height: 400px;background-size: cover;background-position: center center;}
.news .title{padding: 26px 0;border-bottom: 1px solid #e8e8e8;}
.news .title p{width: 1200px;margin: 0 auto;font-size: 18px;line-height: 1;padding-left: 7px;border-left: 5px solid #bc0000;}
.news .list{width: 1200px;margin: 0 auto;}
.news .list .info{height: 230px;padding: 44px 0;border-bottom: 1px solid #ebebeb;}
.news .list .info img{width: 200px;height: 140px;float: left;margin-right: 30px;}
.news .list .info .tit{font-size: 18px;color: #000;line-height: 40px;}
.news .list .info .sub{font-size: 14px;color: #555;line-height: 50px;}
.news .list .info .time{font-size: 16px;color: #b5b5b5;line-height: 40px;}
.news .page{width: 440px;margin: 50px auto;}
</style>