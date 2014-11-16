var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var email="";
var lname="";
var fname="";
app.post('/forms.js', function(req, res) {
	fname = req.body.firstname;
	lname = req.body.lastname;
	email = req.body.email;
	res.send("Your email is" + " " + email);

	MongoClient = require('mongodb').MongoClient;
	MongoClient.connect('mongodb://127.0.0.1:27017/hackrpi', function (err, db) {
		var collection = db.collection('stuff');
		collection.insert({"Email":email}, function(err, inserted){});
		collection.insert({"First Name":fname}, function(err, inserted){});
		collection.insert({"Last Name":lname}, function(err, inserted){});
	});
});
app.listen(8080, function() {
});

