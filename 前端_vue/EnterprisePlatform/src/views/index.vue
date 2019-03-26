<template>
  <div class="index">
    <el-carousel height="530px">
      <el-carousel-item>
        <a class="banner" href="#" :style="imgurl"></a>
      </el-carousel-item>
      <el-carousel-item>
        <a class="banner" href="#" :style="imgurl"></a>
      </el-carousel-item>
    </el-carousel>
    <div class="tab">
      <div class="cont">
        <a class="nav" href="#">
          <p>选项目</p>
          <span>—————></span>
        </a>
        <a class="nav" href="#">
          <span class="spe">发现青年创变者</span>
          <p>找投资</p>
          <span>—————></span>
        </a>
        <a class="nav" href="#">
          <p>活动报名</p>
          <span>—————></span>
        </a>
      </div>
    </div>
    <div class="record">
      <div class="box">
        <div class="depict">
          <p class="num">23<span>万+</span></p>
          <p class="des"><img src="../assets/record1.png" alt="">创业者总数</p>
        </div>
        <div class="depict">
          <p class="num">326<span>万+</span></p>
          <p class="des"><img src="../assets/record2.png" alt="">创业项目总数</p>
        </div>
        <div class="depict">
          <p class="num">826<span>万+</span></p>
          <p class="des"><img src="../assets/record3.png" alt="">投资人总数</p>
        </div>
        <div class="depict">
          <p class="num">926<span>万+</span></p>
          <p class="des"><img src="../assets/record4.png" alt="">举行活动场数</p>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="box">
        <div style="margin-bottom: 40px">
          <p class="com-more">查看更多>></p>
          <p class="com-tit">推荐项目</p>
        </div>
        <project></project>
      </div>
    </div>
    <div class="investor">
      <div style="margin-bottom: 40px">
        <p class="com-more">查看更多>></p>
        <p class="com-tit">优秀投资人</p>
      </div>
      <ul>
        <li>
          <img src="../assets/tx.png" alt="">
          <p class="name">刘雨坤</p>
          <p class="post">IDG高级投资经理</p>
          <p class="motto">比较看好的团队是一个有互联网意识但同时又懂得这个行业是怎么运转的这么一个团队得这个行业是怎么运转的这么一个团队</p>
        </li>
        <li>
          <img src="../assets/tx.png" alt="">
          <p class="name">刘雨坤</p>
          <p class="post">IDG高级投资经理</p>
          <p class="motto">比较看好的团队是一个有互联网意识但同时又懂得这个行业是怎么运转的这么一个团队得这个行业是怎么运转的这么一个团队</p>
        </li>
        <li>
          <img src="../assets/tx.png" alt="">
          <p class="name">刘雨坤</p>
          <p class="post">IDG高级投资经理</p>
          <p class="motto">比较看好的团队是一个有互联网意识但同时又懂得这个行业是怎么运转的这么一个团队得这个行业是怎么运转的这么一个团队</p>
        </li>
        <li>
          <img src="../assets/tx.png" alt="">
          <p class="name">刘雨坤</p>
          <p class="post">IDG高级投资经理</p>
          <p class="motto">比较看好的团队是一个有互联网意识但同时又懂得这个行业是怎么运转的这么一个团队得这个行业是怎么运转的这么一个团队</p>
        </li>
      </ul>
    </div>
    <div class="press">
      <div class="box">
        <div style="margin-bottom: 70px">
          <p class="com-more">查看更多>></p>
          <p class="com-tit">新闻资讯</p>
        </div>
        <div class="major">
          <img src="../assets/press.png" alt="">
          <div class="cont">
            <div class="rt">
              <p class="p1">车库咖啡创客沙龙：企业如何玩转新营销媒体营销</p>
              <p class="p2">车库咖啡创客沙龙：企业如何玩转新营销媒体营销企业如何玩转新营销媒体营销</p>
            </div>
            <div class="ft">
              <p>31</p>
              <span>2018-10</span>
            </div>
          </div>
        </div>
        <div class="minor">
          <div class="cont">
            <div class="rt">
              <p class="p1">车库咖啡创客沙龙：企业如何玩转新营销媒体营销</p>
              <p class="p2">车库咖啡创客沙龙：企业如何玩转新营销媒体营销企业如何玩转新营销媒体营销</p>
            </div>
            <div class="ft">
              <p>31</p>
              <span>2018-10</span>
            </div>
          </div>
          <div class="list">
            <a class="news" href="#">1、企业如何玩转新营销媒体营销<span>2016-12-08>></span></a>
            <a class="news" href="#">1、企业如何玩转新营销媒体营销<span>2016-12-08>></span></a>
            <a class="news" href="#">1、企业如何玩转新营销媒体营销<span>2016-12-08>></span></a>
            <a class="news" href="#">1、企业如何玩转新营销媒体营销<span>2016-12-08>></span></a>
          </div>
        </div>
        <div class="btn">点击查看更多<img src="../assets/more.png" alt=""></div>
      </div>
    </div>
    <div class="activity">
      <div class="reveal">
        <img src="../assets/reveal.png" alt="">
        <a class="btn" href="#">活动报名</a>
      </div>
      <div class="box">
        <p class="tit">活动回顾</p>
        <div>
          <div class="list">
            <img src="../assets/wy.png" alt="">
            <p class="title">第四届大学生互联网创业大赛结果赛结果公布公布</p>
            <p class="sub">冠军夺赛结果公示</p>
            <a class="dit" href="#">详情&#x3000;></a>
            <p class="time">2018-10-14</p>
          </div>
          <div class="list">
            <img src="../assets/wy.png" alt="">
            <p class="title">第四届大学生互联网创业大赛结赛结果公布果公布</p>
            <p class="sub">冠军夺赛结果公示</p>
            <a class="dit" href="#">详情&#x3000;></a>
            <p class="time">2018-10-14</p>
          </div>
          <div class="list">
            <img src="../assets/wy.png" alt="">
            <p class="title">第四届大学生互联网创业大赛结赛结果公布果公布</p>
            <p class="sub">冠军夺赛结果公示</p>
            <a class="dit" href="#">详情&#x3000;></a>
            <p class="time">2018-10-14</p>
          </div>
          <div class="list">
            <img src="../assets/wy.png" alt="">
            <p class="title">第四届大学生互联网创业大赛结果公布赛结果公布</p>
            <p class="sub">冠军夺赛结果公示</p>
            <a class="dit" href="#">详情&#x3000;></a>
            <p class="time">2018-10-14</p>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
      <div class="box">
        <div style="margin-bottom: 30px">
          <p class="com-more">查看更多>></p>
          <p class="com-tit">新闻资讯</p>
        </div>
        <project></project>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '../components/Project'
