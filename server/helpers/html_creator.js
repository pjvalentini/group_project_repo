module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>Holidays List</title>";
	str +=	'<link rel="stylesheet" type="text/css" href="./../../../public/css/world-holidays.css"></head>';
	str +=	'<body><h1>Click on a holiday to add it to your favorites!<button id="button" class="btn btn-primary" data-user-id=' + obj.user_id + '>My Favorites</button></h1>';
	str +=  '<h2><a href="/calendar"</a>To View Calendar</h2>';
	str += '<div id="everything-div">' + table_creator(obj) + '</div>';
	str += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>';
	str += '<script src="./../../../public/js/world-holidays.js"></script></body></html>';
	return str;
};


function table_creator(obj) {
	var str = '<table><tr><th>month</th><th>day</th><th>nation</th><th>info</th><th>link</th></tr>';
	for (var i = 0; i < obj.data.length; i++) {
	  str += '<tr class="holiday-row" data-holiday-id=' + obj.data[i].id + 'data-user-id=' + obj.user_id + '>';
		str += '<td class="month" data-holiday-id=' + obj.data[i].id + '>' + obj.data[i].month + '</td>';
		str += '<td class="date" data-holiday-id=' + obj.data[i].id + '>' + obj.data[i].day + '</td>';
		str += '<td class="nation" data-holiday-id=' + obj.data[i].id + '>' + obj.data[i].nation + '</td>';
		str += '<td class="info" data-holiday-id=' + obj.data[i].id + '>' + obj.data[i].info + '</td>';
		str += '<td class="link" data-holiday-id=' + obj.data[i].id + '>' + obj.data[i].link + '</td>';
		str += '</tr>';
	}
	str += '</table>';
	return str;
}
