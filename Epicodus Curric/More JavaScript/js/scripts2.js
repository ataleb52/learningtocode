$(function() {
	//RECOGNIZE THAT THE FORM IS BEING SUBMITTED
	$("form#insurance").submit(function() {
		//WHEN USER SUBMITS, CAPTURE AGE AND GENDER IN A VARIABLE
		var age = parseInt($("input#age").val());
		var gender = $("select#gender").val();
		
		//IF AN AGE IS ENTERED...
		if (age) {
			//GENERATE THE VARIABLE "QUOTE" BASED OFF OF THE VARIABLE "AGE"
			var quote = (100 - age) * 3;
			//IF THE GENDER SELECTED IS MALE AND THE AGE IS LESS THAN 26, ADD $50 TO THE QUOTE
			if (gender === 'male' && age < 26 ) {
			quote += 50;
			}
			//ERASE ANYTHING IN THE EXISTING RATE AND APPEND THE QUOTE
			$("#rate").empty().append(quote);
			//SHOW THE QUOTE WITH THE NEW VARIABLE "QUOTE" IN PLACE OF THE EMPTY SPAN
			$("#quote").show();
		//IF NO AGE IS ENTERED ALER THE USER THAT THEY MUST ENTER AN AGE
		} else {
			alert('Please enter yo age sucka!');
		}
		
		return false;
	});
});