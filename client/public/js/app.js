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
				eventClick: function(event, jsEvent, view) {
						$('.modal-header').html(event.month);
						$('#modalTitle').html(event.info);
						$('#modalLink').attr('href', event.link);
						$('#fullCalModal').modal();
						console.log(event);
						console.log(jsEvent);
						console.log(view);
				}
	    });
	});
});

// $(document).ready(function() {
// 	$.ajax({
// 		method: "GET",
// 		url: "/api/info",
// 	}).then(function(getModalInfo) {
// 		// console.log(getModalInfo);
// 		$('#bootstrapModalFullCalendar').fullCalendar({
// 				eventClick:  function(event, jsEvent, view) {
// 						$('#modalMonth').html(event.month);
// 						$('#modalTitle').html(event.info);
// 						$('#modalLink').attr('href', event.link);
// 						$('#fullCalModal').modal();
// 						console.log(event);
// 						console.log(jsEvent);
// 						console.log(view);
// 				}
// 			});
// 	});
// });
