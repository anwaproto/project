<template>
    <div>
        <div class="h3">课改硕果</div>
        <div class="mui-card" style="width:100%;margin:0;">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<a href="http://127.0.0.1:8080/indthree/two#/indthree/oneone" style="font-size:14px;">
                        （1）
                        {{kgli.smtitle}}
					</a><br>
                    <span style="float:right;margin-top:5px;font-size:12px;">
                        {{kgli.time}}
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
            kgli:[]
        }
    },
    created(){
        this.kglist();
    },
    methods:{
        kglist(){
            var url = 'http://127.0.0.1:3000/kglist'
            this.axios.get(url).then(result=>{
                this.kgli = result.data.data[0]
            })
        }
    }
}
</script>



<style>

</style>
