import Vue from 'vue'
import Router from 'vue-router'

import Myfooter from './components/Myfooter'
// 引入element-ui测试文件
import ElementUI from "./components/El.vue"
// 引入首页 页面组件
import Index from "./views/Index.vue"

import IndexCaousel from "./components/IndexCaousel"


Vue.use(Router)

export default new Router({
    routes: [
        { path: "/myfooter", component: Myfooter },
        { path: "/el", component: ElementUI }, { path: "/Index", component: Index },{path:"/indexcaousel",component:IndexCaousel}
    ]
})