# 工程设计详细文档

## 文件目录

```
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
```

## respositories

> 有几个表就创建几个 js 文件

## 写一个接口基本思路

我要写什么接口

> - 1.要知道接口成功,返回什么数据
> - 2.需要哪些内容才能帮你返回数据

- 1.接口地址
- 2.接口方法是什么
- 3.接口处理参数什么时候触发
- 4.怎么获取请求参数
- 5.参数的验证规则是什么
  - 5.1 怎么将参数验证变为独立模块(因为每个接口中参数都需要验证)
    5.2 模块怎么设计
    5.3 怎么在 controls 中使用这个模块
- 6.不满足规则;做什么处理
- 7.满足规则做什么处理
- 8.怎么想数据库发送请求;请求内容是什么
  - 8.1 怎么将数据请求的,变为独立模块(每个接口都需要连接数据库)
    8.2 怎么数据库业务设计独立的模块(模块中有哪些内容,每个表示什么意思)
    8.3 怎么建立 controls 与数据库的联系?
    8.4 怎么在 controls 中使用这个模块
- 9.数据库有了响应后,做什么处理

### 目标

> 在会写接口的基础上,会使用模块工程

## goodPageList 接口

> 获取分页商品列表

- 1 第一步

```js
    {//
        route: '/goodPageList',
        method: 'get',
        handle: () => { console.log('goodPageList') }//1--> 被修改
    }
```

// 测试无效

- 2.第二步
  让配置对象变为接口 app/route/index.js

```js
// 验证是否完成第二步功能(关闭权限)
// 启动服务;访问接口 看handle函数是否被执行
// ---> 终端输出 good List run --->test 成功
app.routes('/api' + routes[2].route, routes[2].method, routes[2].handle)
```

> 证明接口已经形成,但没有处理业务

- 3 将handle 赋值,提取 **控制器模块** (主要编写接口处理函数)
  - 3.1 新建good.js 并编写函数`getGoodPageList`
  - 3.2 将`getGoodPageListControl`导入`controls/index.js`,并导出新的变量`getGoodPageListControl,`
  - 3.3 在`config.js`导入`getGoodPageListControl` 并使用

```
  测试过程
  1: 启动服务
  2: postman 访问 看终端是否有'good list run'
```
**处理具体接口业务:分几步**
```
1: 获取参数page
2: 验证参数 page
3: 根据page 向数据库发送请求
4: 数据库响应后对客户单做出响应
```

- 4 考虑**如何获取参数**(定义了接口请求参数)
  - req.query
  - req.params
  - req.fields

- 5: 验证参数



- 6: 不满足规则;做什么处理


- 7: 满足规则做什么

- 8: 怎么向数据库发送请求;请求内容是什么
  - 8.1 怎么将数据请求的,变为独立模块(每个接口都需要连接数据库)
  > DB/index.js 封装好了
    8.2 怎么数据库业务设计独立的模块(模块中有哪些内容,每个表示什么意思)
    ```js
    //  respositories/goods.js
    
    ```
    8.3 怎么建立 controls 与数据库的联系?
    8.4 怎么在 controls 中使用这个模块

### config.js

``` js
import {
  registerControl,
  loginControl,
  getDetalControl,
  getPageShopListControl,
  getSeachShopListControl,
  getTypeShopListControl,
  getTypeOneControl,
} from '../controls/index.js'
export default [
  {
    // 获取商品列表
    route: '/gooodlist',
    method: 'get',
    handle: getPageShopListControl, // 导入接口处理函数
  },
  {
    route: '/gooodlistType',
    method: 'get',
    handle: getTypeShopListControl,
  },
  {
    route: '/goodSearch',
    method: 'get',
    handle: getTypeShopListControl,
  },
  {
    // 获取一级分类
    route: '/type_one',
    method: 'get',
    handle: getSeachShopListControl,
  },
  {
    // 注册
    route: '/register',
    method: 'post',
    handle: registerControl,
    // handle:()=>{
    //     console.log('handle run');
    // }
  },
  {
    route: '/login',
    method: 'post',
    handle: loginControl,
  },
  {
    //????
    route: '/logout',
    method: 'get',
    handle: () => {},
  },
  {
    route: '/detail',
    method: 'post',
    handle: getDetalControl,
  },
  {
    // c端------购物车
    route: '/shopCarList',
    method: 'get',
    handle: () => {},
  },
  {
    route: '/updateShopCar',
    method: 'get',
    handle: () => {},
  },
  {
    route: '/addShopCar',
    method: 'get',
    handle: () => {},
  },
  {
    route: '/deletShopCar',
    method: 'get',
    handle: () => {},
  },
  {
    route: '/clearShopCar',
    method: 'get',
    handle: () => {},
  },
  {
    // 后台管理系统 --- 商品管理模块
    route: '/addShop',
    method: 'post',
    handle: () => {},
  },
  {
    route: '/updateShop',
    method: 'post',
    handle: () => {},
  },
  {
    route: '/deletShop',
    method: 'post',
    handle: () => {},
  },
  {
    route: '/uploads',
    method: 'post',
    handle: () => {},
  },
  {
    // 后台管理-----用户管理模块
    route: '/userList',
    method: 'post',
    handle: () => {},
  },
  {
    route: '/addUer',
    method: 'post',
    handle: () => {},
  },
  {
    route: '/deletUser',
    method: 'post',
    handle: () => {},
  },
  {
    route: '/userInfo',
    method: 'post',
    handle: () => {},
  },
  {
    route: '/updateUserInfo',
    method: 'post',
    handle: () => {},
  },
]
```
