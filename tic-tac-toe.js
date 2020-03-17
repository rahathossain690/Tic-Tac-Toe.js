function Game(computerAction, resultAction){
	this.matrix = [[null, null, null, null],
								[null, null, null, null],
								[null, null, null, null],
								[null, null, null, null]];

	this.computerAction = computerAction;

	this.resultAction = resultAction;

	this.started = false;

	this.stop = false;
	
	this.isHumanFirst = true;

	this.result = "not yet";

	this.rest = 9;
	
	this.start = function(){
		this.started = true;
		if(this.isHumanFirst == false){
			let ans = this.findMove();
			this.matSet(ans[0], ans[1], 1);
			computerAction(ans[0], ans[1]);
		}
	}
	
	this.reset = function(){
		this.started = false;
		this.matrix = [[null, null, null, null],
								[null, null, null, null],
								[null, null, null, null],
								[null, null, null, null]];
		this.result = "not yet";
		this.rest = 9;
		this.stop = false;
		this.isHumanFirst = true;
	}
	
	this.setHumanFirst = function(setter){
		this.isHumanFirst = setter;
	}
	
	this.humanTurn = function(x, y){
		this.matSet(x, y, 0);
		if(this.stop) return;
		let ans = this.findMove();
		this.matSet(ans[0], ans[1], 1);
		computerAction(ans[0], ans[1]);
	}

	this.matSet = function(x, y, jin, extra){
		if(this.matrix[x][y] !== null) return;
		if(this.stop) return;
		this.matrix[x][y] = jin;
		if(jin === null) this.rest += 1;
		else this.rest -= 1;
		if(extra) return;
		if(this.win(1)) this.result = "LOST", this.stop = true;
		else if(this.win(0)) this.result = "WIN", this.stop = true;
		else if(this.rest == 0) this.result = "DRAW", this.stop = true;
		this.resultAction(this.result);
	}

	this.win = function(jin){
		if( this.checkRowCol(jin, [1, 1], [1, 2], [1, 3]) ) return true;
		if( this.checkRowCol(jin, [2, 1], [2, 2], [2, 3]) ) return true;
		if( this.checkRowCol(jin, [3, 1], [3, 2], [3, 3]) ) return true;
		if( this.checkRowCol(jin, [1, 1], [2, 1], [3, 1]) ) return true;
		if( this.checkRowCol(jin, [1, 2], [2, 2], [3, 2]) ) return true;
		if( this.checkRowCol(jin, [1, 3], [2, 3], [3, 3]) ) return true;
		if( this.checkRowCol(jin, [1, 1], [2, 2], [3, 3]) ) return true;
		if( this.checkRowCol(jin, [1, 3], [2, 2], [3, 1]) ) return true;
		return false;
	}

	this.checkRowCol = function(jin, i, j, k){
		if(this.matrix[ i[0] ][ i[1] ] != jin) return false;
		if(this.matrix[ j[0] ][ j[1] ] != jin) return false;
		if(this.matrix[ k[0] ][ k[1] ] != jin) return false;
		return true;
	}

	this.backtrack = function(comp){
		if(this.win(1)) return 1;
		if(this.win(0)) return -1;
		if(this.rest == 0) return 0;
		
		let x = null, y = null;
		let best = 1;
		if(comp) best = -1;

		for(let i = 1; i <= 3; i++){
			for(let j = 1; j <= 3; j++){
				if(this.matrix[i][j] !== null) continue;
				this.matrix[i][j] = comp ? 1 : 0;
				this.rest -= 1;
				let fin = this.backtrack(!comp);
				if(comp) best = Math.max(fin, best);
				else best = Math.min(fin, best);
				this.rest += 1;
				this.matrix[i][j] = null;
			}
		}

		return best;
	}

	this.findMove = function(){
		let x = null, y = null;
		let win = [];
		let draw = [];
		let lose = [];

		for(let i = 1; i <= 3; i++){
			for(let j = 1; j <= 3; j++){
				if(this.matrix[i][j] !== null) continue;
				this.matrix[i][j] = 1;
				this.rest -= 1;
				let fin = this.backtrack(0);
				if(fin == 1) win.push([i, j]);
				else if(fin == 0) draw.push([i, j]);
				else lose.push([i, j]);
				this.rest += 1;
				this.matrix[i][j] = null;
			}
		}

		if(win.length != 0) return this.getRandom(win);
		else if(draw.length != 0) return this.getRandom(draw);
		else return this.getRandom(lose);
	}
	
	this.getRandom = function(array){
		return array[ Math.floor(Math.random() * array.length) ];
	}
}