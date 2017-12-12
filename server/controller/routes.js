var express = require('express');
var path = require('path');
var fs = require('fs');
var pg = require('pg');
var month_convertor = require('./../helpers/month_convertor.js');

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

// this route id for the calendar info (Just Dec)
router.get('/api/calendar', function(req, res) {
	pgClient.query("SELECT * FROM holidays", (err, results) => {
		var holidays = [];
		for (var i = 0; i < results.rows.length; i++) {
		 // if (results.rows[i].month === "December") {
			let day = results.rows[i].day.length > 1 ? results.rows[i].day : `0${results.rows[i].day}`;
			// let month = results.rows[i].month.length > 1 ? results.rows[i].month : `0${results.rows[i].month}`;
			var data = {};
			data.title = results.rows[i].info;
			data.start = `2018-${month_convertor(results.rows[i].month)}-${day}`;
			// data.end = "2018-12-31";
			data.editable = true;
			data.eventStartEditable = true;
			holidays.push(data);
			console.log(data);
		 // }
	 }
		res.json(holidays);
	});
});

// this route gets in the info for the modal.
// router.get('/api/info', (req, res) => {
// 	var modalInfo = "SELECT * FROM holidays";
// 		pgClient.query(modalInfo, (errorTwo, getInfo) => {
// 			console.log(getInfo);
// 			if (errorTwo) {
// 				res.json(errorTwo);
// 			} else {
// 				res.json(getInfo);
// 			}
// 		});
// });


module.exports = router;
