import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home.js'

import { list } from './list.js'
Vue.use(VueRouter)
export const router = new VueRouter({
  routes: [...home, list] // (缩写) 相当于 routes: routes
})
