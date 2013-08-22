$(function() {
	//SETS THE VARIABLE "HEIGHT" TO THE USERS INPUT WHEN PROMPTED ABOUT THEIR HEIGHT 
	var height = parseInt(prompt("How tall are you?"));
	
	if (height >= 48) {
		$('#tall_enough').show();
		if (confirm("Would you like to ride the Insano?")) {
			$('#insane').fadeIn();
		} else {
			alert("good choice");
		}
	}	else {
		$('#too_short').slideDown();
	}
	
	$('#tall_enough .catbut').click(function() {
			$('.kitty').toggle();
		});
	
	
});