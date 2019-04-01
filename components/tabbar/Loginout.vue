<template>
    <div>
        <div class="mui-card" style="width:100%;margin:0;padding-bottom:25px;">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>    
                        {{uname}},您好！！！
                    </p>
                    <p>
                        <mt-button style="float:right;" @click="quit">退出登录</mt-button>
                    </p>
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
            <router-link class="mui-tab-item" href="#tabbar-with-chat" to="/ShopCart">
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
            uname:sessionStorage.getItem("uname"),
            shopx:sessionStorage.getItem("shopx")
        }
    },
    methods:{
        quit(){
            sessionStorage.clear();
            Toast("退出成功")
            location.href = "http://127.0.0.1:8080/#/Login"
        }
    }
}
</script>



<style>

</style>
