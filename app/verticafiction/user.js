import {verityfiMethod } from './method/userTest.js'
export default {
    // key 表示内验证参数, 一个规则赋值对象 ;多个规则赋值数组
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