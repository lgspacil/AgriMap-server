//this will pull all the schemas that I have set up in the models folder
var mongoose = require('mongoose');
var fs = require('fs');
var Schema = mongoose.Schema;
var path = require('path');

mongoose.connect('mongodb://localhost/react_native');// <-- use this in development
// mongoose.connect('mongodb://lucas:lucas@ds139446.mlab.com:39446/marketplace-react'); // <-- use this for localhost

//will look in the models folder and anything that has a js file name it will read
var models_path = (__dirname + '/../models');
fs.readdirSync(models_path).forEach(function (file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})
