var http = require("http");
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/views/'));

//app.use('views', __dirname + '/');

app.get('/',function(req, res){
	res.send('Homepage')
});


app.get('/createAccount',function(req, res){
	//res.send('acc test')
	res.redirect('createAccount.html')
});

app.listen(8081, function(err){
	console.log('The server is running at http://127.0.0.1:8081/')
});