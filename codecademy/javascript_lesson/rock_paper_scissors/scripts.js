var userPick = prompt("Pick yo weapon of choice! Rock, paper, or scissors?");
var cpuPick = Math.random();

//Assigning a number range to one of the weapon choices
if (cpuPick < .34) {
	cpuPick = "rock";
} else if (cpuPick <= .67) {
	cpuPick = "paper";
} else {
	cpuPick = "scissors";
}

//Creating the function that check a users pick vs the cpu's pick
var compare = function (pick1, pick2) {
	if (pick1 === pick2) {
		alert("Tie! Go again!");
		console.log (cpuPick)
	}
	if (pick1 === "rock") {
		if (pick2 === "scissors") {
			alert("rock wins") ;
			console.log (cpuPick)
		} else {
			alert("paper wins") ;
			console.log (cpuPick)
		}
	}
	if (pick1 === "scissors") {
		if (pick2 === "paper") {
			alert("scissors wins") ;
			console.log (cpuPick)
		} else {
			alert("rock wins") ;
			console.log (cpuPick)
		}
	}
	if (pick1 === "paper") {
		if (pick2 === "rock") {
			alert("paper wins") ;
			console.log (cpuPick)
		} else {
			alert("scissors wins") ;
			console.log (cpuPick)
			
		}
	}
	if (pick1 != "rock", "paper", "scissors") {
		alert("Please pick a valid weapon");
	}
}

compare (userPick, cpuPick)
