//came here after being sent from the routes.js section
var express = require("express");
var mongoose = require('mongoose');
var app = express();

var User = mongoose.model('User');

module.exports = {

    login: function(req, res){
        console.log('You made it here!', req.body);
        User.findOne({email: req.body.email}, function(err, result){
            if(result === null){
                var user = new User({ "email":req.body.email, "password":req.body.password, "name":req.body.name})
                user.save(function (err){
                    if(err){
                        console.log('there was an error adding a new user');
                        return res.json(false);
                    } else {
                        return res.json(true);
                    }
                })
            } else{
                // you already logged in so you can proceed
                return res.json(true);
            }
        })
    },

    auto_login: function(req, res){
        console.log('the body is: ', req.body);
        User.findOne({email: req.body.email}, function(err, result){
            if(err){
                console.log('there was an error')
                res.json(false)
            }else{
                if(result === null){
                    res.json(false);
                }else{
                    res.json(true);
                }
            }
        })
    }    

}





