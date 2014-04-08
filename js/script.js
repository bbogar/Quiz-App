// Question Constructor
	function Question(question, answer, img){
		this.question = question;
		this.answer = answer;
		this.img = img;
	}

	var question01 = new Question("Which piece of furniture did Isamu Noguchi design?",
								  "Isamu Noguchi designed the Noguchi Side Table for Herman Miller in 1947.",
								   furnitureImages[0]);

	var question02 = new Question("Which piece of funriture did George Nelson design?",
								  "George Nelson designed the Nelson Platform Bench for Herman Miller in 1946.",
								  furnitureImages[1]);

	var question03 = new Question("Which piece of funriture did Charles and Ray Eames design?",
								  "The Eames designed the LCW for Herman Miller 1946",
								  furnitureImages[2]);

	var question04 = new Question("Which piece of funriture did Verner Panton design?",
								 "Verner Panton designed the Panton chair for Vitra in 1967",
								  furnitureImages[3]);

	var question05 = new Question("Which piece of funriture did Marcel Breuer  design?",
								  "Marcel Breuer designed the Wassily chair for Thonet in 1925",
								  furnitureImages[4]);


$(document).ready(function(){
	console.log("js working");

//Declare Variables
	var total;
	var correct;
	var wrong;
	var questionNumber;

/*****************************
		Functions
*****************************/

//Check to see if the selected image is correct
function checkAnswer(){
	Check to see if correct image was clicked
	if(correct image was clicked){
		remove all images;
		show answer box with "correct" and blurb about piece;
	} else{
		remove all images;
		show answer box with "wrong" and blurb about piece;
	}		
}

//fill in circle showing progress and right or wrong
function userProgress(){
	check to see if correct image was clicked
		if(correct image was clicked){
			fill in circle with green;
		} else{
			fill in circle with red;
		}
} 

//show next question and images
	function nextQuestion(){
		
	}

	function nextImages(){
		append new images for each question
	}


/****************************
		Objects
****************************/




///////////////////////////////////////////////////////////////////////////////////////////////////
}	var question = new Object();
		question.one = "Which piece of furniture did Isamu Noguchi design?";
		question.two = "Which piece of funriture did George Nelson design?";
		question.three = "Which piece of funriture did Charles and Ray Eames design?";
		question.four = "Which piece of funriture did Verner Panton design?";
		question.five = "Which piece of funriture did Marcel Breuer  design?";
	

	var answer = new Object();
		answer.one = "Isamu Noguchi designed the Noguchi Side Table for Herman Miller in 1947.";
		answer.two = "George Nelson designed the Nelson Platform Bench for Herman Miller in 1946.";
		answer.three = "The Eames designed the LCW for Herman Miller 1946";
		answer.four = "Verner Panton designed the Panton chair for Vitra in 1967";
		answer.five = "Marcel Breuer designed the Wassily chair for Thonet in 1925";
	

// Furniture Images array
	var funritureImages = [
		"../images/furniture/noguchi-side-table.png",
		"../images/furniture/georgeNelson.jpg",
		"../images/furniture/eamesLCW.jpg",
		"../images/furniture/pantonChair.jpg",
		"../images/furniture/marcelChair.jpg",
		"../images/furniture/gehry.jpg",
		"../images/furniture/miesChair.jpg",
		"../images/furniture/lc4.jpg",
		"../images/furniture/wombChair.jpg",
		"../images/furniture/aaltoChair.jpg"
	]

// Preload furniture Images
	window.on("DOMContentLoaded", function(){
		for(var i in furnitureImages){
			var img = new Image();
			img.src = furnitureImages[i];
			img.style.display = "none";
		}
	});

// Headshot Images Array
	var headshotImages = [
		"../images/headshots/isamuNoguchi.png",
		"../images/headshots/georgeNelson.png",
		"../images/headshots/eames.png",
		"../images/headshots/panton.png",
		"../images/headshots/breur.png"
	]

// Preload headshot Images
	window.on("DOMContentLoaded", function(){
		for(var i in headshotImages){
			var img = new Image();
			img.src = headshotImages[i];
			img.style.display = "none";
		}
	});

	var questionAnswer = [question, answer];





});