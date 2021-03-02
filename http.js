//http.js定义路由
//1.引入express模块
const express = require('express')
//2.创建app对象,通过语法express（） 底层原理http模块的createServer

const app = express()
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extende:true}));
app.use(bodyparser.json())
//3.路由，语法app.HTTP请求方式（路径，回调函数）


app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
    else
      next();
  });
  

app.get('/',(req,res) => {  //request response
    //send是express用来相应数据
    res.header("Access-Control-Allow-Origin","*")
    res.send('hello,xuuuuuu')

})

const repController = require(process.cwd()+'/controller/rep')
//添加
app.post('/myrep',repController.create)
//列表
app.get('/rep',repController.index)
//列表
app.get('/myrep',repController.Myindex)


//4.启动服务监听端口
//app.listen(3000)
app.listen(3000,() =>{
    console.log(' ')
})