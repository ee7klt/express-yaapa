var express = require('express');
var http = require('http');

// express-resource should be loaded before app is instantiated
//var namespace = require('express-resource');

var app = express();



// Add router middleware explicitly
app.use(app.router);


//load resourceful route handler
//app.resource('users', require('./users.js'));

app.use(express.static('./public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//HTML should be prettified
app.locals.pretty = true;

app.get('/', function(req,res) {
	res.render('index', {title:'Express'});
});



http.createServer(app).listen(3000, function () {
	console.log('App started');
});

