import routes from './config.js'
export default (app) => {
    console.log('--------------------visiter route -----------------------');
    // app 是 express()的实例对象
    routes.forEach((item) => {
        // routes.get('/',()=>{})
        // app.route('/').get(()=>{})
        // app.route('/')['get'](()=>{})
        // console.log(item);
        // let url = `/api${item.route}`;
        let url = `/api${item.route}`
        // console.log(url);
        app.route(url)[item.method](item.handle)
    })

}