<template>
  <div class="enroll">
    <div class="box">
      <p class="title">完善个人信息</p>
      <p class="sub">成为创业者后可创建项目，并开始报名参见大赛</p>
      <div class="step">
        <el-steps :active="1" process-status="finish" finish-status="success" align-center>
          <el-step title="注册账号"></el-step>
          <el-step title="提交申请信息"></el-step>
          <el-step title="申请成功"></el-step>
        </el-steps>
      </div>
      <div class="form">
        <el-form :model="info" :rules="rules" ref="quote" label-width="90px" label-position="left">
          <p class="tit">基本信息</p>
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
          <p class="tit">学历认证</p>
          <el-form-item label="学历层次" prop="degree">
            <el-select v-model="info.degree" placeholder="请选择学历层次">
              <el-option label="本科" :value="1"></el-option>
              <el-option label="研究生" :value="2"></el-option>
              <el-option label="博士" :value="3"></el-option>
              <el-option label="大专" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在院校" prop="school">
            <el-input v-model="info.school" placeholder="请输入您的学校"></el-input>
          </el-form-item>
          <el-form-item label="入学时间" prop="star">
            <el-select v-model="info.star" placeholder="请选择入学时间">
              <el-option label="2010" :value="1"></el-option>
              <el-option label="2011" :value="2"></el-option>
              <el-option label="2012" :value="3"></el-option>
              <el-option label="2013" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="毕业时间" prop="end">
            <el-select v-model="info.end" placeholder="请选择毕业时间">
              <el-option label="2010" :value="1"></el-option>
              <el-option label="2011" :value="2"></el-option>
              <el-option label="2012" :value="3"></el-option>
              <el-option label="2013" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业名称" prop="major">
            <el-input v-model="info.major" placeholder="请输入您的专业，最多30个字"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('quote')">提交申请</el-button>
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
        degree:1,
        school:"",
        star:"",
        end:"",
        major:"",
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
        degree: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        school: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        star: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        end: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
        ],
        major: [
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
.enroll{padding: 45px 0;}
.enroll .box{width: 1000px;margin: 0 auto;background-color: #fff;border-radius: 3px;padding: 30px 220px;}
.enroll .title{font-size: 30px;color: #333;line-height: 70px;text-align: center;font-weight: 600;}
.enroll .sub{font-size: 12px;color: #333;text-align: center;line-height: 18px;}
.enroll .step{margin: 25px 0;}
.enroll .tit{font-size: 18px;color: 333;line-height: 1;border-left: 4px solid #2292dd;padding-left: 8px;margin:0 0 30px -70px}
.enroll .form{width: 420px;margin: 0 auto;}
.enroll .form .portrait{float: left;margin: -15px 15px -15px 0;}
.enroll .form .portrait img{width: 70px;height: 70px;border-radius: 50%;}
.enroll .form .tip{font-size: 12px;color: #999;}
.enroll .form .el-select{width: 100%;}
.enroll .form .el-button{width: 100%;height: 50px;}
</style>