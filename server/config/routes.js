var users = require('../controllers/users.js')
var farm = require('../controllers/farm.js')

module.exports = function (app){

    app.post('/submit_farm', function(req, res){
        farm.submit_farm(req, res);
    })

    app.get('/get_all_farms', function(req, res){
        farm.get_all_farms(req, res);
    })

    app.post('/login', function(req, res){
        users.login(req, res);
    })  

    app.post('/auto_login', function(req, res){
        users.auto_login(req, res);
    })

    app.post('/delete_farm', function(req, res){
        farm.delete_farm(req, res);
    })

}