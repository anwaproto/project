const express=require("express");
const router=express.Router();
const pool=require("../pool");
//:3000/index
router.get("/",(req,res)=>{
  var sql="select * from xz_index_product where seq_recommended!=0 order by seq_recommended";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
	res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
  })
})

module.exports=router;