<template>
    <div>
        <div class="mui-card" v-for="(a,i) of list" :key="i" style="margin:0;">
			<div class="mui-card-header" style="font-weight:bold;text-align:center;">{{a.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <img :src="a.img_url">
				</div>
			</div>
		</div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            list:[
                {
                    title:"我校召开“学习省委书记王儒林同志在全省学习",
                    img_url:"http://127.0.0.1:3000/img/xjzx/index3.jpg"
                },
                {
                    title:"2015年2月5日下午3:10，在学校第一会议室召开了“学习省委书记王儒林同志在全省学习讨论落实活动动员大会的讲话精神”的会议，参加会议的有学校全体党员和领导干部。",
                    img_url:"http://127.0.0.1:3000/img/xjzx/dj1.jpg"                   
                },
                {
                    title:"会议由文永保书记主持，首先，文书记总结、通报了前期工作；其次，薛居良副校长做了以“学习省委书记王儒林同志在全省学习讨论落实活动动员大会的讲话精神”为题目的辅导，要求党员干部认真学习市委、市政府去年以来各项顶层设计，完善新思路，明确新路径，解决新问题，开拓新局面；最后，参会人员观看了反腐倡廉的警示片。",
                    img_url:"http://127.0.0.1:3000/img/xjzx/dj2.jpg",
                },
            ]
        }
    }
}
</script>


<style>

</style>
