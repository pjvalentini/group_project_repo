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

var html_creator = require('../helpers/html_creator.js');
var profile_html_creator = require('../helpers/profile_html_creator.js');

var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/index.html'));
});

router.get('/sign-up', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/sign-up.html'));
});
router.get('/sign-in', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/sign-in.html'));
});

router.get('/profile', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/profile.html'));
});

// do we need this Route ??
router.get('/world-holidays', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/world-holidays.html'));
});

router.get('/calendar', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/public/html/calendar.html'));
});

// SIGN UP ROUTE
router.post('/api/sign-up', function(req, res) {
	var insertQuery = 'INSERT INTO users (lastname, firstname, username, email, password) VALUES ($1,$2,$3,$4,$5)';
	pgClient.query(insertQuery, [req.body.lastname, req.body.firstname, req.body.username, req.body.email, req.body.password], (err, queryRes) => {
		// console.log(queryRes);
		if (err) {
			res.json({ error: err });
		} else {
			res.json("successfully signed up");
			// console.log(res.json("successfully signed up"));
		}
	});
});

// SIGN IN ROUTE
router.post('/api/sign-in', function(req, res) {
	console.log(req.body);
	var signInQuery = `SELECT * FROM users WHERE username='${req.body.username}'`;
	pgClient.query(signInQuery, function(error, queryRes) {
		console.log(signInQuery);
		if (req.body.password === queryRes.rows[0].password) {
			console.log(queryRes);
			if (error) {
				res.json({ error:error });
			} else {
				console.log("Welcome " + queryRes.rows[0].firstname);
				res.json({ results: queryRes.rows });
			}
		} else {
			alert("Please type correct password");
			res.json({ error: 'Incorrect Password' });
		}
	});
});

// WORLD-HOLIDAYS ROUTE
router.get('/world-holidays', function(req, res) {
	console.log(res);
	pgClient.query('SELECT * FROM holidays', function(error, queryRes) {
		console.log(queryRes);
		if (error) {
			res.json(error);
		} else {
			var arr = [];
			for (var i = 0; i < queryRes.rows.length; i++) {
				var data = {
					id: queryRes.rows[i].id,
					month: queryRes.rows[i].month,
					day: queryRes.rows[i].day,
					nation: queryRes.rows[i].nation,
					info: queryRes.rows[i].info,
					link: queryRes.rows[i].link,
				};
				arr.push(data);
			}
			// console.log(req.query)
			// res.json({data: arr, user_id: req.query.id})
			var all = { data: arr, user_id: req.query.id };
			// console.log(all);
			res.set('Content-Type', 'text/html');
			res.send(html_creator(all));
		}
	});
});

// AFTER SIGN IN, PROFILE SHOWING WHICH HOLIDAYS WERE FAVORITED
router.get('/api/profile/:id', function(req,res) {
	var userFavorites = [];
	var query = `SELECT holidays.month, holidays.day, holidays.nation, holidays.info FROM holidays INNER JOIN favorited_holidays ON favorited_holidays.holiday_id=holidays.id WHERE favorited_holidays.user_id='${req.params.id}'`;
	pgClient.query(query, function(error, queryRes) {
		if (error) {
			res.json({ error: error });
		} else {
			// res.json("favorites displayed");
			for(var i = 0 ; i < queryRes.rows.length; i++) {
				var data = {
					month: queryRes.rows[i].month,
					day: queryRes.rows[i].day,
					nation: queryRes.rows[i].nation,
					info: queryRes.rows[i].info,
				};
				userFavorites.push(data);
			}
			var faves = { data: userFavorites, user_id: req.params.id };
			res.set('Content-Type', 'text/html');
			console.log(faves);
			res.json(userFavorites);
		 	res.send(profile_html_creator(faves));
		}
	});
});

// ROUTE SHOWING PROPER MODEL WITH HOLIDAY INFO
router.post('/api/world-holidays', function(req, res) {
	var favoritesQuery = "INSERT INTO favorited_holidays (holiday_id, user_id) VALUES ($1, $2)"; // can you do a join on user_id with the users table??
	pgClient.query(favoritesQuery, [parseInt(req.body.holiday_id), parseInt(req.body.user_id)], function(error, queryRes) { // eslint-disable-line
		console.log(favoritesQuery);
	});
});

// this route id for the calendar info.
router.get('/api/calendar', function(req, res) {
	pgClient.query("SELECT * FROM holidays", (err, results) => {
		var holidays = [];
		for (var i = 0; i < results.rows.length; i++) {
			let day = results.rows[i].day.length > 1 ? results.rows[i].day : `0${results.rows[i].day}`;
			var data = {};
			data.title = results.rows[i].info;
			data.start = `2018-${month_convertor(results.rows[i].month)}-${day}`;
			data.editable = true;
			data.eventStartEditable = true;
			holidays.push(data);
			// console.log(data);
	 }
		res.json(holidays);
	});
});

// modal route
router.get('/api/info', (req, res) => {
	var modalInfo = "SELECT * FROM holidays";
		pgClient.query(modalInfo, (errorTwo, getInfo) => {
			// console.log(getInfo); // sends me the data from the db.
			if (errorTwo) {
				res.json(errorTwo);
			} else {
				res.json(getInfo);
			}
		});
});

module.exports = router;
