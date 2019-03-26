<template>
  <div class="identity">
    <p class="title">请您进行身份选择</p>
    <div class="cont">
      <div class="option">
        <p class="tit">创业者</p>
        <p class="sub">已有60万+大学生创业项目入驻大学生创新创业融资服务平台</p>
        <ul>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
        </ul>
        <a class="btn" href="#">创建项目</a>
      </div>
      <div class="option">
        <p class="tit">专家</p>
        <p class="sub">已有2000+投资人入驻大学生创新创业融资服务平台</p>
        <ul>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
          <li>
            <img src="../assets/identity.png" alt="">
            <span>合华教育</span>
          </li>
        </ul>
        <a class="btn" href="#">立即认证专家</a>
      </div>
    </div>
    <div class="tip">
      <p>大学生创业融资服务平台，是构造专为广州大学生创新创业提供融资等服务的平台，并利用学校现有的大学生创业孵化基地，</p>
      <p>通过线上线下联动，不仅能够使政府了解在校大学生创新创业及其融资状况，制定科学有效的资金扶持政策，也能降低银行及风投等金融机构与</p>
      <p>大学生项目的信息不对称，提高金融机构与大学生项目的成功对接率，扩大广州市乃至全省大学生创新创业的融资渠道和融资数量，实现政府、</p>
      <p>高校、金融机构、平台“四位一体”的良性互动。</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.identity{width: 900px;margin: 0 auto;}
.identity .title{font-size: 31px;color: #333;text-align: center;font-weight: 600;line-height: 150px;}
.identity .cont{display: flex;}
.identity .option{width: 430px;height: 360px;padding: 40px 0;background-color: #fff;border-radius: 3px;box-shadow: 0 0 30px rgba(0,0,0,0.1);}
.identity .option:first-child{margin-right: 40px;}
.identity .option .tit{font-size: 40px;color: #293352;text-align: center;line-height: 48px;font-weight: 600;}
.identity .option .sub{font-size: 14px;color: #444;text-align: center;margin: 26px 0;}
.identity .option ul{display: flex;width: 344px;margin: 0 auto;}
.identity .option li{width: 70px;margin: 0 8px;text-align: center;}
.identity .option li img{width: 70px;height: 70px;border: 1px solid #ccc;}
.identity .option li span{font-size: 14px;color: #484848;}
.identity .option .btn{display: block;width: 156px;height: 36px;background-color: #2292dd;line-height: 36px;text-align: center;color: #fff;font-size: 15px;border-radius: 5px;margin: 20px auto 0;}
.identity .tip{font-size: 14px;color: #666;line-height: 24px;margin: 30px 0;}
</style>