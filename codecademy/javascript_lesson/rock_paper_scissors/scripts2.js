var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
        alert ( "The result is a tie!");
        console.log(computerChoice);
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
            alert ( "rock wins");
			console.log(computerChoice);
        } else {
            return "paper wins";
            alert ( "paper wins");
			console.log(computerChoice);
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "scissors") {
            return "scissors wins";
            alert ( "scissors wins");
			console.log(computerChoice);
        } else {
            return "paper wins";
            alert ( "paper wins");
			console.log(computerChoice);
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
            alert ( "rock wins");
			console.log(computerChoice);
        } else {
            return "scissors wins";
            alert ( "scissors wins");
			console.log(computerChoice);
        }
    }
    if (choice1 != "rock" || "paper" || "scissors") {
        alert ("Sorry that is an incorrect choice");
        console.log(computerChoice);
    }
}

compare (userChoice, computerChoice);