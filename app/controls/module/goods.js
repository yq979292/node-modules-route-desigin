import {
    goodSQL
} from '../../respositories/index.js';
import vertifyGood from '../../verticafiction/goods';

export let getPageShopList = async (req,res)=>{
    let {page} = req.fields;
    if(vertifyGood.page.required && !page){
        res.json({
            code:2002,
            message:vertifyGood.page.message,
        })
        return
    }
    // 获取分页列表
    try{
        let data = await goodSQL.queryPageSohpList(page);
        res.json({
            code:2000,
            data,
            count:data.length,
        })
    }catch(err){
        console.log(err);
        res.json({
            code: 5000,
            msg: 'serve error'
        })
    }
}

// 获取分类商品
export let getTypeShopList = (res,res)=>{
    let {type_one} = req.fields;
    if(vertifyGood.type_one.required && !type_one){
        res.json({
            code:2002,
            message:vertifyGood.page.message,
        })
        return
    }
    // 获取分页列表
    try{
        let data = await goodSQL.queryShopType(type_one)
        res.json({
            code:2000,
            data,
            count:data.length,
        })
    }catch(err){
        console.log(err);
        res.json({
            code: 5000,
            msg: 'serve error'
        })
    }
}

// 获取一级分类
export let getTypeOne = async (req,res)=>{
    try{
        let data = await goodSQL.queryShopType()
        res.json({
            code:2000,
            data,
            count:data.length,
        })
    }catch(err){
        console.log(err);
        res.json({
            code: 5000,
            msg: 'serve error'
        })
    }
}

// ????bug
export let getSeachShopList = (req,res)=>{
    let {search} = req.fields;
    if(vertifyGood.search.required && !search){
        res.json({
            code:2002,
            message:vertifyGood.search.message,
        })
        return
    }
    // 获取分页列表
    try{
        let data = await goodSQL.querySearchShop(search)
        res.json({
            code:2000,
            data,
            count:data.length,
        })
    }catch(err){
        console.log(err);
        res.json({
            code: 5000,
            msg: 'serve error'
        })
    }
}

export let getDetal = (req,res)=>{
    let {goodId} = req.fields;
    if(vertifyGood.goodId.required && !goodId){
        res.json({
            code:2002,
            message:vertifyGood.search.message,
        })
        return
    }
    // 获取分页列表
    try{
        let data = await goodSQL.queryShopDetal(goodId)
        res.json({
            code:2000,
            data:data[0]
        })
    }catch(err){
        console.log(err);
        res.json({
            code: 5000,
            msg: 'serve error'
        })
    }
}