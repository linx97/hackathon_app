var Word = function(name, key) {
	this.text = name;
	this.weight = 15;
	this.html = {class: "draggable " + key + "\""};
};

module.exports = Word;