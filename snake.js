class Snake {
	constructor (scl) {
		this.init();
		this.scl = scl;
	}

	update() {
		if(this.total > 0) {
			this.tails.shift();
			this.tails.push(this.pos.copy());
		}
		this.pos.x = constrain(this.pos.x + this.vel.x * this.scl, 0, width - this.scl);
		this.pos.y = constrain(this.pos.y + this.vel.y * this.scl, 0, height - this.scl);
	}

	dir(xvel, yvel) {
		this.vel.x = xvel;
		this.vel.y = yvel;
	}

	draw() {
		fill(0);
		for(var tail of this.tails) {
			rect(tail.x, tail.y, this.scl, this.scl);
		}
  		rect(snake.pos.x, snake.pos.y, scl, scl);
  		this.update();
	}

	death() {
		for(var tail of this.tails) {
			if (dist(this.pos.x, this.pos.y, tail.x, tail.y) < 1) {
				this.init();
				return true;
			}
		}
		return false;
	}

	eat(food) {
		if (dist(this.pos.x, this.pos.y, food.pos.x, food.pos.y) < 1) {
			this.total++;
			this.tails.push(this.pos.copy());
			return true;
		}
		return false;
	}

	init() {
		var rows = height / scl;
		var cols = width / scl;
		this.pos = createVector(floor(random(cols))*scl, floor(random(rows))*scl);
		this.vel = createVector(1, 0);
		this.total = 0;
		this.tails = [];
	}
}