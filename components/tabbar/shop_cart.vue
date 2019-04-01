<template>
    <div>
        <mt-header title="诺心蛋糕" style="background:red;" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="mui-card" style="width:100%;margin:0;">
			<div class="mui-card-header">
                <input type="checkbox" style="zoom:180%;" @click="cball" id="all" :checked="allcb"><label for="all">全选</label>
            </div>
			<div class="mui-card-content">
			<div class="mui-card-content-inner">
			    <ul class="mui-table-view">
				    <li class="mui-table-view-cell mui-media" v-for="(a,i) of list" :key="i" style="display:flex">
                        <input type="checkbox" :checked="a.cb" :data-i="i" style="margin-right:5px;zoom:180%;" @click='cb'>
				    	<a href="javascript:;" style="width:80%;">
				    		<div class="mui-media-body">
				    			{{a.name}}
					    		<p class='mui-ellipsis'>{{a.price}}</p>
                                <p>数量：{{a.count}}</p>
						    </div>
					    </a>
                        <button :data-id="a.sid" :data-idx="i" @click="delcart" style="postion:absolute;">删除</button>
				    </li>
			    </ul>
			</div>
			</div>
			<div class="mui-card-footer">
                <button @click="delshop">删除指定商品</button>
                <button @click="payshop">立即结算</button>
            </div>
		</div>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" href="#tabbar" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<a class="mui-tab-item" @click="user">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<router-link class="mui-tab-item mui-active" to="/ShopCart">
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
            shopx:sessionStorage.getItem("shopx"),
            uid:sessionStorage.getItem("uid"),
            list:[],
            allcb:false,
            uname:sessionStorage.getItem("uname")
        }
    },
    created(){
        this.cart();
    },
    methods:{
        user(){
            if(this.uname){
                location = 'http://127.0.0.1:8080/#/Loginout'
            }else{
                location = 'http://127.0.0.1:8080/#/Login'
            }
        },
        cball(e){
                for(var a of this.list){
                    a.cb=e.target.checked
                }
                this.allcb=e.target.checked
        },
        cb(e){
            var x=0
            var i=e.target.dataset.i
            this.list[i].cb=e.target.checked
            for(var a of this.list){
                if(a.cb==true){
                    x++;
                }
            }
            if(x==this.list.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
        },
        cart(){
            var url="http://127.0.0.1:3000/cartContent?uid="+this.uid
            if(this.uid){
                this.axios.get(url).then(result=>{
                    if(result.data.code==1){
                        for(var i of result.data.data){
                            i.cb=false
                        }
                        this.list=result.data.data
                    }else{
                        Toast(result.data.data)
                    }
                })
            }else{
                Toast("请登录后查看")
            }
        },
        delcart(e){
            var url="http://127.0.0.1:3000/deletecart"
            var id=e.target.dataset.id
            var idx=e.target.dataset.idx
            var params = new URLSearchParams();
            params.append('id',id);
            this.axios.post(url,params).then(result=>{
                Toast(result.data.msg)
            })
            this.list.splice(idx,1)
        },
        delshop(e){
            var ids='';
            for(var a of this.list){
                if(a.cb==true){
                    ids+=','+a.sid
                }
            }
            ids=ids.substring(1)
            var url='http://127.0.0.1:3000/Delshop?ids='+ids
            if(ids.length>0){
            this.axios(url).then(result=>{
                Toast(result.data.msg);             
            }) 
            }else{
                Toast('请先选择要删除的商品');
            }
            this.cart();
            setTimeout(function(){
                history.go(0)
            },500)
        },
        payshop(e){
            var ids='';
            for(var a of this.list){
                if(a.cb==true){
                    ids+=','+a.sid
                }
            }
            ids=ids.substring(1)
            var url='http://127.0.0.1:3000/Delshop?ids='+ids
            if(ids.length>0){
            this.axios(url).then(result=>{
                Toast("结算成功");             
            }) 
            }else{
                Toast('请先选择要结算的商品');
            }
            this.cart();
            setTimeout(function(){
                history.go(0)
            },500)
        }
    }
}
</script>


<style>

</style>
