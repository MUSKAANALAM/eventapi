



var express = require("express");

var bodyParser = require('body-parser')
var path = require ('path');
var router = require('./routes/event')


var uri="mongodb+srv://EVENT:EVENT@cluster0.cljf6.mongodb.net/event?retryWrites=true&w=majority"
var mongoose = require('mongoose')


mongoose.connect(uri, { useNewUrlParser: true ,useUnifiedTopology: true});

const { config } = require("process");


var app = express();



app.use(express.static( path.join(__dirname,"/public")));
app.use((req,res,next)=>{
    console.log("my middleware");
    next();
}) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/event',router)




var port = process.env.PORT || 3000; 

 
var server = app.listen( port, function(){
    console.log('Listening on port ' + server.address().port);
  });
