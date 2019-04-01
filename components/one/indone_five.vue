<template>
    <div>
        <div class="mui-card" style="margin:10px 0">
			<div class="mui-card-header">教师队伍</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div v-for="(a,i) of imglist" :key="i">
                        <img :src="a">
                    </div>
				</div>
			</div>
			<div class="mui-card-footer">
				学校现共72个教学班，在校学生5000余人。现有教职工400余名，专任教师308名。
                其中特级教师2名，高级教师42名，一级教师76名，省级学科带头人2名，省级骨干教师4名，
                省级教学能手3名，市级学科带头人8名，市级骨干教师16名，市级教学能手10名，研究生2名，
                本科学历288名，完成研究生课程进修的19名。
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
