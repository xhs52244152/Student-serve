<template>
  <div class="enter">
    <img class="banner" src="../assets/enter.png" alt="">
    <div class="form">
      <el-steps :active="1" process-status="finish" finish-status="success" align-center>
        <el-step title="入驻申请"></el-step>
        <el-step title="公司信息"></el-step>
        <el-step title="等待审核"></el-step>
      </el-steps>
      <div class="step1" v-if="false">
        <el-form :model="info" :rules="rules" ref="quote" label-width="100px" label-position="right">
          <el-form-item label="联系人姓名" prop="name">
            <el-input v-model="info.name" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="name">
            <el-input v-model="info.name" placeholder="请输入联系人手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="name">
            <el-row>
              <el-col :span="15"><el-input v-model="info.name" placeholder="请输入验证码"></el-input></el-col>
              <el-col :span="8" :offset="1"><el-button type="primary">获取验证码</el-button></el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('quote')">下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="step1">
        <el-form :model="info" :rules="rules" ref="quote" label-width="140px" label-position="right">
          <el-form-item label="公司名称" prop="name">
            <el-input v-model="info.name" placeholder="请填写您的公司全称"></el-input>
          </el-form-item>
          <el-form-item label="营业执照注册号" prop="name">
            <el-input v-model="info.name" placeholder="请填写营业执照注册号"></el-input>
          </el-form-item>
          <el-form-item label="公司简介" prop="name">
            <el-input type="textarea" v-model="info.name" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="公司注册地址" prop="name">
            <el-cascader
              placeholder="试试搜索：指南"
              :options="options"
              filterable
              change-on-select
            ></el-cascader>
          </el-form-item>
          <el-form-item label="" prop="name">
            <el-input v-model="info.name" placeholder="请输入详细地址"></el-input>
          </el-form-item>
          <el-form-item label="机构类型" prop="name">
            <el-input v-model="info.name" placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="投注类型" prop="name">
            <el-input v-model="info.name" placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="投注地区" prop="photo">
            <el-checkbox-group v-model="info.photo">
              <el-checkbox label="安徽省" name="photo"></el-checkbox>
              <el-checkbox label="北京" name="photo"></el-checkbox>
              <el-checkbox label="重庆" name="photo"></el-checkbox>
              <el-checkbox label="福建省" name="photo"></el-checkbox>
              <el-checkbox label="甘肃省" name="photo"></el-checkbox>
              <el-checkbox label="广东省" name="photo"></el-checkbox>
              <el-checkbox label="广西" name="photo"></el-checkbox>
              <el-checkbox label="贵州省" name="photo"></el-checkbox>
              <el-checkbox label="黑龙江省" name="photo"></el-checkbox>
              <el-checkbox label="湖北省" name="photo"></el-checkbox>
              <el-checkbox label="湖南省" name="photo"></el-checkbox>
              <el-checkbox label="海南省" name="photo"></el-checkbox>
              <el-checkbox label="河北省" name="photo"></el-checkbox>
              <el-checkbox label="河南省" name="photo"></el-checkbox>
              <el-checkbox label="吉林省" name="photo"></el-checkbox>
              <el-checkbox label="江苏省" name="photo"></el-checkbox>
              <el-checkbox label="江西省" name="photo"></el-checkbox>
              <el-checkbox label="辽宁省" name="photo"></el-checkbox>
              <el-checkbox label="内蒙古" name="photo"></el-checkbox>
              <el-checkbox label="宁夏" name="photo"></el-checkbox>
              <el-checkbox label="青海省" name="photo"></el-checkbox>
              <el-checkbox label="山东省" name="photo"></el-checkbox>
              <el-checkbox label="山西省" name="photo"></el-checkbox>
              <el-checkbox label="陕西省" name="photo"></el-checkbox>
              <el-checkbox label="上海" name="photo"></el-checkbox>
              <el-checkbox label="四川省" name="photo"></el-checkbox>
              <el-checkbox label="天津" name="photo"></el-checkbox>
              <el-checkbox label="西藏" name="photo"></el-checkbox>
              <el-checkbox label="新疆" name="photo"></el-checkbox><el-checkbox label="宁夏" name="photo"></el-checkbox>
              <el-checkbox label="云南省" name="photo"></el-checkbox>
              <el-checkbox label="浙江省" name="photo"></el-checkbox>
              <el-checkbox label="海外" name="photo"></el-checkbox>
              <el-checkbox label="香港" name="photo"></el-checkbox>
              <el-checkbox label="澳门" name="photo"></el-checkbox>
              <el-checkbox label="台湾" name="photo"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="投注金额" prop="name">
            <el-input v-model="info.name" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item label="成功投注案例">
            <el-input v-model="info.name" placeholder="0"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('quote')">提交入驻申请</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-row class="benefit">
      <el-col :span="12">
        <div class="ft">全程<br>免费</div>
        <div class="rt">
          <p><img src="../assets/benefit.png" alt="">免费约谈项目方</p>
          <p><img src="../assets/benefit.png" alt="">免费参加沙龙路演活动</p>
          <p><img src="../assets/benefit.png" alt="">免费获得机构及投资人展厅</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ft">优质<br>高效</div>
        <div class="rt">
          <p><img src="../assets/benefit.png" alt="">定期推荐优质项目</p>
          <p><img src="../assets/benefit.png" alt="">投递项目严格匹配，排除骚扰</p>
          <p><img src="../assets/benefit.png" alt="">系统自动邀请匹配项目进行投递</p>
        </div>
      </el-col>
    </el-row>
    <div class="into">
      <p class="title">他们已入驻</p>
      <ul>
        <li><img src="../assets/into.png" alt=""></li>
        <li><img src="../assets/into.png" alt=""></li>
        <li><img src="../assets/into.png" alt=""></li>
        <li><img src="../assets/into.png" alt=""></li>
        <li><img src="../assets/into.png" alt=""></li>
        <li><img src="../assets/into.png" alt=""></li>
        <li><img src="../assets/into.png" alt=""></li>
        <li><img src="../assets/into.png" alt=""></li>
      </ul>
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
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
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
}
</script>

<style scoped>
.enter{
  width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
}
.enter .banner{
  width: 100%;
  height: 100px;
  display: block;
}
.enter .form{
  margin:  25px 0;
  padding: 50px 0;
  background-color: #fff;
}
.enter .form .step1{
  width: 460px;
  margin: 40px 0 0 200px;
}


.enter .benefit{height: 160px;padding: 30px 0;background-color: #fff;}
.enter .benefit .ft{width: 100px;height: 100px;float: left;background-color: #2292dd;border-radius: 50px;color: #fff;font-size: 22px;padding:22px 28px;line-height: 28px;margin: 0 20px 0 80px;}
.enter .benefit .rt{margin: 11px 0;}
.enter .benefit .rt p{font-size: 14px;color: #666;line-height: 26px;}
.enter .benefit .rt p img{margin-right: 5px;vertical-align: -5%;}
.enter .into{padding: 20px 0;margin-top: 25px;background-color: #fff;}
.enter .into .title{font-size: 17px;color: #333;line-height: 20px;margin: 10px 32px;}
.enter .into ul{overflow: hidden;padding: 30px 0 10px 25px;}
.enter .into li{float: left;width: 170px;height: 60px;border: 1px solid #efefef;margin: 0 25px 25px 0;}
</style>