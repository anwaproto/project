<template>
    <div>
        <mt-header title="课改先锋" fixed>
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
                {rout:"/indthree/one",content:"课改硕果"},
                {rout:"/indthree/two",content:"课改交流"},
                {rout:"/indthree/three",content:"学生课改"}
            ]
        }
    }
}
</script>


<style>

</style>
