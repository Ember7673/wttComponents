import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import test from '@/packages/test'
import dateFormate from '@/components/dateFormate/dateFormate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Hello',
      component: test
    },
    {
      path: '/date',
      name: 'Hello',
      component: dateFormate
    },
  ]
})
