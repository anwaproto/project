//引入两个模块 mysql express
const mysql=require('mysql')
const express=require('express')
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


//配置第三方中间件
const bodyParser=require('body-parser')
//配置时json数据是否自动转换
server.use(bodyParser.urlencoded({extended:false}))

//托管静态资源在public文件夹下
server.use(express.static('public'));


//登录
server.get("/login",(req,res)=>{
    var uname=req.query.uname
    var upwd=req.query.upwd
    var sql='select uid from nx_user where uname=? && upwd=?'
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        res.writeHead(200,{
            "Access-Control-Allow-Origin":"*"
          });
          res.write(JSON.stringify(result));
          res.end();
        }
    )
})

//注册
server.get('/register',(req,res)=>{
    var uname=req.query.uname
    var upwd=req.query.upwd
    var phone=req.query.phone
    var email=req.query.email
    var sql1='select uid from nx_user where uname=?'
    var sql2='INSERT INTO nx_user (uid, uname, upwd, email, phone, avatar, user_name, gender) VALUES (NULL,?,?,?,?, NULL, NULL, NULL);'
    pool.query(sql1,[uname],(err,result)=>{
        if(err)throw err;
        console.log(result)
        if(result.length>0){
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"*"
              });
              res.write(JSON.stringify("用户名被占用"));
              res.end();
        }else{
            pool.query(sql2,[uname,upwd,email,phone],(err,result)=>{
                if(err)throw err;
                res.writeHead(200,{
                    "Access-Control-Allow-Origin":"*"
                  });
                  res.write(JSON.stringify(result));
                  res.end();
            })
        }
    })
})