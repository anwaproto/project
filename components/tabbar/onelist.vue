<template>
    <div>
        <mt-header title="百年新中" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <img src="http://127.0.0.1:3000/img/xjzx/logo.png" style="width:100%;">
        <ul class="mui-table-view mui-grid-view mui-grid-9" style="background:#fff;">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(a,i) of list" :key="i">
                <router-link :to="a.rout">
                <!-- <span class="mui-icon mui-icon-home"></span> -->
                <div class="mui-media-body" style="padding-top:1px;height:17px;">{{a.content}}</div></router-link>
            </li>
        </ul>
        <router-view></router-view>
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
                    <span class="mui-icon mui-icon-phone mui-media-object mui-pull-left"></span>
					<div class="mui-media-body">
						联系电话
						<p class='mui-ellipsis'>0359-1234567</p>
					</div>
				</a>
			</li>
            <li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
                    <span class="mui-icon mui-icon-email mui-media-object mui-pull-left"></span>
					<div class="mui-media-body">
						投递邮箱
						<p class='mui-ellipsis'>xjzx@163.com</p>
					</div>
				</a>
			</li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return{
            list:[
                {rout:'/indone/one',content:'校园环境'},
                {rout:'/indone/two',content:'知名校友'},
                {rout:'/indone/three',content:'百年校史'},
                {rout:'/indone/four',content:'历任校长'},
                {rout:'/indone/five',content:'教师队伍'},
                {rout:'/indone/six',content:'领导关怀'}
            ]
        }
    }
}
</script>


<style>

</style>
