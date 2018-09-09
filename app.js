var http = require("http");
var express = require('express');
var mongodb = require('mongodb').MongoClient;

var app = express();


var dbRouter = require('./routes/dbRoutes');

app.use(express.static(__dirname + '/views/'));

app.use('/Db', dbRouter);

//app.use('views', __dirname + '/');

app.get('/',function(req, res){
	res.send('Homepage')
});


app.get('/createAccount',function(req, res){
	//res.send('acc test')
	res.redirect('createAccount.html')
});

// app.get('/Users',function(req, res){
// 	//res.send('acc test')
// 	res.send('Users test')
// });

var userData = [ 
		{	name: 'User 1',
			college: 'College 1',
			city: 'City 1'
		},
		{
			name: 'User 2',
			college: 'College 2',
			city: 'City 2'
		}];


// dbRouter.route('/AddUserData')
// 	.get(function(req,res){
// 		//res.send('Successful route test!')

// 		var url = 'mongodb://localhost:27017/OfficeOurs';
// 		mongodb.connect(url, function(err, client){

// 			var db = client.db('OfficeOurs');

// 			db.collection('testUsers2').insertMany(userData, function(err, results){
// 				res.send(results);
// 				client.close();
// 			});

// 		});


// 	});

app.get('/Users',function(req, res){
	//res.send('Users test 2')
	 var url = 'mongodb://localhost:27017/OfficeOurs';
	 mongodb.connect(url, function(err, client){
	 	
	 	var db = client.db('OfficeOurs')

	 	db.collection('testUsers').findOne({}, function (findErr, result) {
	 		if (findErr) throw findErr;
	 		console.log(result.name);
	 		res.send(result);
	 		client.close();
	 	});
	});
});

// app.get('/Users',function(req, res){
// 	//res.send('Users test 2')
// 	 var url = 'mongodb://localhost:27017/OfficeOurs';
// 	 mongodb.connect(url, function(err, db){
// 	 	var usersCol = db.collection('testUsers');
// 	 	var usersAll = "[]"

// 		  usersCol.find({}).toArray( function(err, results) {
// 		  	if(results.length === 0) {
// 		  		usersCol.insertMany(userData, function(err, results) {
// 		  			console.log(results);
// 		  			db.close;
// 		  		});		  
// 		 }
// 		 res.send('Users Test')
// 		});
// 	});
// });

app.listen(8081, function(err){
	console.log('The server is running at http://127.0.0.1:8081/')
});