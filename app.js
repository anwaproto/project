//引入两个模块 mysql express
const mysql=require('mysql')
const express=require('express')
const session=require("express-session")
//引入跨域模块cors
const cors=require('cors')
//创建连接池
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'nx'
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
server.get("/swp",(req,res)=>{
    var rows = [
        {id:1,img_url:"http://127.0.0.1:3000/img/banner1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/banner3.jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/banner4.jpg"},
        {id:5,img_url:"http://127.0.0.1:3000/img/banner5.jpg"},
    ]
    res.send({code:1,data:rows})
})


//首页导航
server.get("/gridlist",(req,res)=>{
    var rows = [
        {id:1,name:"芝士口味",rout:"/"},
        {id:2,name:"雪域口味",rout:"/cakexy"},
        {id:3,name:"慕斯口味",rout:"/cakems"},
        {id:4,name:"巧克力味",rout:"/cakeqkl"},
        {id:5,name:"鲜果口味",rout:"/cakexg"},
        {id:6,name:"奶油口味",rout:"/cakeny"},
    ]
    res.send({code:1,data:rows})
})


//首页商品
server.get("/zslist",(req,res)=>{
    var fid = req.query.fid
    var sql = "select c.cid,c.name,c.price,p.md from nx_cake c,nx_cake_pic p where c.cid=p.cake_id &&c.family_id=?"
    pool.query(sql,[fid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})


//商品详情
server.get("/cakeinfo",(req,res)=>{
    var cid = req.query.cid
    var sql = "select c.title,c.cid,c.name,c.price,p.md from nx_cake c,nx_cake_pic p where c.cid=p.cake_id && c.cid=?"
    pool.query(sql,[cid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})


//登录
server.post("/Login",(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    var sql = "select uid from nx_user where uname = ? && upwd = ?"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名密码错误"})
        }else{
            res.send({code:1,data:result})
        }
    })
})


//购物车数量
server.get("/shopCart",(req,res)=>{
    var uid = req.query.uid
    var sql = "select product_id from nx_shopping_cart where user_id = ?"
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})


//添加到购物车
server.post("/addCart",(req,res)=>{
    var uid = req.body.uid
    var cid = req.body.cid
    var count = req.body.count
    var sql1 = "INSERT INTO nx_shopping_cart (sid,user_id,product_id,count) VALUES (NULL,?,?,?);"
    var sql2 = "select count from nx_shopping_cart where user_id = ? && product_id = ?"
    var sql3 = "update nx_shopping_cart set count = count+? where user_id=? && product_id=?"
    pool.query(sql2,[uid,cid],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            pool.query(sql1,[uid,cid,count],(err,result)=>{
                if(err)throw err;
                if(result.affectedRows>0){
                    res.send({code:1,msg:"添加成功"})
                }else{
                    res.send({code:-1,msg:"添加失败"})
                }
            })
        }else{
            pool.query(sql3,[count,uid,cid],(err,result)=>{
                if(err)throw err;
                if(result.affectedRows>0){
                    res.send({code:1,msg:'添加成功'})
                }else{
                    res.send({code:-1,msg:"添加失败"})
                }
            })
        }
    })
})


//购物车详情
server.get("/cartContent",(req,res)=>{
    var uid = req.query.uid
    var sql = "select c.title,c.cid,c.name,c.price,p.md,s.count,s.sid from nx_cake c,nx_cake_pic p,nx_shopping_cart s where c.cid=p.cake_id && p.cake_id = s.product_id &&s.user_id = ?"

    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,data:"购物车为空"})
        }else{
            res.send({code:1,data:result})
        }
    })
})


//删除购物车商品
server.post("/deletecart",(req,res)=>{
    var id=req.body.id;
    var sql="delete from nx_shopping_cart where sid=?;"
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:'删除成功'})
        }else{
            res.send({code:-1,msg:'删除失败'})
        }
    })
})


//删除多行购物车
server.get('/Delshop',(req,res)=>{
    var ids=req.query.ids
    var sql="delete from nx_shopping_cart where sid in ("+ids+")"
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:'删除成功'})
        }else{
            res.send({code:-1,msg:'删除失败'})
        }
    })
})

//注册
server.post("/reg",(req,res)=>{
    var uname = req.body.uname
    var upwd = req.body.upwd
    if(uname.length<6 || uname.length>11){
        res.send({code:-1,msg:"用户名必须在6-11位之间"})
    }else{
    if(upwd.length<6 || upwd.length>11){
        res.send({code:-1,msg:"密码必须在6-11位之间"})
    }else{
    var sql1 = "select * from nx_user where uname = ?"
    var sql2 = "INSERT INTO nx_user (uid,uname,upwd,email,phone,avatar,user_name,gender) VALUES (NULL,?,?,NULL,NULL,NULL,NULL,NULL);"
    pool.query(sql1,[uname],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            pool.query(sql2,[uname,upwd],(err,result)=>{
                if(err)throw err;
                if(result.affectedRows>0){
                    res.send({code:1,msg:"注册成功"})
                }else{
                    res.send({code:-1,msg:"注册失败"})
                }
            })
        }else{
            res.send({code:-1,msg:"用户名被占用"})
        }
    })
}}
})