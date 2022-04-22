import vertifyUser from '../../verticafiction/user.js';
import {
    userSQL
} from '../../respositories/index.js';
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export let register = async (req, res) => {
    console.log(req.fields);
    console.log('----------------------visiter registre---------------------');
    // 1: 获取请求餐宿
    let {
        username,
        password
    } = req.fields; // bug fileds --->fields
    // 2:验证参数是否合法
    // vertifyUser.username // 存放username 验证规则
    let usernameRules = vertifyUser.username;
    usernameRules.forEach((r) => {
        // username 是必填项目,并且没有username 
        if (r.required && !username) {
            res.json({
                code: 2002,
                message: r.message,
            })
            return
        }
        // 如果有 handle 函数; 正则验证username .
        // 正则验证不通过,响应不合法
        r.handle && !r.handle(username) && res.json({
            code: 2003,
            message: r.message
        });
        // if(r.handle){
        //    let res =  r.handle(username);
        //    if(!res){
        //        res.json({
        //         // ...
        //        })
        //    }
        // }
    })
    // 验证密码
    let pwdRule = vertifyUser.password;
    pwdRule.handle && !pwdRule.handle(password) && res.json({
        code: 2003,
        message: pwdRule.message
    });

    // 3:验证数据库中是否存在用户
    try {
        let result = await userSQL.querySelectUser(username);
        console.log('------------------return database----------------------------');
        console.log(result);
        if(result.length===0){
            // 4:用户不存在,添加用户
            let params = [username,password,1]
            let insertResult = await userSQL.queryInserUser(params)
            insertResult && res.json({
                code:2000,
                msg:'注册成功',
                insertResult, // 为了调试方便
            })
        }else{
            res.json({
                code:2002,
                msg:'用户已经注册'
            })
        }
    } catch (err) {
        console.log(err);
        res.json({
            code: 5000,
            msg: 'serve error'
        })
    }

}