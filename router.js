import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/tabbar/Home.vue"
import cakeinfo from "./components/tabbar/cakeinfo.vue"
import Login from "./components/tabbar/Login.vue"
import Loginout from "./components/tabbar/Loginout.vue"
import shopCart from "./components/tabbar/shop_cart.vue"
import reg from "./components/tabbar/reg.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/cakeinfo',component:cakeinfo},
    {path:'/Login',component:Login},
    {path:'/Loginout',component:Loginout},
    {path:'/shopCart',component:shopCart},
    {path:'/reg',component:reg}
  ]
})
