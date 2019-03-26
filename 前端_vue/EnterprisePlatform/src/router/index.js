import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import choice from '@/views/choice'
import choiceDetail from '@/views/choiceDetail'
import explore from '@/views/explore'
import exploreDetail from '@/views/exploreDetail'
import news from '@/views/news'
import newsDetail from '@/views/newsDetail'
import activity from '@/views/activity'
import activityList from '@/views/activityList'
import activityDetail from '@/views/activityDetail'
import result from '@/views/result'
import service from '@/views/service'
import serviceDetail from '@/views/serviceDetail'
import login from '@/views/login'
import reset from '@/views/reset'
import enroll from '@/views/enroll'
import experts from '@/views/experts'
import identity from '@/views/identity'
import enter from '@/views/enter'
import user from '@/views/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/choice',
      name: 'choice',
      component: choice
    },
    {
      path: '/choiceDetail',
      name: 'choiceDetail',
      component: choiceDetail
    },
    {
      path: '/explore',
      name: 'explore',
      component: explore
    },
    {
      path: '/exploreDetail',
      name: 'exploreDetail',
      component: exploreDetail
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/activityList',
      name: 'activityList',
      component: activityList
    },
    {
      path: '/activityDetail',
      name: 'activityDetail',
      component: activityDetail
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/serviceDetail',
      name: 'serviceDetail',
      component: serviceDetail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/enroll',
      name: 'enroll',
      component: enroll
    },
    {
      path: '/experts',
      name: 'experts',
      component: experts
    },
    {
      path: '/identity',
      name: 'identity',
      component: identity
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
