
function computerAction(row, col){
	document.getElementById(row + "" + col).innerHTML = "X";
}

function resultAction(result){
	document.getElementById("result").innerHTML = result;
}

let game = new Game(computerAction, resultAction);
game.start();

function setHumanFirst(input){
	restart();
	game.setHumanFirst(input);
	game.start();
	document.getElementById("hf").checked = false;
}

function clicked(x, y){
	document.getElementById(x + "" + y).innerHTML = "O";
	game.humanTurn(x, y);
}

function restart(){
	game.reset();
	for(let i = 1; i <= 3; i++){
		for(let j = 1; j <= 3; j++){
			document.getElementById(i + "" + j).innerHTML = "";
		}
	}
	document.getElementById("result").innerHTML = "";
}