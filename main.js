var ClozeCard = require("./ClozeCard.js");
var BasicCards = require("./BasicCard.js");
var inquirer = require("inquirer");


function Flashcards(){
	inquirer.prompt([
			{
				type: "checkbox",
				name: "chooseGame",
				message: "Would you like to learn with Basic or Advanced Flashcards?",
				choices: ["Basic", "Advanced"]
			}
			]).then(function(ans){
				if(ans.chooseGame == "Basic"){
					basic();
				}else{
					advanced();
				}
			});
}

//Call game start function
Flashcards();


//////////////////////////////////////////////////////////////
function advanced(){
	//Cloze Flashcards
	var firstPresidentCloze = new ClozeCard("...was the first president of the United States.", "George Washington",1);
	var superBowlChampionsCloze = new ClozeCard("...won the super bowl last season.","New England Patriots",2);
	var mathCloze = new ClozeCard("12*12 = ...","144",3);
	var resetCloze = new ClozeCard();
	firstPresidentCloze.question();	
}


/////////////////////////////////////////////////////////////
function basic() {
	//Basic Flashcards
	var firstPresident = new BasicCards("Who was the first president of the United States?","George Washington",1);
	var superBowlChampions = new BasicCards("Who won the super bowl last season?","New England Patriots",2);
	var math = new BasicCards("What is 12*12?","144",3);

	var reset = new BasicCards();
	firstPresident.question();
}

	
