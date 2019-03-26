<template>
  <div class="foot-nav">
    <div class="box">
      <el-row class="upper">
        <el-col :span="5">
          <a class="tit" href="javascript:;">首页</a>
          <a class="nav" href="javascript:;">选项目</a>
          <a class="nav" href="javascript:;">找投资</a>
          <a class="nav" href="javascript:;">新闻资讯</a>
          <a class="nav" href="javascript:;">活动报名</a>
          <a class="nav" href="javascript:;">第三方服务</a>
        </el-col>
        <el-col :span="5">
          <a class="tit" href="javascript:;">新手指引</a>
          <a class="nav" href="javascript:;">新手专区</a>
          <a class="nav" href="javascript:;">常见问题</a>
          <a class="nav" href="javascript:;">安全保障</a>
          <a class="nav" href="javascript:;">隐私声明</a>
          <a class="nav" href="javascript:;">免责声明</a>
        </el-col>
        <el-col :span="5">
          <p class="tit">客服信息</p>
          <p class="nav">出借人客服/ <span>400-1028-886</span></p>
          <p class="nav">借款人客服/ <span>400-1728-928</span></p>
          <p class="tim">工作日：9:00-20:00</p>
          <p class="tim">节假日：9:00-12:00，13:30-18:00</p>
        </el-col>
        <el-col :span="5">
          <div class="code">
            <p>下载厚本app</p>
            <img src="../assets/code.jpg" alt="">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="code">
            <p>关注公众号</p>
            <img src="../assets/code.jpg" alt="">
            <p class="tip">市场有风险 出借需谨慎</p>
          </div>
        </el-col>
      </el-row>
      <p class="record">Copyright 2018 Houbank.com,All Rights Reserved. 上海厚本金融信息服务有限公司 沪ICP备15002211号-2<img src="" alt="">沪公网安备 31010102002097号</p>
      <div class="img">
        <img src="../assets/record.jpg" alt="">
        <img src="../assets/record.jpg" alt="">
        <img src="../assets/record.jpg" alt="">
        <img src="../assets/record.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.foot-nav{background-color: #fff;position: absolute;bottom: 0;width: 100%;}
.foot-nav .box{width: 1140px;height: 350px;margin: 0 auto;}
.foot-nav .upper{padding: 25px 5px;border-bottom: 1px solid #e6e6e6;}
.foot-nav .upper .tit{font-size: 15px;color: #333;display: block;line-height: 40px;}
.foot-nav .upper .nav{font-size: 13px;color: #777;display: block;line-height: 28px;}
.foot-nav .upper .nav span{font-size: 16px;color: #333;}
.foot-nav .upper .tim{font-size: 12px;color: #8f9190;line-height: 24px;}
.foot-nav .upper .code{width: 120px;float: right;text-align: center;font-size: 14px;color: #333;line-height: 40px;}
.foot-nav .upper .code img{width: 120px;height: 120px;display: block;}
.foot-nav .upper .code .tip{font-size: 12px;color: #9f9f9f;margin: 0 -5px;line-height: 24px;}
.foot-nav .record{font-size: 14px;color: #383836;line-height: 48px;text-align: center;}
.foot-nav .img{width: 310px;margin: 0 auto;padding-bottom: 30px;}
.foot-nav .img img{height: 23px;margin: 5px;}
</style>