/* global $*/

// $(document).ready(function() {
// 	$('#sign-up-form').on('submit', function(e) {  // added on submit
// 		e.preventDefault();
// 	var signInObj = {
// 		username: $('#username-input').val(),
// 		password: $('#password-input').val(),
// 	};
// 	$.ajax({
// 		method: 'POST',
// 		url: '/api/sign-in',
// 		dataType: 'json',
// 		data: JSON.stringify(signInObj),
// 		contentType: 'application/json',
// 	}).then(function(res) {
// 		console.log(res);
// 		window.location.href = '/world-holidays?id=' + res.results[0].id;
// 	});
// 		$('#username-input').val("");
// 		$('#password-input').val("");
//   	});
// });
//
//
// function monthConvertor(month) {
// 	switch (month) {
// 	case 'January':
// 		return "01";
// 		break;
// 	case 'February':
// 		return "02";
// 		break;
// 	case 'March':
// 		return "03";
// 		break;
// 	case 'April':
// 		return "04";
// 		break;
// 	case 'May':
// 		return "05";
// 		break;
// 	case 'June':
// 		return "06";
// 		break;
// 	case 'July':
// 		return "07";
// 		break;
// 	case 'August':
// 		return "08";
// 		break;
// 	case 'September':
// 		return "09";
// 		break;
// 	case 'October':
// 		return "10";
// 		break;
// 	case 'November':
// 		return "11";
// 		break;
// 	case 'December':
// 		return "12";
// 		break;
// 	}
// }
//
// // GET for calendar
// $.ajax({
// 	method: 'GET',
// 	url: '/api/calendar',
// }).then((res) => {
// 	// console.log(res);
// 	$('#calendar').fullCalendar({
// 			schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
// 	    events: res,
// 	    resources: [
// 	        { id: 'a', title: 'Room A' },
// 	        { id: 'b', title: 'Room B' },
// 	        { id: 'c', title: 'Room C' },
// 	        { id: 'd', title: 'Room D' },
// 	    ],
// 	    dayClick: function(date, jsEvent, view) {
// 	        console.log('Clicked on: ' + date.format()); // notes the date
// 	        console.log('jsEvent: ' + jsEvent);
// 	       	console.log(view); // MonthView
// 	       	console.log(jsEvent); // mouseup event triggered
// 	       	console.log($(this));
// 	    },
//
// // GET for Modal info from DB
// // Sets and eventCLick on the holiday calendar event.
//
// 		eventClick: function(event, jsEvent, view) {
// 			$('#link').remove();
// 			var dataDate = $(this).text();
// 			console.log(dataDate);
// 			$('#fullCalModal').modal();
// 			$.ajax({
// 				method: 'GET',
// 				url: '/api/info',
// 			}).then(function(dbInfo) {
// 				for (var i = 0; i < dbInfo.rows.length; i++) {
// 						// comapring db info with date info.
// 					if (dbInfo.rows[i].info.trim() === dataDate.trim()) {
// 						$('#modalTitle').html("Date: " + `${dbInfo.rows[i].month} ${dbInfo.rows[i].day}, 2018`);
// 						$('#modalHoliday').html("Holiday: " + dbInfo.rows[i].info);
// 						$('#modalNation').html("Nation of Origin: " + dbInfo.rows[i].nation);
// 						var aLink = $('<a>', {
// 							href: dbInfo.rows[i].link,
// 							text: `Read More: ${dbInfo.rows[i].link}`,
// 							id: 'link',
// 						});
// 						$(aLink).css("color", "#337ab7");
// 						$(aLink).css("underline", "none");
// 						$('#modalLink').append(aLink);
// 					}
// 				}
// 			 });
// 		 	},
//  		});
// });
