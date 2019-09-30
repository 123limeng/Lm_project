import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login',
      meta: {
        menuShow: false,
        hiddren: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        menuShow: false
      }
    },
    {
      path: '/',
      name: 'Layout',
      redirect: '/home',
      component: () => import('@/components/Layout/index'),
      meta: {
        menuShow: false,
        menuName: '首页',
        hiddren: false
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          components: {
            default: () => import('@/views/Home/home'),
            'main': () => import('@/views/Home/HomePage')
          },
          meta: {
            menuShow: true,
            menuName: '首页'
          }
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/Home/home'),
      meta: {
        menuShow: true,
        menuName: '用户'
      },
      children: [
        {
          path: '/user/usermanage',
          name: 'UserManage',
          components: {
            default: () => import('@/views/Home/home'),
            'main': () => import('@/views/user/UserManage')
          },
          meta: {
            menuShow: true,
            menuName: '用户管理'
          }
        },
        {
          path: '/user/log',
          name: 'Log',
          components: {
            default: () => import('@/views/Home/home'),
            'main': () => import('@/views/user/Log')
          },
          meta: {
            menuName: '日志'
          }
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Login/register.vue'),
      meta: {
        menuShow: false
      }
    }
  ]
})
