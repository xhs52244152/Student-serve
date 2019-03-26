<template>
  <div class="search">
    <div class="title"><p>寻找融资</p></div>
    <div class="list">
      <label>所属行业：</label>
      <span class="active">全部</span>
      <span>农、林、牧、渔业</span>
      <span>采矿业</span>
      <span>制造业</span>
      <span class="more">更多>></span>
    </div>
    <div class="list">
      <label>所属行业：</label>
      <span class="active">全部</span>
      <span>农、林、牧、渔业</span>
      <span>采矿业</span>
      <span>制造业</span>
    </div>
    <div class="list">
      <label>所属行业：</label>
      <span class="active">全部</span>
      <span>农、林、牧、渔业</span>
      <span>采矿业</span>
      <span>制造业</span>
    </div>
    <div class="list">
      <label>所属行业：</label>
      <span class="active">全部</span>
      <span>农、林、牧、渔业</span>
      <span>采矿业</span>
      <span>制造业</span>
    </div>
    <div class="query">
      <p><img src="../assets/search.png" alt=""> 查询</p>
      <input type="text" placeholder="若需精准查找机构或个人，请在此输入机构名称或投资人姓名">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.search .title{margin: 20px 0;padding-bottom:30px;border-bottom: 1px solid #2292dd;}
.search .title p{font-size: 18px;color: #333;line-height: 26px;padding-left: 10px;border-left: 4px solid #2292dd;}
.search .list{line-height: 50px;font-size: 15px;color: #808080;}
.search .list span{color: #333;display: inline-block;margin-left: 40px;}
.search .list .active{color: #53a3e2;}
.search .list .more{color: #53a3e2;float: right;}
.search .query{width: 600px;height: 50px;border: 1px solid #5093ff;margin: 20px 0;}
.search .query p{float: right;width: 100px;line-height: 48px;text-align: center;background-color: #5093ff;font-size: 15px;color: #fff;}
.search .query p img{vertical-align: -8%;}
.search .query input{width: 468px;height: 46px;border: none;padding-left: 30px;outline: none;}
</style>