var inquirer = require("inquirer");

var ClozeCard = function(partial, cloze, num){
	this.partial = partial;
	this.cloze = cloze;
	this.question = function(){
			if(this.num == 1){
				inquirer.prompt([
					{ 
						type: "input",
				    	name: "userGuess",
				    	message: partial
					}

				]).then(function(ans){
					if(ans.userGuess === "George Washington"){
						console.log("Correct! George Washington was the first president of the United States.");
						question2();
					}else {
						console.log("Incorrect, the correct answer is 'George Washington' ");
						question2();
					}
				});
			}
			if(this.num == 2){
				inquirer.prompt([
					{ 
						type: "input",
				    	name: "userGuess",
				    	message: partial
					}

				]).then(function(ans){
					if(ans.userGuess === "New England Patriots"){
						console.log("Correct! New England Patriots won the super bowl last season.");
						question3();
					}else {
						console.log("Incorrect, the correct answer is 'New England Patriots' ");
						question3();
					}
				});
			}
			if(this.num == 3){
				inquirer.prompt([
					{ 
						type: "input",
				    	name: "userGuess",
				    	message: partial
					}

				]).then(function(ans){
					if(ans.userGuess === "144"){
						console.log("Correct! 12*12 = 144");
						newGame();
					}else {
						console.log("Incorrect, the correct answer is '144' ");
						newGame();
					}
				});
			}
				
	}
	this.replay = function(){
		inquirer.prompt([
			{
				type: "checkbox",
				name: "play",
				message: "Would you like to play again?",
				choices: ["Yes", "No"]
			}
			]).then(function(ans){
				if(ans.play == "Yes"){
					console.log("Awesome!");
					question1();
				}else{
					console.log("Ok, come back soon!");
				}
			});
		
	}
}

var firstPresident = new ClozeCard("...was the first president of the United States.", "George Washington",1);
var superBowlChampions = new ClozeCard("...won the super bowl last season.","New England Patriots",2);
var math = new ClozeCard("12*12 = ...","144",3);
var reset = new ClozeCard();

firstPresident.question();

function question1() {
	firstPresident.question();
}

function question2(){
	superBowlChampions.question();
}

function question3(){
	math.question();
}

function newGame(){
	reset.replay();
}

