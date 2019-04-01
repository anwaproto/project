<template>
    <div>
        <mt-header title="诺心蛋糕" style="background:red;" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="mui-card" style="margin:0;width:100%;">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<h2>请登录</h2>
				</div>
			</div>
		</div>        
        <div class="mui-card" style="margin:0;width:100%;">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<input type="text" v-model="uname" placeholder="请输入用户名">
                    <input type="password" v-model="upwd" placeholder="请输入密码">
                    <mt-button style="width:35%;background:#eee;" @click="reg">注册</mt-button>
                    <mt-button style="width:35%;float:right;background:#eee;" @click="Login">登录</mt-button>
				</div>
			</div>
		</div>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <a class="mui-tab-item mui-active">
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
            uname:'',
            upwd:'',
            uname:sessionStorage.getItem("uname"),
            shopx:sessionStorage.getItem("shopx")
        }
    },
    methods:{
        reg(){
            location = "http://127.0.0.1:8080/#/reg"
        },
        Login(){
            var url = "http://127.0.0.1:3000/Login"
            var params = new URLSearchParams();
            params.append("uname",this.uname)
            params.append("upwd",this.upwd)
            this.axios.post(url,params).then(result=>{
                if(result.data.code==1){
                    sessionStorage.setItem("uname",this.uname)
                    sessionStorage.setItem("uid",result.data.data[0].uid)
                    Toast("登录成功")
                    location = "http://127.0.0.1:8080/#/"
                }else{
                    Toast("用户名密码错误")
                }
            })
        }
    }
}
</script>


<style>

</style>
