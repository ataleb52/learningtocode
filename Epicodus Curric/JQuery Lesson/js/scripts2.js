$(document).ready(function() {	
	$(".show_header").click(function() {
		decision = prompt("Are you sure you want to begin experimenting on kitty cats")
		if (decision === "yes") {
			$(".the_lab").fadeIn();
			$(".show_header").fadeOut();
			$(".noexperiment").hide();
			$("#experiment").fadeIn();
			$(".jumbotron").css("background", "red");
		} else {
			alert("Wise decision my friend")
		}
	});
	$(".on").click(function() {
		$("#peekaboocat").show();
	})
	
	$(".off").click(function() {
		$("#peekaboocat").hide();
	})
	
	$(".toggle-btn").click(function() {
		$("#togglecat").toggle();
	})
	
	$(".fade-in-btn").click(function() {
		$("#fadeincat").fadeIn();
	})
	
	$(".fade-out-btn").click(function() {
		$("#fadeincat").fadeOut();
	})
	
	$(".slide-in-btn").click(function() {
		$("#slidetoggle_cat").slideToggle();
		$(".slide-in-btn").text('Slideout');
	})
	
	$(".fade_toggle").click(function() {
		$("#fadetoggle_cat").fadeToggle();
	})
	
	$(".slideup-btn").click(function() {
		$("#slideup_cat").slideUp();
	})
	
	$(".slidedown-btn").click(function() {
		$("#slideup_cat").slideDown();
	})
	
	
	
	
	
	
	
	
	
	
	
})
