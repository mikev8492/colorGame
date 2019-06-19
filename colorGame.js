alert("Choose the square that matches the color code!");

var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("targetColor");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setUpModeButtons();
	setUpSquares();
	 reset();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			// if (this.textContent === "Easy") {
			// 	numOfSquares = 3; 
			// }else{
			// 	numOfSquares = 6;
			// }
			reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
 		//add click listeners to squares
 		squares[i].addEventListener("click", function(){
 			//grab color of clicked square
 			var clickedColor = this.style.backgroundColor;
 			//compare color to picked color
 			if (clickedColor === pickedColor) {
 				messageDisplay.textContent = "Correct!";
 				changeColors(clickedColor);
 				h1.style.backgroundColor = clickedColor;
 				resetButton.textContent = "Play Again?";
 			}else {
 				this.style.backgroundColor = "#232323";
 				messageDisplay.textContent = "Try Again";
 			}
 		});
	}
}

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	//generate all new colors 
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from arr
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		colors[i] ? squares[i].style.backgroundColor = colors[i]: squares[i].style.display = "none";
	}
	//reset h1 background color and textContent of button and message
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}




 function generateRandomColors(num){
 	//make an array
 	var arr = [];
 	//add num random colors to array
 	for (var i = 0; i < num; i++) {
 		//get random color and push into arr
 		arr.push(randomColor());
 	}
 	//return that array
 	return arr;
 }

 function randomColor(){
 	//pick a "red" from 0 to 255
 	var r = Math.floor(Math.random() * 256);
 	//pick a "green" from 0 to 255
 	var g = Math.floor(Math.random() * 256);
 	//pick a "blue" from 0 to 255
 	var b = Math.floor(Math.random() * 256);
 	// needs to look like "rgb(r,g,b)"
 	return `rgb(${r}, ${g}, ${b})`;
 }

 function changeColors(color){
 	//loop through all squares
 	for (var i = 0; i < squares.length; i++) {
 		//change each color to match pickedColor
 		squares[i].style.backgroundColor = color;
 	}
 	
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length); 
 	return colors[random];
 }

