var express = require('express');
var http = require('http');

// express-resource should be loaded before app is instantiated
//var namespace = require('express-resource');

var app = express();



// Add router middleware explicitly
app.use(app.router);

//404 error handler. handles request that all other middleware before it has failed to handle
app.use(function(req,res) {
	res.status(400);
	res.render('404.jade',
	{
		title: '404',
		message: 'File not Found'
	}
	);
});


//load resourceful route handler
//app.resource('users', require('./users.js'));

app.use(express.static('./public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//HTML should be prettified
app.locals.pretty = true;

// app.get('/', function(req,res) {
// 	res.render('index', {title:'Express'});
// });

app.get('/', function(req, res) {
	res.jsonp({message: 'welcome'});
});

app.get('/hello', function(req, res) {
	res.jsonp({message: 'hello'});
});

app.get('/file', function(req,res) {
	res.sendfile('./test.png', function(err) {
		if (err) {console.log(err);}
		else {console.log('file sent');}
	});
});

app.get('/download', function(req,res) {
	res.download('./test.png', function(err) {
		if (err) {console.log(err);}
		else {console.log('file downloaded');}
	});
});


http.createServer(app).listen(3000, function () {
	console.log('App started');
});

