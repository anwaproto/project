<template>
    <div class="app-home">
        <img src="http://127.0.0.1:3000/img/xjzx/logo.png" style="width:100%;">
        <!-- 轮播图  mint-ui -->
        <mt-swipe :aoto="3000">
            <mt-swipe-item v-for="(a,x) of s_img" :key="x">
                <img :src="a">
            </mt-swipe-item>      
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9" style="background:#fff;">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(a,i) of list" :key="i">
                <router-link :to="a.rout">
                <!-- <span class="mui-icon mui-icon-home"></span> -->
                <div class="mui-media-body" style="padding-top:1px;height:17px;">{{a.content}}</div></router-link>
            </li>
        </ul>
        <div class="mui-card" style="margin:10px 0" v-for="(a,i) of list" :key="i">
			<div class="mui-card-header">{{a.content}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<img :src="a.img_url" style="width:100%;">
				</div>
			</div>
			<div class="mui-card-footer">
                <span>
                    {{a.title}}
                </span>
                <router-link :to="a.rout">
                    查看详情&gt;&gt;    
                </router-link> 
            </div>
		</div>      
    </div>
</template>


<script>
export default {
    data(){
        return{
            s_img:{},
            list:[]
        }
    },
    created(){
        this.getswipe();
        this.grid();
    },
    methods:{
        getswipe(){
            this.axios.get("http://127.0.0.1:3000/swipelist").then(result=>{
            this.s_img=result.data.data
            })
        },
        grid(){
            this.axios.get("http://127.0.0.1:3000/index").then(result=>{
                this.list=result.data.data
            })
        }
    }
}
</script>



<style>
.app-home .mint-swipe{
    height:200px;
}
.app-home .mint-swipe img{
    width:100%;
    height:200px;
}
.app-home ul li a img{
    width:60px;
    height:60px;
}
</style>
