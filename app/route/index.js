import routes from './config.js'

export default (app) => {
    app.route('/api' + routes[0].route)[routes[0].method](routes[0].handle)
    app.route('/api' + routes[1].route)[routes[1].method](routes[1].handle)
    app.route('/api' + routes[2].route)[routes[2].method](routes[2].handle)
}