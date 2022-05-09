// 主要操作user表的.
import DB from '../../DB/index.js'

class User {
    constructor() {
        // this 是 User创建的实例对象那个 
        // 这里写操作user表的sql 语句
        this.sql = {
            insetUser: `INSERT INTO user (name,pwd,role) VALUES (?,?,?);`,
            seletUser: `SELECT name FROM user WHERE  name= ?;`,
            selectUserInfo: `SELECT Id,name,pwd,role FROM user WHERE name=?;`
        };
        // bind() query函数中this 为  User 创建的实例对象那个
        this.query = DB.query.bind(this);
    };

    // 根据username 查询数据库user信息...
    querySelectUser (params) {
        console.log('----------------------请求数据库querySelectUser-------------------', params);
        return this.query(this.sql.seletUser, [params])
    }
    queryInserUser (params) {
        return this.query(this.sql.insetUser, params)
    }
    querySelectUserInfo (params) {
        return this.query(this.sql.selectUserInfo, params)
    }
}

let userSql = new User();
export default userSql