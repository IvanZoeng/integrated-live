import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../page/HomePage'
import HistoryPage from '../page/HistoryPage'
import CollectPage from '../page/CollectPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
})
