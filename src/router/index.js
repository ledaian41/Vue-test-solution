import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    }, {
      path: '/test2',
      name: 'Test2',
      component: Test2
    }
  ]
})
