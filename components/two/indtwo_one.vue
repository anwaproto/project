<template>
    <div>
        <div class="h3">动态新闻</div>
        <div class="mui-card" style="width:100%;margin:0;" v-for="(a,i) of list" :key="i">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<router-link :to="a.rout" style="font-size:14px;">
                        （{{i+1}}）
                        {{a.smtitle}}
					</router-link><br>
                    <span style="float:right;margin-top:5px;font-size:12px;">
                        {{a.time}}
                    </span>
				</div>
			</div>
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
.h3{
    background:#fff;
    padding:15px;
    text-align: center;
    margin-bottom:0;
    font-weight:bold;
    font-size:20px;
    border-bottom:2px solid #000;
}
</style>
