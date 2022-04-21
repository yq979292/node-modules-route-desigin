export default [
    {// 获取商品列表
        route:'/gooodlist', 
        method:'get',
        handle:()=>{} // 导入接口处理函数
    },{// 获取一级分类
        route:'/type_one',
        method:'get',
        handle:()=>{}
    },{// 注册
        route:'/register',
        method:'post',
        handle:()=>{}
    },{
        route:'/login',
        method:'post',
        handle:()=>{}
    },{
        route:'/logout',
        method:'get',
        handle:()=>{}
    },{
        route:'/detail/:Id',
        method:'post',
        handle:()=>{}
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