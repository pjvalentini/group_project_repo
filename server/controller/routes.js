var pg = require('pg');
var express = require('express');
var path = require('path');

var dbUrl;

if (process.env.DATABASE_URL) {
	dbUrl = process.env.DATABASE_URL;
} else {
	dbUrl = {
		user: process.argv.POSTGRES_USER,
		password: process.argv.POSTGRES_PASSWORD,
		database: 'itunes',
		host: 'localhost',
		port: 5432,
	};
}

var pgClient = new pg.Client(dbUrl);
pgClient.connect();

var html_creator = require('../helpers/html_creator.js');
var router = express.Router();

// first basic route for index.html page...there is no html now...but this is a standard line.
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/index.html'));
});

// Other routes to go here!

module.exports = router;
