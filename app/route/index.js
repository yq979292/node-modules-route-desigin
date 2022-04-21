import routes from './config.js'
export default (app) => {
    // app 是 express()的实例对象
    return () => {
        routes.forEach((item) => {
            // routes.get('/',()=>{})
            // app.route('/').get(()=>{})
            // app.route('/')['get'](()=>{})
            console.log(item);
            app.route(item.route)[item.method](item.handle)
        })
    }
}