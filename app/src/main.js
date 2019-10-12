import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置去全局组件Myheader
import Myheader from "./components/Myheader.vue"
Vue.component("my-header", Myheader);
// 配置去全局组件Myfooter
import Myfooter from "./components/Myfooter.vue"
Vue.component("my-footer", Myfooter);

Vue.config.productionTip = false
    // 配置element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);

// 配置swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 配置axios库
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8080/";
Vue.prototype.axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')