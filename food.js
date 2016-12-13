class Food {
	constructor(scl) {
		var rows = height / scl;
		var cols = width / scl;
		this.pos = createVector(floor(random(cols))*scl, floor(random(rows))*scl);
		this.scl = scl;
	}

	draw() {
		fill(255,0,0);
		rect(this.pos.x, this.pos.y, this.scl, this.scl);
	}
}