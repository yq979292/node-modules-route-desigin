import {createPool,createConnection} from 'mysql';

// 创建连接池
const option = {
    host:'localhost',  // 连接件数据库地址,本地 远程
    user:'root',       // 登录数据库的用户名, 怎么给数据库添加用户;并设置访问全新
    password:'root',   // 登录数据库的密码 root用户密码  mysql -uroot -p
    database:"shop"    // 数据库名
}

const connet = ()=>{
    return createConnection(option)
}

const repool = ()=>{
    // 创建连接池
    const pool =  createPool({
        ...option,
        connectTimeout:100, // 支持连接醉倒数量
        waitForConnections:true,// 当无连接池可以使用时候, true 继续等待  false 抛出错误
        queueLimit:0  // 最大连接池等待数: (0表示没有限制)
    })

    // 监听连接池出错事件
    pool.on('error',(error)=>{
        error.code == 'PROTOCOL_CONNECTION_LOSR' && setTimeout(repool,2000) 
    })
    return pool
}
const pool = repool();
export default {
    repoolCopy:repool,
    repool:pool,
    connet,
}