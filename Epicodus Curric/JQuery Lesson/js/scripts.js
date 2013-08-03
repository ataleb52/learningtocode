$(document).ready(function() {
	$("h1").click(function() {
		alert("This is a header!");
	});
	
	$(".clickable").click(function() {
		$("#cat-showing").toggle();
		$("#cat-hidden").toggle();
	});
	
	$("img").click(function() {
		alert("Don't be touching this cat!")
	});	
	
	$(".box").click(function() {
		alert("Don't be touching this box!")
	});	
	
})
