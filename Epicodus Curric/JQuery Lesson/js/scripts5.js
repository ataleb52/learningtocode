$(function() {
	/*****************************
	This first method applies the css directly to the element being called.
	It's not the most efficient when you have a large project and need to change the color of
	each individual thing.
	******************************/
	
	$("#greenbut").click(function() {
		$("body").css("background", "#5cb85c");
	});
	$("#yellowbut").click(function() {
		$("body").css("background", "#f0ad4e");
	});
	$("#redbut").click(function() {
		$("body").css("background", "#d9534f");
	});
	
	/*****************************
	The more efficient and slightly faster way is calling a class to be applied to that speicific element.
	This way if you need a change to be done you can do it to the class instead of each individual element.
	******************************/
	
	$("button#white").click(function() {
		//The next line is used to remove any class being applied to that element, in order
		//to have the next line apply a new class to it.
		$("body").removeClass();
		$("body").addClass("white-back");
	});
	$("button#blue").click(function() {
		$("body").removeClass();
		$("body").addClass("blue-back");
	});
	$("button#sky").click(function() {
		$("body").removeClass();
		$("body").addClass("sky-back");
	});
});