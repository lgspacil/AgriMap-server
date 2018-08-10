// import { request } from "http";

//came here after being sent from the routes.js section
var express = require("express");
var mongoose = require('mongoose');
var app = express();

//since we have the animal model we need to set Aniaml as a variable
var User = mongoose.model('User');
var Item = mongoose.model('Item');

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
    },
    // ----------------------------------------------------------

    register_user: function(req, res){
        User.findOne({email: req.body.email}, function(err, result){
            if(result === null){
                if(req.body.name == 'admin'){
                    console.log('yepp')
                    var user = new User({'admin': true, "email":req.body.email, "password":req.body.password, "name":req.body.name})
                }else{
                    var user = new User({'admin': false, "email":req.body.email, "password":req.body.password, "name":req.body.name});
                }
                user.save(function (err){
                    if(err){
                        console.log('there is an error adding a new use');
                        return res.json(false);
                    } else {
                        return res.json(user);
                    }
                });
            }else{
                console.log('an email already exists with this name');
                return res.json(false);
            }
        })
    },

    login_user: function(req, res){
        User.findOne({email: req.body.email}, function(err, result){
            if(err){
                console.log("there was an error logging in..")
            } else {
                if(result === null){
                    return res.json(result);
                } else {
                    return res.json(result);
                }
            }
        })
    },

    delete_priv: function(req, res){
        User.findOne({_id: req.body.user_id}, function(err, user){
            for(var i = 0; i < user._selling_items_id.length; i++){
                if(req.body.item_id == user._selling_items_id[i]){
                    //means that it is my item, i can delete
                    return(res.json(true))
                }
            }

            //it is not your item, no right to delete
            return res.json(false);
        })
    },

    add_item: function (req, res) {
        var item = new Item(req.body);
        item.save(function (err){
            if(err){
                console.log("there was an error adding the item");
            } else {
                console.log('added the item');
            }
        });

        return res.json(true);
    },


    base64: function(req, res){
        User.update({_id: req.body.user_id}, {$set: {"bit_img": req.body.img}}, function(err, result){
            if(err){console.log('unable to add the bit 64 image to DB')}
            else{res.json(true)}
        })
    },

    grab_img: function(req, res){
        User.findOne({_id: req.body.user_id}, function(err, result){
            if(err){console.log('unable to grab info')}
            else{res.json(result)};
        })
    },

    check_session: function(req, res){
        if(req.session.user_id != undefined){
            console.log('the session is -->', req.session.user_id)
            // return res.json({user_id: req.session.user_id, name: req.session.name})
            return res.json(true);
        }else {
            return false;
        }
    },

    this_user_info: function(req, res){
        let items = [];
        User.findOne({_id: req.body.user_id}, function(err, user){
            if(err){console.log(err)}
            else{
                for(var i = 0; i < user._selling_items_id.length; i++){
                    Item.findOne({_id: user._selling_items_id[i]}, function(err, item){
                        items.push(item)
                        if(items.length == user._selling_items_id.length){
                            res.json({items: items, user: user});
                        }
                    })
                    
                }

            }
            
        })
    }

}





