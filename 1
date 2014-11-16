var MongoClient = require('mongodb').MongoClient;
prompt = require('prompt');
var first_name;
var last_name;
var email;
var pwd = "dummy";
var pwd_set = false;
prompt.start();
prompt.get(['first_name', 'last_name', 'email'], function(err,
    result) {
        first_name = result.first_name;
        last_name = resutlt.last_name;
        email = result.email;
});
/*while (pwd_set === false) {
	prompt.get(['pwd', 'pwd1'], function(err, result) {
		if (result.pwd === result.pwd1) {
			pwd_set = true;
		}
		else {
			pwd = result.pwd;
		}
	});
}*/
MongoClient.connect('mongodb://127.0.0.1:27017/hackrpi', function(err, db) {
	db.createUser({
		"user": email,
		"pwd": pwd,
		"customData": {"f_name" : first_name, "l_name" : last_name}
	})
});
