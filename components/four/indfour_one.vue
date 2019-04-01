<template>
    <div>
        <div class="h3">学校党建</div>
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
            list:[
                {smtitle:"我校召开“学习省委书记王儒林同...",
                time:"发布时间：2015年02月09日 08:30",
                rout:"/indfour/two"}
            ]
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
