<template>
    <div>
        <mt-swipe :auto="4000" style="height:150px;">
            <mt-swipe-item v-for="(a,i) of list" :key="i">
                <img :src="a.img_url" style="width:100%;height:150px;">
            </mt-swipe-item>
        </mt-swipe>
        <div class="mui-content" style="">
		        <ul class="mui-table-view mui-grid-view mui-grid-9" style="margin:0;background:pink;">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(a,i) of grid" :key="i">
                        <span @click="cakelist(a.id)">
		                    <div class="mui-media-body" style="color:#eff;">
                                {{a.name}}
                            </div>
                        </span>
                    </li>
		        </ul> 
		</div>


        <div class="mui-card" style="width:50%;margin:0;display:inline-block;" v-for="(a,i) of cakeimg" :key="i">
				<div class="mui-card-header" style="font-size:18px;color:#aa6666;">
                    {{a.name}}
                </div>
				<div class="mui-card-content">
                    <router-link :to="'/cakeinfo?cid='+a.cid">
                        <div class="mui-card-content-inner">
                            <img :src="a.md" style="width:100%;">
                        </div>
                    </router-link>
				</div>
				<div class="mui-card-footer" style="font-size:16px;color:#0aa1ed">
                    ￥{{a.price}}
                </div>
		</div>

        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <a class="mui-tab-item" @click="user">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <router-link class="mui-tab-item" href="#tabbar-with-chat" to="/ShopCart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{shopx}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
        </nav> 
        
    </div>
</template>



<script>
export default {
    data(){
        return{
            list:[],
            grid:[],
            cakeimg:[],
            uname:sessionStorage.getItem("uname"),
            shopx:sessionStorage.getItem("shopx"),
            uid:sessionStorage.getItem("uid")
        }
    },
    created(){
        this.swplist();
        this.gridlist();
        this.cakelist();
        this.getshopcart();
    },
    methods:{
        getshopcart(){
            var url = "http://127.0.0.1:3000/shopCart?uid="+this.uid
                    this.axios.get(url).then(result=>{
                        sessionStorage.setItem("shopx",result.data.data.length)
                })
        },
        user(){
            if(this.uname){
                location = 'http://127.0.0.1:8080/#/Loginout'
            }else{
                location = 'http://127.0.0.1:8080/#/Login'
            }
        },
        cakelist(i){
            if(!i){i=1}
            var url = "http://127.0.0.1:3000/zslist?fid="+i
            this.axios.get(url).then(result=>{
                this.cakeimg = result.data.data
            })
        },
        swplist(){
            var url = "http://127.0.0.1:3000/swp"
            this.axios.get(url).then(result=>{
                this.list = result.data.data
            })
        },
        gridlist(){
            var url = "http://127.0.0.1:3000/gridlist"
            this.axios.get(url).then(result=>{
                this.grid = result.data.data
            })
        }
    }
}
</script>



<style>

</style>
