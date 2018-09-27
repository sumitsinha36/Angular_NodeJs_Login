var express = require("express");
var config = require('./config');
var mongoose = require("mongoose");
var User = require("./models/user.model");
var bodyParser = require('body-parser');
var app = express();

//response body parser starts here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//response body parser end here

//Mongoos works start here
// mongoose.connect("mongodb://localhost/eshopsap", () => {
//     console.log('database connected')
// })
mongoose.connect(config.mongodb,()=>{
    console.log("Mongoose db connected ...")
},{ useNewUrlParser: true } );
//Mongoos works end here

//cors start here
var cors = require('cors');
 
var originsWhitelist = [
'http://localhost:4200', //this is front end url
'http://localhost:3001', //this is back end url// also not necessary to ass into whitelist
];
var corsOptions = {
origin: function(origin, callback){
var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
callback(null, isWhitelisted);
},
credentials:true
}
app.use(cors());

//cors end here

//this takes care for page routing
var route = express.Router();

//Home page response
route.get('/', (req, res) => {
    res.json({ message: "Hello world" })
})

//page routing directed with this url
app.use('/api', route);

//user auth
var authRouting = require('./routings/auth.routing');
app.use('/api/auth', authRouting);

//profile routing
var profileRouting = require('./routings/profile.routing');
app.use('/api/profile', profileRouting);


// your server app listen on this port
app.listen(config.port, () => {
    console.log('Server starts at port ' + config.port);
})