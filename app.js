//define the middleware


/*
var forbidder = function(forbidden_day) {
	var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return function (req,res,next) {
		//get the current day
		var day = new Date().getDay();

		//check if the currentday is the forbidden day
		if (days[day] === forbidden_day) {
			res.send('No visitors allowed on ' + forbidden_day + 's!');
		}
		//call the next middleware
		else {
			next();
		}
	}
};



//use the forbidder middleware
app.use(forbidder('Wednesday'));

//the router middleware goes here
app.use(app.router);


*/



var http = require('http');
var express = require('express');
var app = express();

app.get('/',function(req, res) {
	res.send('Welcome!');
});


app.get('/hello.text', function(req, res) {
	res.send('Hola!');
});

app.get('/contact', function(req,res) {
	res.render('contact');
});


http.createServer(app).listen(3000, function() {
	console.log('Express server listening on port ' + 3000);
});


