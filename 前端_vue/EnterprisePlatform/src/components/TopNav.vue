<template>
  <div class="top-nav">
    <div class="head">
      <div class="cont">
        <div class="rt">
          <img src="../assets/user.png" alt="">
          <router-link class="entry" to="/login">登陆</router-link>
          <span>|</span>
          <router-link class="entry" to="/login">注册</router-link>
          <span>|</span>
          <router-link class="entry" to="/login">校方管理入口</router-link>
          <router-link class="inlet" to="/login">投资人免费入驻</router-link>
        </div>
        <div class="ft">
          <span class="address">广州</span>
          <span>[ 切换城市 ]</span>
        </div>
      </div>
    </div>
    <div class="foot">
      <img src="../assets/logo.png" alt="">
      <div class="nav">
        <router-link class="tab active" to="/">首页</router-link>
        <router-link class="tab" to="/choice">选项目</router-link>
        <router-link class="tab" to="/explore">找投资</router-link>
        <router-link class="tab" to="/news">新闻资讯</router-link>
        <router-link class="tab" to="/activity">活动报名</router-link>
        <router-link class="tab" to="/service">第三方服务</router-link>
      </div>
      <p class="name">大学生创新创业融资服务平台</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.top-nav{background-color: #fff;}
.top-nav .head{border-bottom: 1px solid #e3e3e3;}
.head .cont{height: 54px;width: 1220px;margin: 0 auto;}
.head .cont .rt{float: right;line-height: 52px;}
.head .rt img{width: 19px;height: 19px;vertical-align: -8%;}
.head .rt .entry{color: #6b6b6b;font-size: 16px;display: inline-block;padding: 0 7px;}
.head .rt span{color: #ccc;font-size: 14px;}
.head .rt .inlet{display: inline-block;width: 126px;height: 20px;background-color: #2292dc;font-size: 14px;color: #fff;line-height: 20px;text-align: center;margin-left: 12px;}
.head .cont .ft{line-height: 52px;color: #656565;}
.head .ft .address{font-size: 17px;color: #fd731a;font-weight: bold;}
.top-nav .foot{
  height: 92px;
  width: 1240px;
  margin: 0 auto;
}
.foot img{
  float: left;
  margin: 8px 12px 0 0;
}
.foot .name{
  line-height: 92px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
}
.foot .nav{
  float: right;
}
.foot .nav .tab{
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  color: #333;
  line-height: 92px;
  margin-left: 90px;
}
.foot .nav .active{
  color: #288cd7;
}
</style>