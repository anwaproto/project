<template>
    <div>
        <div class="mui-card" style="margin:10px 0">
			<div class="mui-card-header">历任校长</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div v-for="(a,i) of imglist" :key="i">
                        <img :src="a">
                    </div>
				</div>
			</div>
			<div class="mui-card-footer">
				现任校长：宁致义
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
