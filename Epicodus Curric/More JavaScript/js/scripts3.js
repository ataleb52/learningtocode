$(function() {
	//RECOGNIZE THAT THE FORM IS BEING SUBMITTED
	$("form#sports").submit(function() {
		//WHEN USER SUBMITS, CAPTURE HEIGHT, WEIGHT, AND FREE TIME IN A VARIABLE
		var height = $("select#height").val();
		var weight = parseInt($("input#weight").val());
		var free = $("select#free").val();
		//NEED TO FIGURE OUT HOW TO CAPTURE USER NAME AS VARIABLE
		//var name = document.getElementById('name');
		//INSERT USER INPUT "name" INTO THE ANSWERS TO BE SHOWN
		$(".name").empty().append($("input#name").val());
		
		if (height === 'tall' || 'med' && weight >= 250 && free === 'fball') {
			$("#football_player").fadeIn();
		} else if (height === 'tall' && weight <= 249 && free === 'bball') {
			$("#basketball_player").fadeIn();
		} else if (free === 'couch') {
			$("#couch_bum").fadeIn();
		} else if (height === 'med' || 'short' && weight >= 250 && free === 'bball' || 'fball') {
			$("#couch_bum").fadeIn();
		}
		else {
			$("#couch_bum").show();
		}	
		
		/***
		else if (name.value === 'amer') {
			$("#couch_bum").fadeIn();
		}
		**/
		
		
		return false;
	});
});