<template>
    <div>
        <mt-header title="新中风采" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <img src="http://127.0.0.1:3000/img/xjzx/logo.png" style="width:100%;">
        
        <div class="mui-card" style="margin:0;">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					新绛中学系山西省首批重点中学，是一所有着光荣传统和辉煌业绩的百年名校。创办于1902年，历史悠久。在长期的办学实践中，以“教风严谨，学风刻苦，成绩卓越，特色鲜明”而誉满三晋，为高等院校和祖国建设培养了数以万计的优秀人才，树立了良好的社会形象，获得了“山西省示范高中”、“山西省文明学校”、“山西省特色中学”、“山西省传统体育项目学校”、“山西省集体二等功”、“全国群众体育先进集体”等一系列荣誉称号。
				</div>
			</div>
		</div>
        <div class="mui-card" style="margin:0;" id="img_p">
			<div class="mui-card-content">
				<div class="mui-card-content-inner" style="">
					<img src="http://127.0.0.1:3000/img/xjzx/a1.jpg">
					<img src="http://127.0.0.1:3000/img/xjzx/a2.jpg">
					<img src="http://127.0.0.1:3000/img/xjzx/a3.jpg">
				</div>
			</div>
		</div>

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
