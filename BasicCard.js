//Use inquirer to prompt users with the front of the flash card
var inquirer = require("inquirer");

//Basic Cards constructor will import the front and back of each flashcard to allow the users to guess the answer
var BasicCards = function(front, back, num){
	this.front = front;
	this.back = back;
	this.num = num;
	this.question = function(){
			if(this.num == 1){
				inquirer.prompt([
					{ 
						type: "input",
				    	name: "userGuess",
				    	message: front
					}

				]).then(function(ans){
					if(ans.userGuess === "George Washington"){
						console.log("Correct!");
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
				    	message: front
					}

				]).then(function(ans){
					if(ans.userGuess === "New England Patriots"){
						console.log("Correct!");
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
				    	message: front
					}

				]).then(function(ans){
					if(ans.userGuess === "144"){
						console.log("Correct!");
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


var firstPresident = new BasicCards("Who was the first president of the United States?","George Washington",1);
var superBowlChampions = new BasicCards("Who won the super bowl last season?","New England Patriots",2);
var math = new BasicCards("What is 12*12?","144",3);

var reset = new BasicCards();

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



