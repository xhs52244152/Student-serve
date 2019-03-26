<template>
  <div class="choice">
    <div class="depict">
      <div class="project">
        <img class="pic" src="../assets/xm.png" alt="">
        <p class="tit">云思顿智能垃圾整理系统及解决方案</p>
        <p class="school">南京工业职业技术学院<span>江苏省</span></p>
        <div class="tag"><span>制造业</span><span>制造业</span><span>制造业</span></div>
        <div class="collect"><img src="../assets/star.png" alt="">收藏777</div>
      </div>
      <div class="tabs">
        <a class="tab active" href="javascript:;">参赛信息</a>
        <a class="tab" href="javascript:;">项目信息</a>
        <a class="tab" href="javascript:;">团队信息</a>
        <a class="tab" href="javascript:;">专利情况</a>
        <a class="tab" href="javascript:;">工商信息</a>
      </div>
    </div>
    <div class="info">
      <p class="title"><img src="../assets/info1.png" alt="">参赛信息</p>
      <div class="cont">
        <p class="p1">项目概述</p>
        <p class="p2">项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述</p>
      </div>
    </div>
    <div class="info">
      <p class="title"><img src="../assets/info1.png" alt="">参赛信息</p>
      <div class="cont">
        <p class="p1">项目概述</p>
        <p class="p2">项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述项目概述</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.choice .depict{background-color: #fff;border-top: 1px solid #e8e8e8;box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);}
.choice .depict .project{height: 178px;margin: 35px auto 20px;width: 1200px;}
.choice .project .pic{float: left;margin-right: 30px;width: 178px;height: 178px;border-radius: 3px;}
.choice .project .tit{font-size: 25px;color: #1b1b1b;line-height: 44px;font-weight: 600;}
.choice .project .school{font-size: 16px;color: #333;margin-top: 6px;}
.choice .project .school span{margin-left: 60px;}
.choice .project .tag{margin: 17px 0;line-height: 24px;}
.choice .project .tag span{display: inline-block;font-size: 15px;color: #888;border: 1px solid #e0e0e0;border-radius: 3px;margin-right: 30px;padding: 0 20px;}
.choice .project .collect{font-size: 15px;color: #747474;line-height: 1;}
.choice .project .collect img{vertical-align: -10%;margin-right: 5px;}
.choice .depict .tabs{width: 1200px;margin: 0 auto;}
.choice .depict .tabs .tab{display: inline-block;line-height: 38px;margin-right: 60px;font-size: 15px;color: #666;}
.choice .depict .tabs .active{border-bottom: 3px solid #b81c22;}
.choice .info{width: 1200px;margin: 20px auto 0;background-color: #fff;}
.choice .info:last-child{margin-bottom: 70px;}
.choice .info .title{line-height: 58px;border-bottom: 1px solid #e7e7e7;font-size: 17px;color: #333;padding: 0 20px;}
.choice .info .title img{margin-right: 5px;vertical-align: -3%;}
.choice .info .cont{padding: 20px;font-size: 15px;}
.choice .info .cont .p1{color: #333;line-height: 36px;}
.choice .info .cont .p2{color: #666;line-height: 30px;}
</style>