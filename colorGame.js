var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#game");
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var newColor = document.querySelector("#game");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//modeButtons event listeners
	setUpModeButtons();

	setUpSquares();

	resetFunc();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			resetFunc();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < square.length; i++){
	//add event listeners to squares
		square[i].addEventListener("click", function(){
			//grab the color of the clicked square
			var clickedColor = this.style.backgroundColor;
			//check if picked color === clicked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				newColor.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;		
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

resetButton.addEventListener("click", function(){
	resetFunc();
});


function changeColors(color){
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//to pick a random color from colors array
	var randomColor = Math.floor(Math.random()*colors.length);
	return colors[randomColor];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors into the array
	//repeats num times
	for(var i = 0; i < num; i++){
		//get random array and push into array
		arr.push(colorsGeneration());
	}
	//return arr
	return arr;
}

function colorsGeneration(){
	//random color for red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//random color for green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//random color for blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//return rgb(r, g, b);
	return "rgb(" + r +", " + g + ", " + b + ")";
}

function resetFunc(){
	//generate new colours
	colors = generateRandomColors(numSquares);
	//have new pickedColor
	pickedColor = pickColor();
	//make colorDisplay as pickedColor
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		} else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#1c8fd6";
	messageDisplay.textContent="";
	resetButton.textContent = "New Colors";
}