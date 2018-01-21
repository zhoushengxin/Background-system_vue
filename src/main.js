import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局导航过滤
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('mytoken')
  if (user) {
    next()
  } else {
    if (to.path !== '/login') {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: C => C(App)
})
