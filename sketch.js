var snake;
var food;
var scl = 20;

function setup() {
	createCanvas(640, 480);
	frameRate(10);
	snake = new Snake(scl);
	food = new Food(scl);
}

function draw() {
  	background(240);
  	snake.draw();
  	if(snake.eat(food) || snake.death()) {
  		food = new Food(scl);
  	}
  	food.draw();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		snake.dir(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0);
	} else if (keyCode === UP_ARROW) {
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1);
	}
}