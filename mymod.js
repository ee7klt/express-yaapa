



/* attachment to exports*/

/*
var name = exports.name = 'Packt'

var secret = 'zoltan';

exports.lower = function (input) {
	return input.toLowerCase();
}

exports.upper = function(input) {
	return input.toUpperCase();
}

exports.get_name = function() {
	return name;
}

exports.get_secret = function() {
	return secret;
}*/

/*assignment to modules.exports */

var secret = 'zoltan';


module.exports = {
	name: 'Packt',

	lower: function(input) {
		return input.toLowerCase();
	},

	upper: function(input) {
		return input.toUpperCase();
	},

	get_name: function() {
       return this.name;
	},

	get_secret: function() {
		return secret;
	}



}


