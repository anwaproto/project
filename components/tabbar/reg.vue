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
					<h2>注册</h2>
				</div>
			</div>
		</div>        
        <div class="mui-card" style="margin:0;width:100%;">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<input type="text" v-model="uname" placeholder="请输入用户名">
                    <input type="password" v-model="upwd" placeholder="请输入密码">
                    <mt-button style="width:35%;background:#eee;" @click="reg">注册</mt-button>
                    <a style="padding-top:10px;float:right;" @click="Login">已有账号，去登录</a>
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
        Login(){
            location = "http://127.0.0.1:8080/#/Login"
        },
        reg(){
            var url = "http://127.0.0.1:3000/reg"
            var params = new URLSearchParams();
            params.append("uname",this.uname)
            params.append("upwd",this.upwd)
            this.axios.post(url,params).then(result=>{
                Toast(result.data.msg)
                location = "http://127.0.0.1:8080/#/Login"
            })
        }
    }
}
</script>


<style>

</style>
