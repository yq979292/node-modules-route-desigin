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