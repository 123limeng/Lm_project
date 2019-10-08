<template>
  <div class="sidenav-style">
    <el-menu
      :default-active="$route.path"
      class="my-menu"
      router
      background-color="#eee"
      text-color="##303133"
      active-text-color="#0000ff"
      @select="select">
      <el-menu-item :index="$router.options.routes[2].children[0].path">
        <i class="el-icon-goods"></i>
        <span>{{ $router.options.routes[2].children[0].meta.menuName }}</span>
      </el-menu-item>
      <el-submenu :index="$router.options.routes[3].path">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{$router.options.routes[3].meta.menuName}}</span>
        </template>
        <el-menu-item :index="$router.options.routes[3].children[0].path">
          <i class="el-icon-s-grid"></i>
          <span>{{$router.options.routes[3].children[0].meta.menuName}}</span>
        </el-menu-item>
        <el-menu-item :index="$router.options.routes[3].children[1].path">
          <i class="el-icon-document-copy"></i>
          <span>{{$router.options.routes[3].children[1].meta.menuName}}</span>
        </el-menu-item>
      </el-submenu>
  </el-menu>
  </div>
</template>
<script>
export default {
  name: 'SideNav',
  data () {
    return {
      // activeIndex: '1'
      router_children: []
    }
  },
  created () {
    // console.log(this.$router.options.routes)
  },
  methods: {
    select (val) {
      if (val === this.$route.path) {
        this.$router.go(0)
      }
    }
  }
}
</script>
<style scoped>
.sidenav-style {
  width:100%;
  height:100%;
  /* background-color: rgba(93, 100, 67, 0.479); */
}
</style>
