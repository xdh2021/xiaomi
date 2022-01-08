import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/jiadianDetail',
    name: 'jiadianDetail',
    component: () => import('../views/jiadianDetail.vue')
  },
  {
    path: '/peijianDetail',
    name: 'peijianDetail',
    component: () => import('../views/peijianDetail.vue')
  },
  {
    path: '/Submit',
    name: 'Submit',
    component: () => import('../views/Submit.vue')
  },
]

const router = new VueRouter({
  routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });


export default router
