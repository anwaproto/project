<template>
    <div>
        <mt-header title="诺心蛋糕" style="background:red;" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="mui-card" style="width:100%;margin:0;" v-for="(a,i) of infolist" :key="i">
			<div class="mui-card-header">
                <h2 style="margin:auto;color:#ee6666;">
                    {{a.name}}
                </h2>
            </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<img :src="a.md" style="width:100%;">
				</div>
                <p style="color:red;font-size:18px;">
                    ￥{{a.price}}
                </p>
			</div>
			<div class="mui-card-footer">
                <p style="width:35%;margin-top:15px;">
                    <button @click="down">-</button>
                    <span style="padding:0 15px;">{{count}}</span>
                    <button @click="up">+</button>
                </p>
                <button @click="addcart">加入购物车</button>
            </div>
		</div>
        <div class="mui-card" style="margin:0;width:100%;">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					{{cake_title}}
				</div>
			</div>
		</div>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <a class="mui-tab-item" @click="user">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <router-link class="mui-tab-item" to="/ShopCart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{shopx}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
        </nav> 
    </div>
</template>


<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            cid:this.$route.query.cid,
            infolist:[],
            cake_title:'',
            count:1,
            shopx:sessionStorage.getItem("shopx"),
            uid:sessionStorage.getItem("uid"),
            uname:sessionStorage.getItem("uname")
        }
    },
    created(){
        this.cake_info();
    },
    methods:{
        user(){
            if(this.uname){
                location.href = 'http://127.0.0.1:8080/#/Loginout'
            }else{
                location.href = 'http://127.0.0.1:8080/#/Login'
            }
        },
        addcart(){
            var url = "http://127.0.0.1:3000/addCart"
            var params = new URLSearchParams();
            params.append("uid",this.uid)
            params.append("count",this.count)
            params.append("cid",this.cid)
            if(this.uid){
                this.axios.post(url,params).then(result=>{
                    if(result.data.code==1){
                        Toast("添加购物车成功");
                        location = 'http://127.0.0.1:8080/#/'
                    }else{
                        Toast("添加购物车失败")
                    }
                })
            }else{
                Toast("请登录后进行操作")
            }
        },
        down(){
            if(this.count>0){
                this.count--
            }
        },
        up(){
            this.count++
        },
        cake_info(){
            var url = "http://127.0.0.1:3000/cakeinfo?cid="+this.cid
            this.axios.get(url).then(result=>{
                this.infolist = result.data.data
                this.cake_title = result.data.data[0].title
            })
        }
    }
}
</script>



<style>

</style>
