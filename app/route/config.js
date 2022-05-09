import {
    registerControl,
    loginControl,
    getGoodPageListControl,
} from '../controls/index.js';
console.log('验证-------------------3.2',getGoodPageListControl);
// 1.修改配置文件
export default [
    { // 注册
        route: '/register',
        method: 'post',
        handle: registerControl
    }, {// 登录
        route: '/login',
        method: 'post',
        handle: loginControl

    }, {
        route: '/goodPageList',
        method: 'get',
        handle: getGoodPageListControl,//1--> 被修改
    }
]