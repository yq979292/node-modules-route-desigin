import DB from '../../DB/index.js'

class Goods {
    constructor(){
        this.sql = {

        };
        this.query = DB.query.bind(this)
    }
}



export default new Goods()