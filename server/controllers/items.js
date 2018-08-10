var mongoose = require('mongoose');


var Item = mongoose.model('Item');
var User = mongoose.model('User');
var Timer = mongoose.model('Timer');

module.exports = {

    add_item: function (req, res) {
        User.findOne({_id: req.body.user_id}, function(err, user){
            var item = new Item(req.body.item);
            user._selling_items_id.push(item._id);
            item.save(function (err){
                user.save(function (err){
                    if(err){console.log('was not able to add a new item')}
                    else{res.json(true)}
                })
            })
        })


    },

    get_cards: function(req, res) {
        Item.find({}, function(err, result){
            if(err){console.log("error when grabbing all the trips")}
            else{res.json(result)}
        })
    },

    add_like: function(req, res) {
        Item.findOne({_id: req.body.card_info._id}, function(err, result){
            for(var i = 0; i < result.who_liked.length; i++){
                if(result.who_liked[i] == req.body.user_id){
                    return res.json({error: 'you already liked this'});
                }
            }
            
            result.who_liked.push(req.body.user_id);
            result.save(function(err){
                Item.update({_id: req.body.card_info._id},{ $inc: { 'likes': 1 } }, function(err, result){
                    if(err){console.log("there was an error when updating")}
                    else{res.json(result);}
                })
            })
        })
    },

    delete_this: function(req, res) {

        User.findOne({_id: req.body.user_id}, function(err, user){
            var index = user._selling_items_id.indexOf(req.body.item._id);
            user._selling_items_id.splice(index, 1);
            user.save(function(err){
                if(err){console.log('deleteing package from user selling array didnt work')}
                Item.remove({_id: req.body.item._id}, function(err, result){
                    if(err){console.log("there was an error removing item")}
                    else{res.json(result)}
                })
            })
        })
    },

    search_one: function(req, res) {
        Item.find({item_name: req.body.letters}, function(err, result){
            if(err){console.log("there was an error searching for things")}
            else{res.json(result);}
        })
    },

    add_image: function(req, res) {
        upload(req, res, (err) =>{
            if(err){
                res.json(false);
            } else {
                return res.json(true);
            }
        })
    },

    add_bid: function(req, res){
        // console.log('!!! add bid !!!', req.body)
        //checking if the timer is still running when making a bid
        Timer.find({}, function(err, timer){
            if(timer.length === 0 || timer[0].timer_TF == true || timer[0].activated == false){
                //if timer is running search for the item to increase its bid
                // update who the most recent bidder was
                Item.findOne({_id: req.body.item._id}, function(err, item){
                    item.price += parseInt(req.body.amount);
                    item.recent_bidder = req.body.bidder
                    item.save(function(err){
                        if(err){console.log(err)}
                        else{return res.json(item)}
                    })
                })
            } else {
                res.json(false);
            }
        })
    }
}





