<template>
  <div class="div-bg">
    <h3>登录</h3>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form-style">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-position" type="primary" @click="login">登录</el-button>
        <el-button type="success" @click="register">去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        phone: undefined,
        password: undefined
      },
      rules: {
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入正确密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push('/home')
        } else {
          this.$message.error('登录失败')
        }
      })
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>
<style scoped>
.div-bg {
  width: 100vw;
  height: 100vh;
  background-color: rgba(4, 167, 243, 0.1);
}
.form-style {
  width: 520px;
  margin: 200px auto;
}
.btn-position {
  margin-left: 100px;
  margin-right: 50px;
}
</style>
