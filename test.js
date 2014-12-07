var mod = require('./mymod.js');

var reverse = require('./reverse.js');

console.log(mod.name);
console.log(mod.lower('APPLE'));
console.log(mod.upper('mango'));
console.log(mod.get_name());

console.log(reverse('hippopotamus'));

console.log(reverse('supmacoppih'));



/*
app.use(function(req,res,next) {
	console.log('Request from: ' + req.ip);
	next();
});

*/

