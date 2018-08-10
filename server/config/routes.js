var items = require('../controllers/items.js')
var users = require('../controllers/users.js')
var timer = require('../controllers/timer.js')
var farm = require('../controllers/farm.js')

module.exports = function (app){

    app.post('/submit_farm', function(req, res){
        farm.submit_farm(req, res);
    })

    app.get('/get_all_farms', function(req, res){
        console.log('made it here!!!!')
        farm.get_all_farms(req, res);
    })

    app.post('/login', function(req, res){
        users.login(req, res);
    })  

    app.post('/auto_login', function(req, res){
        users.auto_login(req, res);
    })

    // ---------------------------------------

    app.post('/add_item', function(req, res){
        items.add_item(req, res);
    })

    app.get('/get_cards', function(req, res){
        items.get_cards(req, res);
    })

    app.post('/add_like', function(req, res){
        items.add_like(req, res);
    })

    app.post('/delete_this', function(req, res){
        items.delete_this(req, res);
    })

    app.post('/search_one', function(req, res){
        items.search_one(req, res);
    })

    app.post('/upload', function(req, res){
        items.add_image(req, res);
    })

    app.post('/register_user', function(req, res){
        users.register_user(req, res);
    })

    app.post('/login_user', function(req, res){
        users.login_user(req, res);
    })

    app.post('/delete_priv', function(req, res){
        users.delete_priv(req, res);
    })

    app.post('/base64', function(req, res){
        users.base64(req, res);
    })

    app.post('/grab_img', function(req, res){
        users.grab_img(req, res);
    })

    app.get('/check_session', function(req, res){
        users.check_session(req, res);
    })

    app.post('/admin/add/timer', function(req, res){
        timer.admin_add_timer(req, res);
    })

    app.get('/get_timer_time', function(req, res){
        timer.get_timer_time(req, res);
    })

    app.post('/activate/on/off/timer', function(req, res){
        timer.activate_on_off_timer(req, res);
    })

    app.post('/add/bid', function(req, res){
        items.add_bid(req, res);
    })

    app.post('/times_up', function(req, res){
        timer.times_up(req, res);
    })

    app.post('/this/user/info', function(req, res){
        users.this_user_info(req, res);
    })

}