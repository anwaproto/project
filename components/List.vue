<template>
    <div>
        <mt-header title="无敌是多么多么寂寞"></mt-header>
        <h1>用户列表</h1>
        <ul>
            <li v-for="(e,i) of emp" :key="i">{{e.id}}:{{e.name}}</li>
        </ul>
        <mt-button>登录按钮</mt-button>
    </div>
</template>
<script>
export default {
    data (){
        return {
            emp:[{id:1,name:'tom'},
             {id:2,name:'jerry'},
             {id:3,name:'davi'}
            ]
        }
    }
}
</script>
<style>

</style>
