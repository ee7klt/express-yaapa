var express = require('express');
var http = require('http');
var app = express();

// Add router middleware explicitly
app.use(app.router);

//Pass the express instance to the routes module
var routes = require('./routes')(app);

http.createServer(app).listen(3000, function () {
	console.log('App started: routes with node modules');
});