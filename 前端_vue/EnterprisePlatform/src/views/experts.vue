<template>
  <div class="experts">
    <div class="box">
      <p class="title">申请成为专家</p>
      <p class="sub">专家投资机构、投资人请申请成为投资人专家，<br>企业家、创业教育专家等，请申请成为非投资人专家。</p>
      <div class="step">
        <el-steps :active="1" process-status="finish" finish-status="success" align-center>
          <el-step title="注册账号"></el-step>
          <el-step title="提交申请信息"></el-step>
          <el-step title="申请成功"></el-step>
        </el-steps>
      </div>
      <p class="tit">基本信息</p>
      <div class="form">
        <el-form :model="info" :rules="rules" ref="quote" label-width="90px" label-position="left">
          <el-form-item label="个人头像" prop="photo">
            <el-upload class="portrait" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :before-upload="judgeImg" :on-success="upSuccess">
              <img v-if="info.photo" :src="info.photo" alt="">
              <img v-else src="../assets/profile.png" alt="">
            </el-upload>
            <p class="tip">仅支持JPG、GIF、PNG格式，文件小于3M</p>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="info.name" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="证件类型" prop="paper">
            <el-select v-model="info.paper" placeholder="请选择证件类型">
              <el-option label="身份证" :value="1"></el-option>
              <el-option label="护照" :value="2"></el-option>
              <el-option label="驾照" :value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码" prop="number">
            <el-input v-model="info.number" placeholder="请输入证件号码"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="info.email" placeholder="请输入您的邮箱"></el-input>
          </el-form-item>
          <el-form-item label="所在机构" prop="company">
            <el-input v-model="info.company" placeholder="请填写您的机构全称"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="job">
            <el-input v-model="info.job" placeholder="请填写您的职位名称"></el-input>
          </el-form-item>
          <el-form-item label="从业年限" prop="term">
            <el-input v-model="info.term" placeholder="请填写您的从业年限"></el-input>
          </el-form-item>
          <el-form-item label="毕业时间" prop="time">
            <el-input v-model="info.time" placeholder="请填写您的毕业时间"></el-input>
          </el-form-item>
          <el-form-item label="推荐类型" prop="recommend">
            <el-select v-model="info.recommend" placeholder="请选择推荐类型">
              <el-option label="类型1" :value="1"></el-option>
              <el-option label="类型2" :value="2"></el-option>
              <el-option label="类型3" :value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="个人简介" prop="desc">
            <el-input type="textarea" v-model="info.desc" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="个人头像" prop="card">
            <el-upload class="card" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :before-upload="judgeImg" :on-success="upSuccess">
              <img v-if="info.card" :src="info.card" alt="">
              <img v-else src="../assets/card.png" alt="">
            </el-upload>
            <p class="cip">真实名片，仅供认证使用，平台不会暴露您的个人信息</p>
            <p class="cip">仅支持JPG、GIF、PNG格式，文件小于5M</p>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('quote')">下一步：申请成为投资人专家</el-button>
            <el-button class="btn" plain>完成创建，成为非投资人专家</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        photo:'',
        name: '',
        paper:1,
        number:'',
        email:"",
        company:"",
        job:"",
        term:"",
        time:"",
        recommend:1,
        desc:"",
        card:""
      },
      rules: {
        photo:[
          { required: true, message: '选择头像', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        paper: [
          { required: true, message: '请选择证件类型', trigger: 'blur' },
        ],
        number: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        company: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        job: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        term: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        time: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        recommend: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        card: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    judgeImg(res){
      const type = res.type!=="image/png"&&res.type!=="image/jpeg"&&res.type!=="image/gif";
      const size = res.size / 1024 / 1024 > 3;
      if(type){
        console.log("图片格式不正确")
        return false
      }
      if(type){
        console.log("图片超过了3M")
        return false
      }
    },
    submitForm(formName) {
      console.log(this.info)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    upSuccess(response, file, fileList){
      console.log(response, file, fileList)
    },
  }
}
</script>

<style scoped>
.experts{padding: 45px 0;}
.experts .box{width: 1000px;margin: 0 auto;background-color: #fff;border-radius: 3px;padding: 30px 220px;}
.experts .title{font-size: 30px;color: #333;line-height: 70px;text-align: center;font-weight: 600;}
.experts .sub{font-size: 12px;color: #333;text-align: center;line-height: 18px;}
.experts .step{margin: 25px 0;}
.experts .tit{font-size: 18px;color: 333;line-height: 1;border-left: 4px solid #2292dd;padding-left: 8px;}
.experts .form{width: 420px;margin: 50px auto 0;}
.experts .form .portrait{float: left;margin: -15px 15px -15px 0;}
.experts .form .portrait img{width: 70px;height: 70px;border-radius: 50%;}
.experts .form .tip{font-size: 12px;color: #999;}
.experts .form .el-select{width: 100%;}
.experts .form .el-button{width: 100%;height: 50px;}
.experts .form .card{float: left;margin-right: 15px;}
.experts .form .cip{font-size: 12px;color: #999;line-height: 24px;}
.experts .form .btn{margin: 20px 0 0;color: #5fadff;border-color: #5fadff;}
</style>