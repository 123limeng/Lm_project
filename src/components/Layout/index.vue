<template>
  <el-container>
    <el-header height="100px">
      <lm-header class="my-header-style"/>
    </el-header>
    <el-container>
      <el-aside>
        <side-nav/>
      </el-aside>
      <el-main>
        <lm-main/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import LmHeader from './Lm_header'
import SideNav from './sider_nav'
import LmMain from './Lm_main'
export default {
  name: 'LayOut',
  components: {
    LmHeader, SideNav, LmMain
  }
}
</script>
<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  padding: 0;
}
</style>
