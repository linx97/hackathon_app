var express = require("express");

var app = express();

var PORT = process.env.port || 8000;

var Word = require('./Word.js');
var Words = require('./Words.js');
var Storage = require('./Storage.js');
var bodyParser = require("body-parser");

var fs = require('fs');
var data = fs.readFileSync('./data.json');
data = JSON.parse(data);
var data2 = fs.readFileSync('./data2.json');
data2 = JSON.parse(data2);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/wordlist", function(req, res) {
	var words = new Words(data);
	res.send(words);
});

app.get("/level2.html", function(req, res) {
	res.sendFile(__dirname + "/public/level2.html");
});

app.get("/api/wordlist2", function(req, res) {
	var words = new Words(data2);
	res.send(words);
});

app.post("/api", function(req, res) {
	console.log(req.body); 
	res.send("success");
});

app.use(express.static("public"));

app.use(function(req, res, next) {
	res.status(404);
	res.send("404 Error - File Not Found");
});

app.use(function(err, req, res, next) {
	console.log(err);
	res.status(500);
	res.send("500 Error - Server Error");
});

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});

