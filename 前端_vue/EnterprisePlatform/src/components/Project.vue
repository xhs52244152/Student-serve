<template>
  <div class="project">
    <div class="list">
      <img src="../assets/project.png" alt="">
      <p class="name">上海汽车后市场平台项目</p>
      <div class="info">
        <p class="tit">上海汽车后市场平台项目</p>
        <p class="tip">所属行业：<span>汽车后市场</span></p>
        <p class="tip">所属行业：<span>500万</span></p>
        <p class="tip">所属行业：<span>上海市</span></p>
      </div>
    </div>
    <div class="list">
      <img src="../assets/project.png" alt="">
      <p class="name">上海汽车后市场平台项目</p>
      <div class="info">
        <p class="tit">上海汽车后市场平台项目</p>
        <p class="tip">所属行业：<span>汽车后市场</span></p>
        <p class="tip">所属行业：<span>500万</span></p>
        <p class="tip">所属行业：<span>上海市</span></p>
      </div>
    </div>
    <div class="list">
      <img src="../assets/project.png" alt="">
      <p class="name">上海汽车后市场平台项目</p>
      <div class="info">
        <p class="tit">上海汽车后市场平台项目</p>
        <p class="tip">所属行业：<span>汽车后市场</span></p>
        <p class="tip">所属行业：<span>500万</span></p>
        <p class="tip">所属行业：<span>上海市</span></p>
      </div>
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
.project{display: flex;}
.project .list{width: 370px;height: 214px;margin-right: 45px;position: relative;overflow: hidden;}
.project .list:nth-child(3n){margin-right: 0;}
.project .list img{width: 100%;height: 100%;}
.project .list .name{position: absolute;bottom: 0;width: 100%;color: #fff;font-size: 18px;line-height: 38px;text-align: center;background-color: rgba(0, 0, 0, 0.7);}
.project .list .info{position: absolute;top: 0;width: 100%;height: 100%;padding: 20px;display: none;background-color: rgba(43, 142, 208, 0.9)}
.project .list:hover .info{ display: block;}
.project .list .info .tit{font-size: 20px;color: #fff;font-weight: 600;line-height: 52px;}
.project .list .info .tip{font-size: 17px;color: #a2d5ff;line-height: 34px;}
.project .list .info .tip span{color: #fff;}
</style>