var mongoose = require('mongoose');

var Farm = mongoose.model('Farm');


module.exports = {

    submit_farm: function(req, res) {
        console.log('the info here is: ', req.body.info.coordinates)
        let newFarm = new Farm({"name": req.body.info.name, "coords": req.body.info.coordinates})
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
                console.log('the farms are', farms);
                return res.json(farms);
            }
        })
    }
    
}





