$(document).ready(function(){
	//console.log('hi')
		$(document).on('click', '.holiday-row', function(){
			var holiday = $(this).data('holiday-id')
			
			//console.log(holiday)
			$.ajax({
				method: 'POST',
				url: '/api/world-holidays',
				data: {holiday_id: holiday, user_id: $(this).data('user-id')}
			}).then(function(res){
				var userFavorite = []
				for(i = 0; 1 < res.data.length; i++){
					if(res.data[i].id===holiday){
						userFavorite.push(res.data[i].id)
					}
				}
			})
		})
})