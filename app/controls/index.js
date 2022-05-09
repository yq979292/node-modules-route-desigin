import {
    register,
    login
} from './module/user.js'
import { getGoodPageList } from './module/goods.js'

console.log('验证-----------',getGoodPageList);
export let registerControl = register;
export let loginControl = login;
export let getGoodPageListControl=getGoodPageList;