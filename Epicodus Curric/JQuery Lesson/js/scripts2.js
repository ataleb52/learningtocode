$(document).ready(function() {	
	$(".show_header").click(function() {
		decision = prompt("Are you sure you want to begin experimenting on kitty cats")
		if (decision === "yes") {
			$("img").slideToggle();
			$(".show_header").fadeOut();
			$(".noexperiment").hide();
			$("#experiment").fadeIn();
			$(".jumbotron").css("background", "red");
		} else {
			alert("Wise decision my friend")
		}
	});
})
