var express = require('express');
var http = require('http');

// express-resource should be loaded before app is instantiated
var namespace = require('express-resource');

var app = express();



// Add router middleware explicitly
app.use(app.router);


//load resourceful route handler
app.resource('users', require('./users.js'));


http.createServer(app).listen(3000, function () {
	console.log('App started: routes with resources');
});

