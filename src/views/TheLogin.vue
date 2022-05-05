<template>
  <div class="login">
    <el-form :model="loginForm" status-icon class="form">
      <h3>系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="input_code" type="text" v-model="loginForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
        <img :src="codeImgUrl" alt="验证码">
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="rememberMe">记住我</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn_submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TheLogin',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
      },
      codeImgUrl: '',
      rememberMe: false
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  display: flex;
  align-items: center;
}

.form {
  box-sizing: content-box;
  width: 350px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  padding: 15px 35px;
  margin: 180px auto;

  > h3 { text-align: center; margin-bottom: 40px; }

  .input_code { width: 60%; margin-right: 10px; }
  .btn_submit { width: 100%; }
}
</style>