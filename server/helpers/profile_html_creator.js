module.exports = (obj) =>{
	var str = "<html>"
	str += "<head><title>Favorited Holidays</title>";
	str +=	'<link rel="stylesheet" type="text/css" href="./../../../public/css/profile.css"></head>';
	str +=	'<body><h1>Favorited holidays: <a href="/world-holidays" class="btn btn-info">Return</a></h1>';
	str += '<div id="favorites">'+ table_creator(obj) +'</div>';
	str += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>';
	str += '<script src="./../../../public/js/world-holidays.js"></script></body></html>';	
	
	return str;

}


function table_creator(obj){
	var str = '<table><tr><th>month</th><th>day</th><th>nation</th><th>info</th></tr>'
	for (var i = 0; i < obj.data.length; i++) {
		str+='<tr class="holiday-row" data-user-id='+ obj.user_id +'>'			
		str+='<td class="month">'+ obj.data[i].month+ '</td>';
		str+='<td class="date">'+obj.data[i].day+ '</td>';
		str+='<td class="nation">'+obj.data[i].nation+ '</td>';
		str+='<td class="info">'+obj.data[i].info+ '</td>';
		str+='</tr>'
	}
	str += '</table>'
	return str
}