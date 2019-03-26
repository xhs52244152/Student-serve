<template>
  <div class="activity">
    <div class="tab">
      <p class="com-more">查看更多>></p>
      <p class="com-tit">路演活动</p>
    </div>
    <div class="list">
      <div class="info">
        <img src="../assets/activity.jpg" alt="">
        <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
        <p class="end">距离活动结束还剩8天</p>
      </div>
      <div class="info">
        <img src="../assets/activity.jpg" alt="">
        <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
        <p class="end">距离活动结束还剩8天</p>
      </div>
      <div class="info">
        <img src="../assets/activity.jpg" alt="">
        <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
        <p class="end">距离活动结束还剩8天</p>
      </div>
      <div class="info">
        <img src="../assets/activity.jpg" alt="">
        <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
        <p class="end">距离活动结束还剩8天</p>
      </div>
      <div class="info">
        <img src="../assets/activity.jpg" alt="">
        <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
        <p class="end">距离活动结束还剩8天</p>
      </div>
      <div class="info">
        <img src="../assets/activity.jpg" alt="">
        <p class="tit">第104届风险投资对接路演举办第104届风险投资对接路演举办</p>
        <p class="end">距离活动结束还剩8天</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.activity .tab{margin-top: 60px;overflow: hidden;}
.activity .list{overflow: auto;padding: 10px;margin:-10px;}
.activity .list .info{float: left;width: 32%;margin: 40px 2% 0 0;border: 1px solid #e9e9e9;}
.activity .list .info:nth-child(3n){margin-right: 0;}
.activity .list .info:hover{margin-top: 39px;border-color: #fff;box-shadow: 0 5px 10px rgba(0,0,0,0.1);}
.activity .list .info img{width: 100%;height: 225px;display: block;}
.activity .list .info .tit{font-size: 18px;color: #343434;line-height: 26px;margin: 25px 16px 0;}
.activity .list .info .end{font-size: 14px;color: #666;line-height: 1;margin: 10px 16px 25px;}
</style>