export default {
  components: {
    Project
  },
  data(){
    return{
      imgurl:{backgroundImage:"url(" + require("../assets/banner.png") + ")"},
    }
  }
}
</script>

<style scoped>
.index .banner{display: block;width: 100%;height: 100%;background-size: cover;background-position: center center;}

.index .tab{height: 156px;background-color: #2b8ed0;}
.index .tab .cont{width: 1200px;display: flex;margin: 0 auto;}
.index .tab .nav{display: block;width: 100%;height: 156px;text-align: center;color: #fff;}
.index .tab .nav:hover{background-color: #3998d8;}
.index .tab .nav p{line-height: 60px;font-size: 20px;border-left: 1px solid #46a5e5;margin: 70px 0 -20px 0;}
.index .tab .nav:last-child p{border-right: 1px solid #46a5e5;}
.index .tab .nav .spe{font-size: 28px;font-weight: 600;display: block;line-height: 30px;margin: 25px 0 -55px;}
.index .record{background-color: #fff;}
.index .record .box{width: 1200px;height: 270px;margin: 0 auto;padding-top: 70px;border-bottom: 1px solid #e7e7e7;display: flex;}
.index .record .depict{width: 100%;text-align: center;}
.index .record .num{font-size: 50px;color: #bb0000;margin-bottom: 10px;}
.index .record .num span{font-size: 18px;color: #666;vertical-align: 95%;}
.index .record .des{font-size: 17px;color: #666;}
.index .record .des img{width: 22px;height: 22px;vertical-align: middle;margin-right: 3px;}

.index .project{width: 100%;background-color: #fff;}
.index .project .box{width: 1200px;height: 480px;margin: 0 auto;padding-top: 100px;}

.index .investor{width: 1200px;height: 720px;margin: 0 auto;padding-top: 100px;overflow: hidden;}
.index .investor li{width: 490px;height: 260px;float: left;margin-right: 220px;}
.index .investor li:nth-child(2n){margin-right: 0;}
.index .investor li img{width: 86px;height: 86px;border: 3px solid #fff;border-radius: 50%;float: left;margin: 0 20px 170px 0;box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);}
.index .investor li .name{font-size: 24px;color: #333;margin-top: 15px;}
.index .investor li .post{font-size: 17px;color: #333;margin: 3px 0 30px;}
.index .investor li .motto{font-size: 17px;color: #666;line-height: 27px;}

.index .press{height: 840px;background-color: #fff;}
.index .press .box{width: 1200px;margin: 0 auto;padding-top: 100px;}
.index .press .major{width: 512px;float: left;margin-right: 58px;}
.index .press .major img{width: 100%;height: 247px;display: block;}
.index .press .major .cont{width: 100%;height: 167px;background-color: #2b8ed1;}
.index .press .major .rt{float: right;width: 400px;margin-right: 20px;}
.index .press .major .p1{font-size: 22px;color: #fff;line-height: 26px;padding: 20px 0 10px;border-bottom: 1px solid #60acdd;}
.index .press .major .p2{font-size: 16px;color: #bde6ff;line-height: 24px;padding: 10px 0;}
.index .press .major .ft{width: 90px;text-align: center;color: #fff;font-size: 14px;padding-top: 16px;}
.index .press .major .ft p{font-size: 52px;line-height: 1;}
.index .press .minor{display: inline-block;}
.index .press .minor .cont{height: 178px;}
.index .press .minor .rt{float: left;width: 530px;margin-right: 40px;}
.index .press .minor .p1{font-size: 22px;color: #333;line-height: 1;}
.index .press .minor .p2{font-size: 17px;color: #666;line-height: 24px;padding: 15px 0;}
.index .press .minor .ft{width: 60px;text-align: center;color: #666;font-size: 14px;display: inline-block;}
.index .press .minor .ft p{font-size: 50px;line-height: 1;margin-top: -5px;}
.index .press .minor .list .news{display: block;line-height: 58px;border-bottom: 1px solid #ccc;font-size: 18px;color: #666;}
.index .press .minor .list .news span{float: right;font-size: 14px;}
.index .press .btn{width: 266px;line-height: 46px;font-size: 18px;color: #666;border: 1px solid #ccc;border-radius: 3px;margin: 85px auto 0;text-align: center;}
.index .press .btn img{vertical-align: -8%;margin-left: 5px;}

.index .activity{background-color: #fff;}
.index .activity .reveal{height: 200px;position: relative;}
.index .activity .reveal img{width: 100%;height: 100%;}
.index .activity .reveal .btn{width: 316px;line-height: 50px;display: block;background-color: #fff;text-align: center;color: #474682;font-size: 22px;border-radius: 5px;position:absolute;top: 125px;left: 500px;}
.index .activity .box{width: 1200px;height: 590px;margin: 0 auto;border-bottom: 1px solid #ccc;}
.index .activity .tit{font-size: 30px;color: #333;text-align: center;padding-top: 30px;line-height: 60px;font-weight: 600;border-bottom: 1px solid #ccc;}
.index .activity .list{width: 565px;height: 150px;float: left;margin: 50px 70px 0 0;}
.index .activity .list:nth-child(2n){margin-right: 0;}
.index .activity .list img{width: 210px;height: 140px;float: left;margin-right: 10px;}
.index .activity .list .title{font-size: 17px;color: #363636;font-weight: 600;}
.index .activity .list .sub{font-size: 17px;color: #6b6b6b;}
.index .activity .list .dit{float: right;width: 150px;line-height: 34px;border-radius: 3px;background-color: #2292dc;padding: 0 10px;text-align: right;color: #fff;}
.index .activity .list .time{font-size: 14px;color: #979797;}

.index .article{
  height: 500px;
  background-color: #fff;
}
.index .article .box{
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>