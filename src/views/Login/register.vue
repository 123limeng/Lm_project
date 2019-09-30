<template>
  <div class="div-bg">
    <h3>注册</h3>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form-style">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-position" type="primary" @click="register">注册</el-button>
        <el-button type="success" @click="login">去登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Register',
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
      this.$router.push('/')
    },
    register () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('注册成功')
        } else {
          this.$message.error('注册失败')
        }
      })
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
