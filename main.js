import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
import {Header,Button,Swipe,SwipeItem,Search} from "mint-ui"
import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.axios = axios;
Vue.component(Header.name,Header)
Vue.component(Search.name,Search)
Vue.component(Button.name,Button)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'


//过滤器
Vue.filter("time",function(val){
    var now = new Date(val);
    var y = now.getFullYear();
    var m = now.getMonth()+1;
    var d = now.getDate();
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();
    m<10&&(m="0"+m);
    d<10&&(d="0"+d);
    return `${y}-${m}-${d} ${h}:${mi}:${s}`
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
