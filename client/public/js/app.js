/* global $ */

$(document).ready(function() {
	$.ajax({
		method: 'GET',
		url: '/api/calendar',
	}).then((res) => {
		console.log(res);
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
		    eventClick: function(event, element) {
		    	console.log(event.title); // logs the holiday clicked in the console.
		        event.title = "CLICKED!";
		        // $('#calendar').fullCalendar('updateEvent', event);
		    },
	    });
	});
});
