// Include the Node HTTP library

var http = require ('http');

// Include the Express module
var express = require('express');

//Create an instance of Express
var app = express();



//set the view engine
app.set('view engine', 'jade');
//where to find the view files
app.set('views', './views');

//Mark the public dir as a static dir
app.use(express.static('./public'));


//Add the responseTime middleware
app.use(express.responseTime());

//A route for the home page

app.get('/', function (req,res) {
	res.render('index');
});


app.get('/say-hello', function(req,res) {
	res.render('hello');
});

app.get('/test', function(req,res) {
	res.send('this is a test');
})

//Start the app
http.createServer(app).listen(3000, function() {
	console.log('Express app started');
})
