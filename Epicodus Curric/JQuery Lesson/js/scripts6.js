$(function() {
	$("#blanks form").submit(function() {
		/****OLD WAY
		$(".person1").empty().append($("input#person1").val());
		$(".person2").empty().append($("input#person2").val());
		$(".animal").empty().append($("input#animal").val());
		$(".exclamation").empty().append($("input#exclamation").val());
		$(".verb").empty().append($("input#verb").val());
		$(".noun").empty().append($("input#noun").val());
		*******/
		
		/**PLACE ALL INPUT ID'S IN A VARIABLE CALLED BLANKS**/
		var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"]
		
		//TAKE EACH THING ASSIGNED TO THE VARIABLE AND PLACE IT IN IT'S REPSECTIVE SPAN CLASS.
		blanks.forEach(function(blank) {
			$("." + blank).empty().append($("input#" + blank).val());
		});
		
		$("#story").show();
		
		return false;
	});
});