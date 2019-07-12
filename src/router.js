import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Routernew = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/loginByPhone',
      name: 'loginByPhone',
      component: () => import('./views/login/loginByPhone.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index/index.vue')
      // meta: {auth: true},
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/car/car.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/my/my.vue')
    },
    {
      path: '/userdata',
      name: 'userdata',
      component: () => import('./views/userData/userData.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/category/category.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/detail/detail.vue')
    },
    {
      path: '/indexcategory',
      name: 'indexcategory',
      component: () => import('./views/indexCategory/indexCategory.vue')
    },
    {
      path: '/addresslist',
      name: 'addresslist',
      component: () => import('./views/address/addressList.vue')
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: () => import('./views/address/addAddress.vue')
    },
    {
      path: '/refund',
      name: 'refund',
      component: () => import('./views/refund/refund.vue')
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: () => import('./views/order/orderList.vue')
    },
    {
      path: '/orderdetail',
      name: 'orderdetail',
      component: () => import('./views/order/orderDetail.vue')
    },
    {
      path: '/itemsearch',
      name: 'itemsearch',
      component: () => import('./views/category/itemSearch.vue')
    },
    {
      path: '/itemsearchresult',
      name: 'itemsearchresult',
      component: () => import('./views/category/itemSearchResult.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/my/setting.vue')
    }
  ]
})
// Routernew.beforeEach((to, from, next) => {
//   // console.log(to)
//   if (to.matched.some(record => record.meta.auth)) {
//     if (sessionStorage.getItem('uToken')) {
//       next()
//     } else {
//       next({
//         path: '/loginByPhone'
//       })
//     }
//   } else {
//     next()
//   }
// })
export default Routernew