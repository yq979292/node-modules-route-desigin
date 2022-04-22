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