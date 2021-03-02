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
const model = db.model('apis',{
    classify:{type: String,default:'巴西龟'},
    maxtem:{type: Number},
    img:{type: String}
})

//四、创建实例操作（CURD）

//增------------------
// const insertObj = new model({
//     classify:'巴西龟',
//     maxtem:'32',
//     img:'http://5b0988e595225.cdn.sohucs.com/images/20170829/d0f0b2c07fe841489999573f64aaeb5d.jpeg'
// })
// //方法1：
// // insertObj.save((err) => db.close())

// //方法2（推荐）：
// insertObj.save()
// .then(res =>{
//     console.log(res)
//     return res
// })
// .catch(err => {
//     console.log('插入失败'+err)
//     return false
// })

// //删 ------------------------
// model.deleteOne({})
// .then(res =>{
//     return res.deletedCount
// })
// .catch(err =>{
//     console.log('删除失败'+err)
//     return false
// })

// //改------------------------
// model.updateOne({},{})
// .then(res =>{
//     return res.nModified
// })
// .catch(err =>{
//     console.log('修改失败'+err)
//     return false
// })
//读------------------------
model.findOne({})
.then(res =>{
    console.log(res)
    return res
})
.catch(err =>{
    console.log('修改失败'+err)
    return false
})