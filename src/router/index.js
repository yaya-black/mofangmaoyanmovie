// 定义路由组件
import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import CinemaRouter from './Cinema'
import MovieRouter from './Movie'
import MineRouter from './Mine'

// 使用模块化机制时，需要调用Vue.use（Router）
Vue.use(Router);
// 定义路由
// export default 
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      CinemaRouter,
      MovieRouter,
      MineRouter,
      {
        path:'/*',
        redirect:'/Movie'
      } 
    
  ]
})

