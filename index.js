
function computerAction(x, y){
	document.getElementById(x + "" + y).innerHTML = "X";
}

function resultAction(x){
	console.log(x);
}

let game = new Game(computerAction, resultAction);
game.reset();
game.setHumanFirst(true);
game.start();

function clicked(x, y){
	document.getElementById(x + "" + y).innerHTML = "O";
	game.humanTurn(x, y);
}