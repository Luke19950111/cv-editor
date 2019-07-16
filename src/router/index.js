import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Resume from '@/components/resume'
import Login from '@/components/login'
import Two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    }
  ]
})
