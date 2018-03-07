import Vue from 'vue'
import Router from 'vue-router'
import JMHome from '@/components/JMHome'
import JMJudge from '@/components/JMJudge'
import JMProduction from '@/components/JMProduction'
import JMRule from '@/components/JMRule'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: JMHome
    },
    {
      path: '/judge',
      name: 'judge',
      component: JMJudge
    },
    {
      path: '/production',
      name: 'production',
      component: JMProduction
    },
    {
      path: '/rule',
      name: 'rule',
      component: JMRule
    }
  ]
})
