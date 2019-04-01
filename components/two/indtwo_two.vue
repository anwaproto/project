<template>
    <div>
        <div class="mui-card" v-for="(a,i) of list" :key="i" style="margin:15px 0;">
			<div class="mui-card-header" style="font-weight:bold;">{{a.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <img :src="a.img_url">
				</div>
			</div>
			<div class="mui-card-footer">{{a.content}}</div>
		</div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.news();
    },
    methods:{
        news(){
            var url = "http://127.0.0.1:3000/newlist"
            this.axios.get(url).then(result=>{
                this.list=result.data.data
            })
        }
    }
}
</script>


<style>

</style>
