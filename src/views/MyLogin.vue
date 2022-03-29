<template>
  <div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <!-- 用户名 -->
      <el-form-item prop="name">
        <el-input
          prefix-icon="el-icon-user-solid
"
          v-model="ruleForm.name"
        >
        </el-input>
      </el-form-item>
      <!-- 密码框 -->
      <el-form-item prop="psd">
        <el-input
          prefix-icon="el-icon-s-goods"
          v-model="ruleForm.psd"
          show-password
        ></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button type="primary" @click="sub">login</el-button>
      <div class="title">
        <span>username : admin</span>
        <span>password : 123456</span>
      </div>
    </el-form>
  </div>
</template>
<script>
import allApi from "../api/index";
import "../mock/index";
export default {
  data() {
    return {
      // 默认账号和密码
      ruleForm: { name: "admin", psd: "123456" },
      // 验证规则
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        psd: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
      newPlugin: null,
    };
  },
  created() {
    this.newPlugin = this.fdoufn(this.subCon, 1000);
  },
  methods: {
    sub() {
      this.newPlugin();
    },
    // 通过后台返回数据判断是否登陆成功
    async subCon() {
      console.log(this.ruleForm);
      let { data } = await allApi.post("/count", this.ruleForm);
      this.$refs.ruleForm.validate((val) => {
        if (!val) return;
        if (data.res == "message") {
          localStorage.setItem("token", "110");
          this.$message({
            message: "登陆成功",
            type: "success",
            duration: 2000,
            onClose: this.$router.push("/home"),
          });
        }
        if (data.res == "error") {
          this.$message.error("登陆失败");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #2d3a4b;
  .el-form {
    width: 30%;
    height: 30%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    .el-form-item {
      margin-bottom: 30px;
    }
    .el-button {
      width: 100%;
    }
    .title {
      color: #fff;
      margin-top: 30px;
      span + span {
        margin-left: 20px;
      }
    }
  }
}
</style>
