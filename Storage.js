var fs = require('fs');
var users = fs.readFileSync('./users.json');

function Storage() {
	
}

module.exports = Storage;