import Vue from 'vue'
import Router from 'vue-router'

import JMHome from '@/components/JMHome'
// news
import JMNews from '@/components/JMNews'
import JMNewsDetial from '@/components/JMNewsDetial'

import JMJudge from '@/components/JMJudge'
import JMProduction from '@/components/JMProduction'
// rule
import JMRule from '@/components/JMRule'
import JMRuleDetail0 from '@/components/JMRuleDetail0'
import JMRuleDetail1 from '@/components/JMRuleDetail1'
import JMRuleDetail2 from '@/components/JMRuleDetail2'
import JMRuleDetail3 from '@/components/JMRuleDetail3'
import JMRuleDetail4 from '@/components/JMRuleDetail4'
import JMRuleDetail5 from '@/components/JMRuleDetail5'
import JMRuleDetail6 from '@/components/JMRuleDetail6'
import JMRuleDetail7 from '@/components/JMRuleDetail7'
// login
import JMLogin from '@/components/JMLogin'


Vue.use(VeeValidate)

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
      path: '/judge',
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
              path:'/ruleDetail/0',
              component:JMRuleDetail0
          },
          {
              path:'/ruleDetail/1',
              component:JMRuleDetail1
          },
          {
              path:'/ruleDetail/2',
              component:JMRuleDetail2
          },
          {
              path:'/ruleDetail/3',
              component:JMRuleDetail3
          },
          {
              path:'/ruleDetail/4',
              component:JMRuleDetail4
          },
          {
              path:'/ruleDetail/5',
              component:JMRuleDetail5
          },
          {
              path:'/ruleDetail/6',
              component:JMRuleDetail6
          },
          {
              path:'/ruleDetail/7',
              component:JMRuleDetail7
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
