# Tic-Tac-Toe.js
A simple play-against-computer javascript library for the classic game, Tic-tac-toe.<br/>
The library basically shows the computer moves at a harder level without dealing with the UI part.<br/>
It uses MinMax Algorithm to find best move.<br/>
And basically a fun project.

# How to use
1. Add the JS library to your code.
```
<script src="tic-tac-toe.js"></script>
```
2. In your JS code You first have to complete computerAction(row, col) and resultAction(result) functions properly.<br/>
```
function computerAction(row, col){
	// this function will be triggered when computer makes a move.
	// row and col is the row_number and column_number of the computer's move. (1 indexed)
	// You should change the Tic-tac-toe board according to the row and col value.
}

function resultAction(result){
	// result is what the name suggests.
	// the event is triggered whenever anyone makes the move.
	// result = "not yet" : No result till now.
	// result = "WIN" : Human own.
	// result = "DRAW" : Game drawn.
	// result = "LOST" : Game lost.
	// Complete this function to show result and further things. 
}
```
3. Make a game instance.
```
// The above discussed functions are its argument.
let game = new Game( computerAction, resultAction );
```
4. You may set human-first mode 'true' or 'false' to idenitify who would make the first move. Human-first mode is by default 'true'.
```
game.setHumanFirst(true); // Human first
// or
game.setHumanFirst(false); // Computer first
```
5. Start the game by the function call game.start(). You may reset game at any time by calling game.reset() .
```
game.start(); // starts the game
game.reset(); // resets the game at any point
```
6. Define human moves by the function call game.humanTurn(row, col).
```
game.humanTurn(2, 3); // records the move at cell(2, 3) for Human
```
7. That's basically it. Enjoy playing with it. The library will automatically trigger external function, find next move and show result for any move played.
