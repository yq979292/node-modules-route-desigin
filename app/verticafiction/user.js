import {verityfiMethod } from './method/userTest.js'
export default {
    username:[
        {
            required:true,
            message:'用户名必须填写'
        },{
            message:"参数格式不合法", // 提示信息
            handle:verityfiMethod,
        }
    ],
    password:{
        message:'参数格式不合法',
        handle:verityfiMethod
    }
}