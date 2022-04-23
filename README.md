# 工程设计详细文档

## 文件目录
~~~
|--app                           服务端所有代码  
   |--controls                   接口处理函数
      |--index.js                入口文件,将所有的接口处理函数模块 导入到入口中
      |--module                  接口处理函数模块,处理各种业务
         |--*.js                 业务模块
   |--DB                         数据库连接目录
      |--index.js                数据库连接文件
   |--repositories               发送数据请求的目录
      |--index.js                入口文件
      |--module                  数据库模块
         |-- *.js                处理表明
   |--route                      路由目录
      |--index.js                路由入口文件
      |--config.js               路由配置文件
   |--verticafiction             接口中需要验证的参数目录
      |--method                  验证数据方法模块集合
         |-- *.js                验证数据方法模块
      |--*.js                    验证数据的配置文件
   |--middle                     自定义的中间件
      |-- *.js                   中间件模块
      
|--public                        部署前端代码,前端代码将来发布这个文件下
|--uploads                       管理上传的讲台资源
|--app.js                        程序的入口文件
|--package.json                  npm工程的配置文件
|--REAME.md                      项目的说明文件
~~~


## respositories 

> 有几个表就创建几个js文件


### config.js

~~~js
import {  registerControl,loginControl,getDetalControl,getPageShopListControl,getSeachShopListControl,getTypeShopListControl,getTypeOneControl } from '../controls/index.js';
export default [
    {// 获取商品列表
        route:'/gooodlist', 
        method:'get',
        handle:getPageShopListControl// 导入接口处理函数
    },{
        route:'/gooodlistType', 
        method:'get',
        handle:getTypeShopListControl
    },{
        route:'/goodSearch', 
        method:'get',
        handle:getTypeShopListControl
    },{// 获取一级分类
        route:'/type_one',
        method:'get',
        handle:getSeachShopListControl
    },{// 注册
        route:'/register',
        method:'post',
        handle:registerControl
        // handle:()=>{
        //     console.log('handle run');
        // }
    },{
        route:'/login',
        method:'post',
        handle:loginControl
    },{ //????
        route:'/logout',
        method:'get',
        handle:()=>{}
    },{
        route:'/detail',
        method:'post',
        handle:getDetalControl
    },{// c端------购物车
        route:'/shopCarList',
        method:'get',
        handle:()=>{}
    },{
        route:'/updateShopCar',
        method:'get',
        handle:()=>{}
    },{
        route:'/addShopCar',
        method:'get',
        handle:()=>{}
    },{
        route:'/deletShopCar',
        method:'get',
        handle:()=>{}
    },{
        route:'/clearShopCar',
        method:'get',
        handle:()=>{}
    },{// 后台管理系统 --- 商品管理模块
        route:"/addShop",
        method:"post",
        handle:()=>{}
    },{
        route:"/updateShop",
        method:"post",
        handle:()=>{}
    },{
        route:"/deletShop",
        method:"post",
        handle:()=>{}
    },{
        route:"/uploads",
        method:"post",
        handle:()=>{}
    },{ // 后台管理-----用户管理模块
        route:"/userList",
        method:"post",
        handle:()=>{}
    },{
        route:"/addUer",
        method:"post",
        handle:()=>{}
    },{
        route:"/deletUser",
        method:"post",
        handle:()=>{}
    },{
        route:"/userInfo",
        method:"post",
        handle:()=>{}
    },{
        route:"/updateUserInfo",
        method:"post",
        handle:()=>{}
    },
]
~~~