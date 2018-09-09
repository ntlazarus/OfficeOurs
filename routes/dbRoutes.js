var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

dbRouter.route('/AddUserData')
	.get(function(req,res){
		//res.send('Successful route test!')

		var url = 'mongodb://localhost:27017/OfficeOurs';
		mongodb.connect(url, function(err, client){

			var db = client.db('OfficeOurs');

			db.collection('testUsers2').insertMany(userData, function(err, results){
				res.send(results);
				client.close();
			});

		});


	});

// dbRouter.route('/AddUserData')
// 	.get(function(req,res){
// 		//res.send('Successful route test!')

// 		var url = 'mongodb://localhost:27017/OfficeOurs';
// 		mongodb.connect(url, function(err, client){

// 			var db = client.db('users');

// 			db.collection('users').insertMany(userData, function(err, results){
// 				res.send(results);
// 				client.close();
// 			});

// 		});


// 	});

module.exports = dbRouter;