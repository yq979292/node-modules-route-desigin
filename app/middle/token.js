import jwt from 'jsonwebtoken';
import fs from 'fs'
export default ()=>{

    // 获取私有密钥
    let getPrivateKey = ()=>{
        let privateKey = fs.readFileSync('../../private.key')
        privateKey = String(privateKey)
        return privateKey
    }
    // 2: 验证
    return (req,res,next)=>{
        let url = req.url;
        if(url == '/api/login' || url === '/api/register'){
            if(url == '/api/login'){
                // 如果是登录解接口,将 sign 函数 添加到响应保温中. 
                // 因为在登录接口处理中不想导入 jsonwebtoken 了
                res.jwt.sign = jwt.sign;
            }
            next();
        }else{
            // 验证token
            let token = req.headers.shop_token;
            let key = getPrivateKey();
            jwt.verify(token,key,(err,data)=>{
                if(err){
                    res.json({
                        code:2001,
                        msg:'没有权限'
                    })
                }
                // 有访问权限
                next();
            })
        }
        
    }
}