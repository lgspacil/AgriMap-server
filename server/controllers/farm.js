var mongoose = require('mongoose');

var Farm = mongoose.model('Farm');


module.exports = {

    submit_farm: function(req, res) {
        let newFarm = new Farm({"name": req.body.name, "coords": req.body.coords, "description": req.body.description})
        newFarm.save(function(err){
            if(err){console.log('unable to add new farm', err)}
            else{res.json(true)};
        });
    },

    get_all_farms: function(req, res){
        Farm.find({}, function(err, farms){
            if(err){
                console.log("there was an error getting all farms", err)
            }else{
                var newFarm = farms.reverse();
                // console.log('ALL THE FARMS: ', farms.reverse())
                return res.json(newFarm);
            }
        })
    },

    delete_farm: function(req, res){
        Farm.remove({_id: req.body.id}, function(err, result){
            if(err){console.log("there was an error")}
            else{res.json(true);}
        })
    },
    
}





