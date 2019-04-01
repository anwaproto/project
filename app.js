//引入两个模块 mysql express
const mysql=require('mysql')
const express=require('express')
//引入跨域模块cors
const cors=require('cors')
//创建连接池
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'xz'
})
//创建一个express对象
var server=express();
//监听端口
server.listen(3000);
//配置跨域请求
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}))


//配置第三方中间件
const bodyParser=require('body-parser')
//配置时json数据是否自动转换
server.use(bodyParser.urlencoded({extended:false}))

//托管静态资源在public文件夹下
server.use(express.static('public'));



//首页轮播
server.get('/swipelist',(req,res)=>{
    var rows = [
        "http://127.0.0.1:3000/img/xjzx/a1.jpg",
        "http://127.0.0.1:3000/img/xjzx/a2.jpg",
        "http://127.0.0.1:3000/img/xjzx/a3.jpg"
      ];
      res.send({code:1,data:rows});
});


//首页菜单
server.get('/index',(req,res)=>{
    var list = [
        {nid:1,content:"百年新中",rout:'/indone/one',img_url:'http://127.0.0.1:3000/img/xjzx/a1.jpg',title:"百年传承,育人为本"},
        {nid:2,content:"新中动态",rout:'/indtwo/one',img_url:'http://127.0.0.1:3000/img/xjzx/index1.jpg',title:"新绛中学“微课程编制”动员大会..."},
        {nid:3,content:"课改先锋",rout:'/indthree/one',img_url:'http://127.0.0.1:3000/img/xjzx/index2.jpg',title:"我校师生获得省教育资源公共服务..."},
        {nid:4,content:"学校党建",rout:'/indfour/one',img_url:'http://127.0.0.1:3000/img/xjzx/index3.jpg',title:"我校召开“学习省委书记王儒林同..."},
        {nid:5,content:"新中风采",rout:'/indfive',img_url:'http://127.0.0.1:3000/img/xjzx/a2.jpg',title:"老城一道靓丽的风景线"},
        {nid:6,content:"信息平台",rout:'/indsix',img_url:'http://127.0.0.1:3000/img/xjzx/a3.jpg',title:""}
    ]
    res.send({code:1,data:list})
})

//图片列表
server.get('/imglist',(req,res)=>{
    var list=[
        "http://127.0.0.1:3000/img/xjzx/a2.jpg",
        "http://127.0.0.1:3000/img/xjzx/a1.jpg",
        "http://127.0.0.1:3000/img/xjzx/a3.jpg"
    ]
    res.send({code:1,data:list})
})

//新中动态
server.get("/newlist",(req,res)=>{
    var list = [
        {
            smtitle:"新绛中学“微课程编制”动员大会...",
            title:"新绛中学“微课程编制”动员大会召开",
            img_url:"http://127.0.0.1:3000/img/xjzx/index1.jpg",
            content:"11月12日，我校在二楼阶梯教室召开了全体教师大会。宁校长，分管教学的权校长以及教务处李主任出席会议。宁校长传达了省教育厅会议精神，就我校录制微课作了动员和安排，要求全体教师认真对待，做好此项工作。宁校长还就微课“如何引导学生提出并解决问题”做了详细的解释，重点讲了四个方面的内容：1，把“课标”任务化；2，让学生自己陈述问题，把问题“说清楚”；3，让学生展示问题的解决过程；4，展示课上要有主持小组，学生展示结束语句。宁校长的讲话使我校的展示课再上了一个层次，每一节展示课都有问题，也都能解决问题，教师和学生都能天天进步。",
            time:"发布时间：2015年02月09日 08:35",
            rout:"/indtwo/two"
        }
    ]
    res.send({code:1,data:list})
})


//课改动态
server.get("/kglist",(req,res)=>{
    var list = [
        {
            smtitle:"我校师生获得省教育资源公共服务...",
            title:"我校师生获得省教育资源公共服务平台优秀空间",
            img_url:"http://127.0.0.1:3000/img/xjzx/index2.jpg",
            content:"随着山西教育资源公共服务平台空间近两个月的推广工作，我校作为山西教育资源公共服务平台首批试点校表现出了很大的热情，教师们学会了在平台中备课、布置作业、网络教研，学生们在平台中实现了预习、在线作业，并积极地创建学习圈、兴趣圈，与小伙伴分享学习心得，分享生活趣事。通过校领导积极配合组织，学校教师、学生积极参与，我校多名教师和学生被选中为“山西教育资源公共服务平台优秀空间评选名单(第一批)”中。",
            time:"发布时间：2015年01月28日 17:01",
            rout:"/indthree/oneone"
        },
        {
            img_url:"http://127.0.0.1:3000/img/xjzx/kg1.jpg",
            title:" "
        },
        {
            img_url:"http://127.0.0.1:3000/img/xjzx/kg2.jpg",
            title:'生物教师范佩婷荣获“优秀教师”二等奖。'
            // title:" 随着山西教育资源公共服务平台空间近两个月的推广工作，我校作为山西教育资源公共服务平台首批试点校表现出了很大的热情，教师们学会了在平台中备课、布置作业、网络教研，学生们在平台中实现了预习、在线作业，并积极地创建学习圈、兴趣圈，与小伙伴分享学习心得，分享生活趣事。通过校领导积极配合组织，学校教师、学生积极参与，我校多名教师和学生被选中为“山西教育资源公共服务平台优秀空间评选名单(第一批)”中。"
        },
        {
            img_url:"http://127.0.0.1:3000/img/xjzx/kg3.jpg",
            title:"英语教师朱志宏的“新中circle”荣获“优秀圈子”一等奖。语文教师闫云录的“闫云录的个人工作室”荣获“优秀圈子”三等奖。"
        },
        {
            img_url:"http://127.0.0.1:3000/img/xjzx/index2.jpg",
            title:"张涵同学荣获“优秀学生”一等奖。王佳蓓同学荣获“优秀学生”二等奖。柳玉彤同学和郭蓉蓉同学荣获“优秀学生”三等奖。"
        }
    ]
    res.send({code:1,data:list})
})