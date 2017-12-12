var express = require('express');
var path = require('path');
var fs = require('fs');
var pg = require('pg');

var localCon = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'world_holidays',
	host: 'localhost',
	port: 5432,
};

let dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : localCon;

var pgClient = new pg.Client(dbUrl);

pgClient.connect();

var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/index.html'));
});

router.get('/calendar', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/calendar.html'));
});

router.get('/api/calendar', function(req, res) {
	pgClient.query("SELECT * FROM holidays", (err,results) => {
		var dec = [];
		for (var i = 0; i < results.rows.length; i++) {
		 if (results.rows[i].month === "December") {
			let day = results.rows[i].day.length > 1 ? results.rows[i].day : `0${results.rows[i].day}`;
			var data = {};
			data.title = results.rows[i].info;
			data.start = "2017-12-" + day;
			data.editable = true;
			data.eventStartEditable = true;
			dec.push(data);
		 }
		}
		res.json(dec);
	});
});

module.exports = router;
