/* global $ */

// var moment = require('moment');

$(document).ready(function() {

	function monthConvertor(month){
	switch (month) {
		case 'January':
			return "01";
			break;
		case 'February':
			return "02";
			break;
		case 'March':
			return "03";
			break;
		case 'April':
			return "04";
			break;
		case 'May':
			return "05";
			break;
		case 'June':
			return "06";
			break;
		case 'July':
			return "07";
			break;
		case 'August':
			return "08";
			break;
		case 'September':
			return "09";
			break;
		case 'October':
			return "10";
			break;
		case 'November':
			return "11";
			break;
		case 'December':
			return "12";
			break;
		}
	}


	$.ajax({
		method: 'GET',
		url: '/api/calendar',
	}).then((res) => {
		//console.log(res);
	    $('#calendar').fullCalendar({
				schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
		    events: res,
		    resources: [
		        { id: 'a', title: 'Room A' },
		        { id: 'b', title: 'Room B' },
		        { id: 'c', title: 'Room C' },
		        { id: 'd', title: 'Room D' },
		    ],
		    dayClick: function(date, jsEvent, view) {
		        console.log('Clicked on: ' + date.format()); // notes the date
		        console.log('jsEvent: ' + jsEvent);
		       	console.log(view); // MonthView
		       	console.log(jsEvent); // mouseup event triggered
		       	console.log($(this));
		    },

				eventClick: function(event, jsEvent, view) {
					var dataDate = $(this).text();
					$('#fullCalModal').modal();
					$.ajax({
						method: 'GET',
						url: '/api/info',
					}).then(function(dbInfo) {
						for (var i = 0; i < dbInfo.rows.length; i++) {
							// comapring db info with date info.
							if (dbInfo.rows[i].info.trim() === dataDate.trim()) {
								$('#modalTitle').html(`${dbInfo.rows[i].month} ${dbInfo.rows[i].day}, 2018`);
								$('#modalHoliday').html("Holiday: " + dbInfo.rows[i].info);
								$('#modalNation').html("Nation of Origin: " + dbInfo.rows[i].nation);
								var aLink = $('<a>',{
									href: dbInfo.rows[i].link,
									text: `Read More: ${dbInfo.rows[i].link}`,
								});
								$('#modalLink').append(aLink);
							}
						}
					});
			 	},
	 		});
	});
});
