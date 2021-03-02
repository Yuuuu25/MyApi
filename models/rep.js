//一、导入模块
const mongoose = require('mongoose');
//二、连接数据库
const db = mongoose.createConnection('mongodb://localhost/reptlies',
{
    useNewUrlParser:true,useUnifiedTopology:true},err=>{
        if(err){
            console.log('-----------------------------------')
            console.log('数据库连接失败',err)
            console.log('-----------------------------------')
            return;
        }
    console.log('数据库连接成功')
})

//三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model = db.model('api',{
    classify:{type: String},
    name:{type: String},
    img:{type: String},
    starttime:{type: String},
    baibuurl:{type: String},
    maxtem:{type: Number},
    mintem:{type: Number},
    maxhum:{type: Number},
    minhum:{type: Number},
    space:{type: String},
    xl:{type: String},
    food:{type: String},
    
})
const list = db.model('mylist',{
    classify:{type: String},
    name:{type: String},
    img:{type: String},
    starttime:{type: String},
    baibuurl:{type: String},
    maxtem:{type: Number},
    mintem:{type: Number},
    maxhum:{type: Number},
    minhum:{type: Number},
    space:{type: String},
    xl:{type: String},
    food:{type: String},
    
})

//四、方法
//添加
const createModel = postData => {
    const insertObj = new list(postData)
    return insertObj.save()
    .then(res =>{
        console.log(res)
        return res
    })
    .catch(err => {
        console.log('插入失败'+err)
        return false
    })
}
//列表
const MylistModel = (skipNum,limitNum) => {
    return list.find().skip(skipNum).limit(limitNum)
    .then(res =>{
        console.log(res)
        return res
    })
    .catch(err => {
        console.log('查询失败'+err)
        return []
    })
}

//列表
const listModel = (skipNum,limitNum) => {
    return model.find().skip(skipNum).limit(limitNum)
    .then(res =>{
        console.log(res)
        return res
    })
    .catch(err => {
        console.log('查询失败'+err)
        return []
    })
}

module.exports = {
    createModel,
    listModel,
    MylistModel
}

