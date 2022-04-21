import express from "express";
import formidable from 'express-formidable';
import JWT from 'jsonwebtoken'
import path from 'path'
import route from './app/route/index.js'
// const path = require('path')

const app = express();

// 部署前端项目文件
app.use(express.static(path.resolve('./public')))
// bug:esmodule 没有__dirname 
// 处理资源目录静态  
app.use('/uploads',express.static(path.resolve('./uploads')))

app.use(formidable({
    keepExtensions:true, // 保留文件猴嘴
    uploadDir:path.resolve('./upload'), // 设置图片上传路径
    multiples:true, // 支持多张图片上传
}))

app.use('/api',route(app)) // 挂载所有接口
app.listen(9527,()=>{
    console.log(9527);
})