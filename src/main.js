import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// VueRouterを使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

 // vue-toastedを使用
 import Toasted from 'vue-toasted';
 Vue.use(Toasted);

const router = new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/main',
      component: () => import('./components/MainPage.vue')
    },
    {
      path: '/timer',
      component: () => import('./components/Timer.vue')
    },
    {
      path: '/*',
      redirect: '/main',
    }
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')