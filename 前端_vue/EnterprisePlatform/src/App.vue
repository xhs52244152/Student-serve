<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import FootNav from './components/FootNav'
export default {
  name: 'App',
  components: {
    TopNav,
    FootNav
  }
}
</script>

<style>
html,body,div,p,a,img,ul,ol,li,form{margin: 0;padding: 0;box-sizing: border-box;list-style: none;text-decoration: none;border:0;}
#app{width: 100%;min-width: 1250px;min-height: 100vh;background-color: #f2f2f2;position: relative;padding-bottom: 350px;}
.com-tit{font-size: 24px;color: #2f2f2f;line-height: 24px;padding-left: 5px;border-left: 5px solid #b41d24;}
.com-more{float: right;font-size: 17px;color: #1d1d1d;line-height: 24px;}
.com-box{width: 1200px;margin: 0 auto;}

.el-input__inner{height: 46px;}
.el-button{font-size: 18px;width: 100%;}

.el-step__head.is-success{
  color: #409EFF;
  border-color: #409EFF;
}
.el-step__title{
  font-size: 14px;
}
.el-step__title.is-success{
  color: #409EFF;
}
.el-step__icon{
  width: 34px;
  height: 34px;
}
.el-step__icon-inner{
  font-size: 18px;
}
.el-step__line{
  top: 17px!important;
}
.el-step__head.is-wait{
  color: #a0d0f0;
  border-color: #a0d0f0;
}
.el-step__title.is-wait{
  color: #a0d0f0;
}
.el-step__line{
  background-color:#a0d0f0;
}





</style>