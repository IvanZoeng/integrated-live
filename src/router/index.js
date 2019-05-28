import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../page/HomePage'
import HistoryPage from '../page/HistoryPage'
import CollectPage from '../page/CollectPage'
import Layout from '../layout/layout'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/live',
      component: Layout,
      children: [
        {
          path: '/live',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/history',
          name: 'HistoryPage',
          component: HistoryPage
        },
        {
          path: '/collect',
          name: 'CollectPage',
          component: CollectPage
        },
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log('before', to, from, next)
// });

// router.afterEach((to, from, next) => {
//   console.log('after', to, from, next)
// });

export default router
