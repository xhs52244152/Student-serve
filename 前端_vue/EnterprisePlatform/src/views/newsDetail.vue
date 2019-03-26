<template>
  <div class="news">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>创业活动</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box">
      <p class="title"><img src="../assets/title.png" alt="">第四届大学生创新创业大赛结果公示</p>
      <img class="info" src="../assets/banner.png" alt="">
      <p class="cont">第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示第四届大学生创新创业大赛结果公示</p>
      <a class="back" href="javascript:;">返回新闻列表</a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.news{background-color: #fff;padding: 30px 0 10px;}
.news .breadcrumb{width: 1200px;margin: 0 auto;}
.news .box{width: 900px;margin: 60px auto 0;}
.news .box .title{font-size: 26px;color: #333;line-height: 52px;border-bottom: 1px solid #cfcfcf;margin-bottom: 30px;}
.news .box .title img{margin-right: 10px;vertical-align: -8%;}
.news .box .info{width: 100%;height: 400px;display: block;margin:  10px 0;}
.news .box .cont{text-indent: 2em;font-size: 17px;color: #666;line-height: 28px;}
.news .box .back{display: block;width: 220px;height: 56px;line-height: 54px;text-align: center;font-size: 20px;color: #212121;margin: 50px auto;border: 1px solid #bababa;border-radius: 3px;}
</style>