/* jshint esversion:6 */
var Word = require('./Word.js');
var fs = require('fs');
var data = fs.readFileSync('./data.json');
data = JSON.parse(data);

var getRandom = function(arr) {
	return Math.floor(Math.random()* arr.length);
};

var Words = function() {
	var output = [];
	for (var a in data) {
		for (var i = 0; i < 8; i++) {
			var index = getRandom(data[a]);
			if (!output.includes(data[a][index])) {
				var j = new Word(data[a][index], a);
				console.log(j)
				output.push(j);
			}
		}
	}

	// console.log(output);
	return output;
};

module.exports = Words;
