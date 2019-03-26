<template>
  <div class="activity">
    <div class="banner" :style="imgurl"></div>
    <div class="com-box">
      <come-off></come-off>
      <come-off></come-off>
      <come-off></come-off>
    </div>
  </div>
</template>

<script>
import ComeOff from "../components/ComeOff.vue"
export default {
  components:{
    ComeOff
  },
  data(){
    return{
      imgurl:{backgroundImage:"url(" + require("../assets/banner.png") + ")"},
    }
  }
}
</script>

<style scoped>
.activity{background-color: #fff;}
.activity .banner{height: 260px;background-size: cover;background-position: center center;}
.activity .com-box{padding-bottom: 30px;}
</style>