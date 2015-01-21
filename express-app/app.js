var express = require('express');
var http = require('http');

// express-namespace should be loaded before app is instantiated
var namespace = require('express-namespace');

var app = express();



// Add router middleware explicitly
app.use(app.router);

app.namespace('/articles', function() {

	app.get('/', function(req,res) {
		res.send('index of articles');
	});

	app.get('new', function(req,res) {
		res.send('new article');
	});

	app.get('/edit/:id', function(req,res) {
		res.send('edit article ' + req.params.id);
	});

	app.get('/2013', function(req,res) {
		res.send('articles from 2013');
	});

	//namespaces can be nested
	app.namespace('/2013/jan', function() {
		app.get('/',function(req,res) {
			res.send('articles from jan 2013');
		});
	});

});


http.createServer(app).listen(3000, function () {
	console.log('App started: routes with node modules');
});

