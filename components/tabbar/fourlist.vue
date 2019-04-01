<template>
    <div>
        <mt-header title="学校党建" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <img src="http://127.0.0.1:3000/img/xjzx/logo.png" style="width:100%;">
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

        }
    }
}
</script>


<style>

</style>
