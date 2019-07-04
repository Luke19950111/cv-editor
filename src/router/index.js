import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Resume from '@/components/resume'
import One from '@/components/one'
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
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    }
  ]
})
