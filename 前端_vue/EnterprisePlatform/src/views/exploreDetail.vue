<template>
  <div class="explore">
    <div class="peak">
      <div class="box">
        <img class="pic" src="../assets/tx.png" alt="">
        <p class="score">25票 4.6/5.0分</p>
        <p class="name">王美</p>
        <p class="iden"><span>海豚集团</span><span>联合创始人</span><span>从业5年</span></p>
        <p class="invest">投资领域：智能家居\节能环保</p>
        <p class="invest">主投轮次：A轮、B轮、C轮</p>
        <p class="invest">单笔投资额度：100-500</p>
      </div>
    </div>
    <div class="firm">
      <img class="tit" src="../assets/explore1.png" alt="">
      <p class="cont">江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团</p>
      <img class="tit" src="../assets/explore2.png" alt="">
      <p class="cont">机构名称：<span>爱康实业集团</span></p>
      <p class="cont">机构所在地：<span>江苏省</span></p>
      <p class="cont">机构资金规模：<span>300</span></p>
      <p class="cont">机构简介：<span>江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团江苏爱康实业集团</span></p>
      <img class="tit" src="../assets/explore3.png" alt="">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="项目名称" width="300"></el-table-column>
        <el-table-column prop="invest" label="所属领域" width="300"></el-table-column>
        <el-table-column prop="turn" label="投资轮次" width="300"></el-table-column>
        <el-table-column prop="time" label="投资时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        name: '益丰大药房',
        invest: '金融',
        turn: 'A轮',
        time:"2018-11-11"
      }, {
        name: '益丰大药房',
        invest: '金融',
        turn: 'A轮',
        time:"2018-11-11"
      }, {
        name: '益丰大药房',
        invest: '金融',
        turn: 'A轮',
        time:"2018-11-11"
      }]
    }
  }
}
</script>

<style scoped>
.explore .peak{width: 100%;height: 280px;background-image: url(../assets/explore_bg.jpg);background-size: cover;background-position: center center;}
.explore .peak .box{width: 1200px;margin: 0 auto;padding: 60px 0;}
.explore .peak .pic{width: 160px;height: 160px;border-radius: 50%;display: block;margin-right: 30px;float: left;}
.explore .peak .score{float: right;font-size: 17px;color: #fffd66;line-height: 28px;}
.explore .peak .name{font-size: 28px;color: #fff;line-height: 1;}
.explore .peak .iden{font-size: 18px;color: #fff;line-height: 36px;margin-bottom: 20px;}
.explore .peak .iden span{display: inline-block;line-height: 14px;padding-right: 10px;margin-right: 10px;border-right: 2px solid #fff;}
.explore .peak .iden span:last-child{border: none;}
.explore .peak .invest{font-size: 16px;color: #fffd66;line-height: 26px;}
.explore .firm{width: 1200px;margin: 0 auto;background-color: #fff;padding: 10px 40px 50px;margin-bottom: 70px;}
.explore .firm .tit{width: 160px;height: 46px;display:block;margin-left: -58px;margin-top: 30px;}
.explore .firm .cont{font-size: 17px;color: #333;margin-bottom: 10px;line-height: 30px;}
.explore .firm .cont span{color: #666;}
</style>