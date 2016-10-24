/* jshint esversion:6 */
var Word = require('./Word.js');

var getRandom = function(arr) {
	return Math.floor(Math.random()* arr.length);
};

var Words = function(data) {
	var output = [];
	for (var a in data) {
		for (var i = 0; i < 6; i++) {
			var index = getRandom(data[a]);
			console.log(data[a][index]);
			if (!output.includes(data[a][index])) {

				var j = new Word(data[a][index], a);
				output.push(j);
			}
		}
	}

	// console.log(output);
	return output;
};

module.exports = Words;
