<template>
  <div class="result">
    <div class="banner">
      <div :style="imgurl"></div>
    </div>
    <div class="main">
      <p class="title">第四届大学生创业五强结果公布</p>
      <p class="time">发布时间：2018-10-10</p>
      <div class="box">
        <p class="tit">第四届大学生创业五强结果公布第四届大学生创业五强结果公布</p>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="name" label="项目名称" width="250"></el-table-column>
          <el-table-column prop="address" label="所在省份" width="100"></el-table-column>
          <el-table-column prop="school" label="所在高校"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgurl:{backgroundImage:"url(" + require("../assets/banner.png") + ")"},
      tableData: [{
          name: '人工智能影视制作',
          address: '北京市',
          school: '北京邮电大学'
        }, {
          name: '人工智能影视制作',
          address: '北京市',
          school: '北京邮电大学'
        }, {
          name: '人工智能影视制作',
          address: '北京市',
          school: '北京邮电大学'
        }, {
          name: '人工智能影视制作',
          address: '北京市',
          school: '北京邮电大学'
        }, {
          name: '人工智能影视制作',
          address: '北京市',
          school: '北京邮电大学'
        }]
    }
  },
}
</script>

<style scoped>
.result .banner{height: 380px;background-color: #fff;}
.result .banner div{height: 310px;background-size: cover;background-position: center center;}
.result .main{width: 820px;margin: -174px auto 50px;padding: 35px 55px;background-color: #fff;border-radius: 4px;}
.result .main .title{font-size: 24px;color: #333;font-weight: 600;text-align: center;line-height: 1;margin: 10px 0;}
.result .main .time{font-size: 14px;color: #666;text-align: center;}
.result .main .box{width: 550px;margin: 35px auto;}
.result .main .box .tit{font-size: 20px;color: #333;text-align: center;line-height: 30px;margin: 0 60px 20px;}
</style>