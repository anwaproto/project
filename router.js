import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Test from "./components/Test.vue"
import List from "./components/List.vue"
import Home from "./components/tabbar/Home.vue"
import indone from "./components/tabbar/onelist.vue"
import indtwo from "./components/tabbar/twolist.vue"
import indthree from "./components/tabbar/threelist.vue"
import indfour from "./components/tabbar/fourlist.vue"
import indfive from "./components/tabbar/fivelist.vue"
import indsix from "./components/tabbar/sixlist.vue"
import indoneone from "./components/one/indone_one.vue"
import indonetwo from "./components/one/indone_two.vue"
import indonethree from "./components/one/indone_three.vue"
import indonefour from "./components/one/indone_four.vue"
import indonefive from "./components/one/indone_five.vue"
import indonesix from "./components/one/indone_six.vue"
import indtwoone from "./components/two/indtwo_one.vue"
import indtwotwo from "./components/two/indtwo_two.vue"
import indthreeone from "./components/three/indthree_one.vue"
import indthreetwo from "./components/three/indthree_two.vue"
import indthreethree from "./components/three/indthree_three.vue"
import indthreeoneone from "./components/three/indthree_one_one.vue"
import indfourone from "./components/four/indfour_one.vue"
import indfourtwo from "./components/four/indfour_two.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/Test',component:Test},
    {path:'/List',component:List},
    {path:'/Home',component:Home},
    {path:'/indone',component:indone,children:[
      {path:'/indone/one',component:indoneone},
      {path:'/indone/two',component:indonetwo},
      {path:'/indone/three',component:indonethree},
      {path:'/indone/four',component:indonefour},
      {path:'/indone/five',component:indonefive},
      {path:'/indone/six',component:indonesix},
    ]},
    {path:'/indtwo',component:indtwo,children:[
      {path:'/indtwo/one',component:indtwoone},
      {path:'/indtwo/two',component:indtwotwo},
    ]},
    {path:'/indthree',component:indthree,children:[
      {path:'/indthree/one',component:indthreeone},
      {path:'/indthree/oneone',component:indthreeoneone},
      {path:'/indthree/two',component:indthreetwo},
      {path:'/indthree/three',component:indthreethree},
    ]},
    {path:'/indfour',component:indfour,children:[
      {path:'/indfour/one',component:indfourone},
      {path:'/indfour/two',component:indfourtwo}
    ]},
    {path:'/indfive',component:indfive},
    {path:'/indsix',component:indsix},
  ]
})
