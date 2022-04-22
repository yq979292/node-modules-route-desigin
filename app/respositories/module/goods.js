import DB from '../../DB/index.js'

class Goods {
    constructor(){
        this.sql = {
            selectPageShopList:`SELECT * FROM goods LIMIT ?,30;`,
            selectTypeShopList:`SELECT * FROM goods WHERE type_one = ?;`,
            selectShopAll:`SELECT * FROM goods;`,
            selectShopSearch:`SELECT * FROM goods LIKE '%?%'`,// ????
            selectDetal:`SELECT * FROM goods WHERE Id = ?`,   // 获取商品详情sql
        };
        this.query = DB.query.bind(this)
    }

    // 获取分页商品数据
    queryPageSohpList(page){
        let index = (page-1)*30;
        return this.query(this.sql.selectPageShopList,[index]);
    }
    // 获取分类列列表数据
    queryTyepShopList(type){
        return this.query(this.sql.selectTypeShopList,[type])
    };

    // 获取一级分类
    async queryShopType(){
        let shopList = await this.query(this.sql.selectShopAll,[])
        let type_one = [];
        shopList.forEach(item => {
            type_one.indexOf(item.type_one) == -1 && type_one.push(item.type_one)
        });
        return type_one
    }

    // 模糊首艘
    querySearchShop(str){
        return this.query(this.sql.selectShopSearch,[str])
    }

    queryShopDetal(goodId){
        return this.query(this.sql.selectDetal,[goodId])
    }

    // 添加

    // 更新

    // 删除

    // 清空
}



export default new Goods()