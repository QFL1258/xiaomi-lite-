//使用express构建web服务器
const express = require('express');
const pool=require("./pool");
const bodyParser = require('body-parser');
//加载跨域访问组件
const cors=require("cors");
//加载 加载第三方模块 express-sessionStorage
const session=require("express-session");
var app = express();
var server = app.listen(3000);
//__dirname 当前程序所属目录绝对路径
app.use(express.static(__dirname+"/public"))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret:"128位随机字符", //安全字符串
  resave:false,            //请求保存
  saveUninitialized:true,  //初始化保存
  cookie:{
    maxAge:1000*60*60*24
  }
}))
app.use(cors({
  origin:["http://192.168.1.32:8080/","http://localhost:8080"],
  credentials:true //要求客户端必须携带cookie
}))
//功能1.轮播图
app.get("/imagelist",(req,res)=>{ 
  var nid=req.query.nid;
  var img_url=req.query.img_url;
  var sql =" SELECT `nid`, `img_url` FROM `imagelist` ";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//功能2.导航
app.get("/navlist",(req,res)=>{ 
  var sql =" SELECT `nid`, `img_url`, `nav_name` FROM `navlist` ";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//功能3.product_1
app.get("/product_1",(req,res)=>{ 
  var sql =" SELECT `nid`, `img_url`, `title`, `info` FROM `product_1` ";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//功能4.every_day
app.get("/every_day",(req,res)=>{ 
  var sql =" SELECT `nid`, `img_url`, `title`, `info`, `money_now`, `money_list` FROM `every_day` ";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//功能:上传头像
//1:加载所需模块 express;fs;multer
//fs fileSystem 文件系统模块
//操作文件:创建/删除/移动文件
const fs = require("fs");
const multer = require("multer");
//2:创建multer对象指定上传文件目录
//指定上传文件目录
var upload = multer({dest:"upload/"});
//3:创建处理上传请求 /upload 上传单个文件
//upload.single() 一次上传一张图片
//mypic           指定上传文件表单 name="mypic"
app.post("/upload",upload.single("mypic"),(req,res)=>{
 //4:获取上传文件大小  拒绝超过2MB文件 (字节)
  var size = req.file.size/1000/1000;
  if(size > 2){
    res.send({code:-1,msg:"上传图片过大 超过2MB"});
    return;
  }
 //5:获取上传文件类型  图片
 //image/gif image/png image/jpg  text/css 
 var type = req.file.mimetype;
 var i2 = type.indexOf("image");
 if(i2==-1){
   res.send({code:-2,msg:"上传只能是图片"});
   return;
 }
 //6:创建新文件名 1.jpg  191283874393.jpg
  var src = req.file.originalname;
  var fTime = new Date().getTime();
  var fRand = Math.floor(Math.random()*9999);
  var i3 = src.lastIndexOf(".");
  var suff = src.substring(i3,src.length);
  var des = "./upload/"+fTime+fRand+suff;
  console.log(des);
 //7:将临时文件移动upload目录下
  fs.renameSync(req.file.path,des);
 //8:返回上传成功信息
 //9:将上传图片新名称 ./upload/aaaaa.jpg
 //保存数据库
  res.send({code:1,msg:"图片上传成功"});
});

// /*最新上架*/
//  app.get("/roost",(req,res)=>{
//    var sql=" SELECT `nid`, `img_url`, `title`, `name`, `money` FROM `roost` "
//    pool.query(sql,(err,result)=>{
//      if(err) throw err;
//      res.send(result)
//    })
//  })
//  /*本月热销*/ 
//  app.get("/sell",(req,res)=>{
//   var sql=" SELECT `nid`, `img_url`, `title`, `name`, `money`, `sell` FROM `sell` "
//   pool.query(sql,(err,result)=>{
//     if(err) throw err;
//     res.send(result)
//   })
// })
// /*销售总榜*/
// app.get("/well",(req,res)=>{
//  var pno = req.query.pno;          //页码
//  var pageSize = req.query.pageSize;//页大小
//  //2:设置默认值 1 7
//  if(!pno){pno = 1}
//  if(!pageSize){pageSize=7}
//  //3:创建正则表达式验证用户输入验证
//  var reg = /^[0-9]{1,3}$/;
//  //4:如果错出停止函数运行
//  if(!reg.test(pno)){
//     res.send({code:-1,msg:"页编格式不正确"});
//     return;
//  }
//  if(!reg.test(pageSize)){
//     res.send({code:-2,msg:"页大小格式不正确"});
//     return;
//  }
//  var progress = 0;
//  var obj = {code:1};
//  obj.uname = req.session.uname;
//  //5:创建sql1 查询总记录数   严格区分大小写
//  var sql = "SELECT count(nid) AS c FROM well";
//  pool.query(sql,(err,result)=>{
//    if(err)throw err;
//    var pageCount = Math.ceil(result[0].c/pageSize);
//    progress+=50; 
//    obj.pageCount = pageCount;
//    if(progress==100){
//      res.send(obj);
//    }
//  });
//  //6:创建sql2 查询当前页内容 严格区分大小写
//  var sql =" SELECT `nid`, `img_url`, `title`, `name`, `sell`, `cattle` FROM `well` LIMIT ?,? "
//  var offset = parseInt((pno-1)*pageSize);
//      pageSize = parseInt(pageSize);
//  pool.query(sql,[offset,pageSize],(err,result)=>{
//    if(err)throw err;
//    progress+=50;
//    obj.data=result;
//    if(progress==100){
//      res.send(obj);
//    }
//  })
// });
// /*music*/
// app.get("/music",(req,res)=>{
//   var nid=req.query.nid;
//   var sql="SELECT `nid`, `m_music` FROM `music` WHERE nid=?";
//   pool.query(sql,[nid],(err,result)=>{
//     if(err) throw err;
//     res.send(result);
//   })
// })





