var mongoose = require('mongoose');

var Timer = mongoose.model('Timer');

module.exports = {

    admin_add_timer: function(req, res){
        Timer.find({}, function(err, timer){
            if(timer.length === 0){
                var timer = new Timer({'timer_TF': true, 'date': req.body.date, 'activated': true})
                timer.save(function(err){
                    if(err){console.log(err)}
                    else{return res.json(true)}
                })
            } else {
                timer[0].date = req.body.date;
                timer[0].timer_TF = true;
                timer[0].save(function(err){
                    if(err){console.log(err)}
                    else{res.json(true)}
                })
                
            }
        })
    },

    get_timer_time: function(req, res){
        Timer.find({}, function(err, timer){
            if(timer.length === 0){
                return res.json(false);
            } else {
                return res.json(timer[0])
            }
        })
    },

    activate_on_off_timer: function(req, res){
        Timer.find({}, function(err, timer){
            if(timer.length === 0){
                return res.json(false)
            } else {
                if(timer[0].activated === false){
                    timer[0].activated = true;
                } else {
                    timer[0].activated = false;
                }
                timer[0].save(function(err){
                    if(err){console.log(err)}
                    else{res.json(true)}
                })
            }
        })
    },

    times_up: function(req, res){
        console.log('time is up in timers_up')
        Timer.find({}, function(err, timer){
            if(timer.length === 0){
                return res.json(false)
            }else {
                timer[0].timer_TF = false;
                timer[0].save(function(err){
                    if(err){console.log(err)}
                    else{res.json(true)}
                })
            }
        })
    }
    
}





