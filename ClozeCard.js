var inquirer = require("inquirer");

var ClozeCard = function(partial, cloze, num){
	this.partial = partial;
	this.cloze = cloze;
	this.num = num;
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
						question5();
					}else {
						console.log("Incorrect, the correct answer is 'George Washington' ");
						question5();
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
						question6();
					}else {
						console.log("Incorrect, the correct answer is 'New England Patriots' ");
						question6();
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
						newClozeGame();
					}else {
						console.log("Incorrect, the correct answer is '144' ");
						newClozeGame();
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
					question4();
				}else{
					console.log("Ok, come back soon!");
				}
			});
		
	}
}

	//Cloze Flashcards
	var firstPresidentCloze = new ClozeCard("...was the first president of the United States.", "George Washington",1);
	var superBowlChampionsCloze = new ClozeCard("...won the super bowl last season.","New England Patriots",2);
	var mathCloze = new ClozeCard("12*12 = ...","144",3);
	var resetCloze = new ClozeCard();

	function question4() {
		firstPresidentCloze.question();
	}

	function question5(){
		superBowlChampionsCloze.question();
	}

	function question6(){
		mathCloze.question();
	}

	function newClozeGame(){
		resetCloze.replay();
	}

module.exports = ClozeCard;

