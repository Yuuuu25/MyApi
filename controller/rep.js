//导入模型

const{
    createModel,
    listModel,
    MylistModel
} = require(process.cwd() + '/models/rep')

//定义处理方法
//添加
const create =async (req,res) => {
    //res.send('this is  rep create')
    //1.接收数据
    let postData = req.body
    
    //2.过滤（忽略）
    //3.操作数据库
    let rs =await createModel(postData)
    //4.判断返回
    if(rs){
        res.send({
            meta:{
                state:200,
                msg:"添加成功"
            },
            data:null
        })
    }else{
        res.send({
            meta:{
                state:500,
                msg:"添加失败"
            },
            data:null
        })
    }
}
//列表
const index = async (req,res) => {
    // res.send("this is  index")
    //1.接受数据
    let getData = req.query
    console.log(getData)
    //2.过滤
    // let classify = getData.classify
    let skip = (parseInt(getData.pageno) - 1)*parseInt(getData.pagesize)
    //3.获取数据
    let data =await listModel(skip,parseInt(getData.pagesize) )
    //4.响应数据
    res.send({
        meta:{
            state:200,
            msg:"查询成功"
        },
        data:data 
    })
}

//列表
const Myindex = async (req,res) => {
    // res.send("this is  index")
    //1.接受数据
    let getData = req.query
    console.log(getData)
    //2.过滤

    let skip = (parseInt(getData.pageno) - 1)*parseInt(getData.pagesize)
    //3.获取数据
    let data =await MylistModel(skip,parseInt(getData.pagesize) )
    //4.响应数据
    res.send({
        meta:{
            state:200,
            msg:"查询成功"
        },
        data:data 
    })
}

//导出成员
module.exports = {
    create,
    index,
    Myindex
}