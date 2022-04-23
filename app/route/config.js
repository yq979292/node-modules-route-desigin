import {
    registerControl,
    loginControl,
} from '../controls/index.js';
export default [{ // 注册
    route: '/register',
    method: 'post',
    handle: registerControl
}, {
    route: '/login',
    method: 'post',
    handle: loginControl
}]