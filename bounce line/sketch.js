function setup(){
  resizeCanvas(500,500);
  background(255, 0, 0);
  
}
var ball = {
  //this is the position of the ball
  position: {x:0, y:150 },
  
  //this is the speed of the ball
  speed: {x:2, y:5},
  

 //this is the drawing function of the ball
 draw: function() {
   //bottom
  if(this.position.y > height) {
    this.speed.y *= -1;
  }
  
  //right side
  if(this.position.x > height){
    this.speed.x *=-1;
  }
  
  //top
  if(this.position.y < 0){
    this.speed.y *= -1;
  }
  
  //left side
  if(this.position.x < 0){
    this.speed.x *=-1;
  }
 
  fill(250,150,150);
  noStroke(0);
  
  // this.position.x = this.position.x + this.speed.x;
  // this.position.y = this.position.y + this.speed.y;
  this.position.x += this.speed.x;
  this.position.y += this.speed.y;
  ellipse(this.position.x ,this.position.y, 10, 10);
  
  // command + 4 + /
  

  }
};

function draw(){
 
 ball.draw()
 
 
  }