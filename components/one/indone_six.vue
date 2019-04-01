<template>
    <div>
        <div class="mui-card" style="margin:10px 0">
			<div class="mui-card-header">领导关怀</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div v-for="(a,i) of imglist" :key="i">
                        <img :src="a">
                    </div>
				</div>
			</div>
			<div class="mui-card-footer">
				新绛中学系山西省首批重点中学，是一所有着光荣传统和辉煌业绩的百年名校。创办于1902年，
                历史悠久。在长期的办学实践中，以“教风严谨，学风刻苦，成绩卓越，特色鲜明”而誉满三晋，
                为高等院校和祖国建设培养了数以万计的优秀人才，树立了良好的社会形象，获得了“山西省示范高中”、
                “山西省文明学校”、“山西省特色中学”、“山西省传统体育项目学校”、“山西省集体二等功”、
                “全国群众体育先进集体”等一系列荣誉称号。
            </div>
		</div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            imglist:[]
        }
    },
    created(){
        this.img_list();
    },
    methods:{
        img_list(){
            this.axios.get('http://127.0.0.1:3000/imglist').then(result=>{
                this.imglist=result.data.data
            })
        }
    }
}
</script>



<style>
img{
    width:100%;
}
</style>
