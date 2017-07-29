var inquirer = require("inquirer");

var BasicCards = function(front, back){
	this.front = front;
	this.back = back;
	this.question = function(){

	}
}

var guess = process.argv[];

var firstPresident = new BasicCards("Who was the first president of the United States?","George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);

module.exports = BasicCards;