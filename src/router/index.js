import Vue from 'vue'
import Router from 'vue-router'
import JMHome from '@/components/JMHome'
import JMNews from '@/components/JMNews'
import JMNewsDetial from '@/components/JMNewsDetial'
import JMJudge from '@/components/JMJudge'
import JMProduction from '@/components/JMProduction'
import JMRule from '@/components/JMRule'
import JMLogin from '@/components/JMLogin'
import JMRuleDetail from '@/components/JMNewsDetial'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'home',
        component: JMHome
      },
    {
      path: '/home',
      name: 'home',
      component: JMHome
    },
    {
      path: '/news',
      name: 'news',
      component: JMNews
    },
    {
        path: '/news/newsDetail',
        name:   "newsDetail",
        component: JMNewsDetial
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
      component: JMRule,
      children:[
          {
              path:'/rule/ruleDetial',
              component:JMRuleDetail
          }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: JMLogin
    }
  ]
})
