<template>
  <div class="investor">
    <div class="head">
      <p>投资人</p>
      <p>机构</p>
      <p>职位</p>
      <p>所在地区</p>
      <p>投资领域</p>
      <p>主投轮次</p>
    </div>
    <div class="invest">
      <div>
        <img class="img1" src="../assets/tx.png" alt="">
        <img class="img2" src="../assets/v.png" alt="">
        <span class="name">王美</span>
      </div>
      <div>爱康集团</div>
      <div>联合创始人</div>
      <div>江苏省</div>
      <div>
        <p>智能硬件</p>
        <p>金融</p>
      </div>
      <div>
        <p>A轮</p>
        <p>A轮</p>
        <p>A轮</p>
      </div>
    </div>
    <div class="invest">
      <div>
        <img class="img1" src="../assets/tx.png" alt="">
        <img class="img2" src="../assets/v.png" alt="">
        <span class="name">王美</span>
      </div>
      <div>爱康集团</div>
      <div>联合创始人</div>
      <div>江苏省</div>
      <div>
        <p>智能硬件</p>
        <p>金融</p>
      </div>
      <div>
        <p>A轮</p>
        <p>A轮</p>
        <p>A轮</p>
      </div>
    </div>
    <div class="invest">
      <div>
        <img class="img1" src="../assets/tx.png" alt="">
        <img class="img2" src="../assets/v.png" alt="">
        <span class="name">王美</span>
      </div>
      <div>爱康集团</div>
      <div>联合创始人</div>
      <div>江苏省</div>
      <div>
        <p>智能硬件</p>
        <p>金融</p>
      </div>
      <div>
        <p>A轮</p>
        <p>A轮</p>
        <p>A轮</p>
      </div>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.investor{padding-top: 40px;}
.investor .head{height: 42px;background-color: #2292dc;display: flex;margin-bottom:20px;}
.investor .head p{width: 100%;text-align: center;line-height: 42px;font-size: 16px;color: #fff;}
.investor .invest{display: flex;padding: 25px 0;}
.investor .invest div{width: 100%;text-align: center;line-height: 72px;font-size: 15px;color: #333;}
.investor .invest .img1{width: 72px;height: 72px;display: block;float: left;border-radius: 50%;margin: 0 -40px 0 40px;}
.investor .invest .img2{width: 24px;height: 18px;float: left;margin: 50px -35px 0 22px;}
.investor .invest p{line-height: 24px;}
.investor .page{width: 440px;margin: 30px auto;}
</style>