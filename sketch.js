class Circles {
	constructor(xpos, ypos, radius, element, rate){
	  this.x = xpos;
	  this.y = ypos;
	  this.r = radius;
	  this.e = element;
	  this.ra = rate;
	  this.color = [random(255), random(255), random(255)];
	}
  
	move() {
	  this.r += this.ra;
  
	  push();
	  fill(this.color);
	  if (this.e >= 0 && this.e < 1){
		circle(this.x, this.y, this.r);
	  } else if (this.e >= 1){
		square(this.x, this.y, this.r);
	  }
	  pop();
	}
  }
  
  let circles = [];
  
  let numCircles = 0;

  let start = 0;
  let gobackbg = false;
  let john = 0;
  
  let rb;
  let gb;
  let bb;
  let rbb;
  let gbb;
  let bbb;
  let cycle = true;
  
  function preload() {
	// put preload code here
  }
  
  function setup() {
	createCanvas(windowWidth, windowHeight);
  
	frameRate(30);
  
	angleMode(DEGREES);
	rectMode(CENTER);
  
	noStroke();
  
	console.log("click wherever");
  
	rb = color(random(255), random(255), random(255));
	rbb = color(random(255), random(255), random(255));
  
	circles.push(new Circles(random(windowWidth), random(windowHeight), random(20), random(2), random(2)));
  }
  
  function draw() {
	// put drawing code here
  
	if(gobackbg == true){
		background(lerpColor(rbb, rb, john/150));
	} else {
		background(lerpColor(rb, rbb, john/150));
	}

	john ++;
  
	for(let i = start; i < numCircles + 1; i++){
	  circles[i].move();
	  if(circles[i].r > windowWidth + circles[i].x && circles[i].r > windowHeight + circles[i].y){
		start += 1;
	  }
	  if(numCircles - start > 50){
		start += 1;
	  }
	}
  
	if(frameCount % 150 == 0){
	  numCircles += 1;
	  circles.push(new Circles(mouseX, mouseY, random(20), random(2), random(2)));
	  john = 0;
	  if(gobackbg == true){
		gobackbg = false;
	  } else {
		gobackbg = true;
	  }
	}
  
  }
  
  function mouseClicked() {
	numCircles += 1;
	circles.push(new Circles(mouseX, mouseY, random(20), random(2), random(2)));
  }