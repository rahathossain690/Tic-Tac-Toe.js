
function computerAction(x, y){
	document.getElementById(x + "" + y).innerHTML = "X";
}

function resultAction(x){
	if(x == "not yet") return;
	alert(x);
}

let game = new Game(computerAction, resultAction);
game.reset();
game.setHumanFirst(true);
game.start();

function clicked(x, y){
	document.getElementById(x + "" + y).innerHTML = "O";
	game.humanTurn(x, y);
}