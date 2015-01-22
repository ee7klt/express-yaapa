exports.index = function(req,res) {
	//res.set('Content-Type', 'text/plain');
	res.send('<h1>welcome</h1>');
};

exports.new = function(req,res) {
	res.send('form for new user');
};

exports.create = function(req,res) {
	res.send('form for new user');
};

exports.show = function(req,res) {
	res.send('show user ' + req.params.user);
}

exports.update = function(req,res) {
	res.send('handle form to edit user ' + req.params.user);
}


