<template>
    <div>
        <div class="mui-card" style="margin:10px 0">
			<div class="mui-card-header">百年校史</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div v-for="(a,i) of imglist" :key="i">
                        <img :src="a">
                    </div>
				</div>
			</div>
			<div class="mui-card-footer">
				新绛中学始建于1902年，其前身为清代东雍书院改建的绛州中学堂，
                是全省最早兴办的中学之一。1912年 更名为 新绛县中学校，1918年 更名为 绛垣中学，
                1944年 更名为 河东道立农科职业学校，1945年 更名为 山西省立新绛中学，
                1947年新绛、稷山、河津、汾城四县中学合并为吕梁第十中学，校址设在新绛县城贡院巷旧址，
                1949年 吕梁十中 改称 晋绥十中，1949年 改称 山西省立新绛中学，1955年 更名为 
                山西省立新绛第一中学，1959年 改称 山西省运城市新绛中学。
                1961年 1月1日 正式定名为 山西省新绛中学。
                1962年 被确定为山西省首批重点中学，1980年 重新确定为山西省重点中学。
                2007年9月以优异成绩顺利通过了省级示范高中复查验收，2008年1月挂牌，
                标志着新绛中学已进入崭新的历史阶段和更高的发展层面
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
