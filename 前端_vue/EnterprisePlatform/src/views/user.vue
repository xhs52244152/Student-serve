<template>
  <div class="user">
    <div class="com-box">
      <div class="ft">
        <a class="nav" href="javascript:;">挑选优质项目</a>
        <a class="nav" href="javascript:;">约谈项目方</a>
        <a class="nav" href="javascript:;">系统推送匹配度高的项目</a>
        <a class="nav act" href="javascript:;">收藏有意向的项目</a>
      </div>
      <div class="rt">
        <!-- <product></product> -->
        <investor></investor>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue"
import Investor from "../components/Investor.vue"
export default {
  components:{
    Product,
    Investor
  }
}
</script>

<style scoped>
.user{
  border-top: 1px solid #eaeaea;
  padding-bottom: 50px;
  background-color: #fff;
  overflow: hidden;
}
.user .ft{
  float: left;
  width: 180px;
  margin-top:40px;
  border: 1px solid #e2e2e2;
  border-bottom: none;
}
.user .ft .nav{
  color: #666;
  font-size: 16px;
  line-height: 20px;
  padding: 25px;
  text-align: center;
  display: block;
  border-bottom: 1px solid #e2e2e2;
}
.user .ft .act{
  color: #1d74ff;
  border: 1px solid #1d74ff;
}
.user .rt{
  float: right;
  width: 1000px;
}
</style>