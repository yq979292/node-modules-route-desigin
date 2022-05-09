
export let getGoodPageList =(req,res)=>{
    // 4-1. 获取请求参数page
    let { page } = req.query;

    // 4-2 验证参数
    //  1：必填
    //  2：数字
    //  3：
    if(!page){
        // 
        res.json({
            // 没有参数
            code:2003,
            message:'page参数必须填写'
        })
        return
    }
    if(!(/\d+/.test(page))){
        res.json({
            code:2003,
            message:'参数格式不合法'
        })
        return
    }
    console.log('--------参数验证通过-------------');
    // 测试:启动服务:postman 输入地址 方式 参数page
    // 测试两个规则

    // 3:向数据库发送获取分页商品的请求
    

}

// 流水线第三步
// 1: getGoodPageList 导入 controls/index.js 
// -----> 为了统一管理接口处理函数,
// 2: route/config.js 导入 controls/index.js 
// 3: 使用getGoodPageList