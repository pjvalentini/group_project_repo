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
		database: 'world_holidays',
		host: 'localhost',
		port: 5432,
	};
}

var pgClient = new pg.Client(dbUrl);
pgClient.connect();

var html_creator = require('../helpers/html_creator.js');
var router = express.Router();

// first basic route for index.html page.
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/index.html'));
});

router.get('/api/calendar', (req, res) => {
	// console.log(res);
	var info = 'SELECT * FROM world_holidays';
	pgClient.query(info, (error, getInfo) => {
		// console.log(getInfo);
		if (error) {
			res.json(error);
		} else {
			res.json(getInfo);
		}
 	});
});

router.get('/calendar/holidays', (req, res) => {
	console.log(res);
	var calendarHolidays = 'SELECT * FROM world_holidays';
	pgClient.query(calendarHolidays, (err, getCalendarHolidays) => {
		console.log(getCalendarHolidays);
		if (err) {
			res.json(err);
		} else {
			res.json(getCalendarHolidays);
		}
	});
});

// Other routes to go here!

module.exports = router;
