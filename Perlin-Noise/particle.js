function Particle(){
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0 ,0);

  this.maxSpeed = 5;
  this.lastPos = this.pos.copy();

  this.h = 0;
  this.s = 1;

  this.move = function(vectors){
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var i = x + y * columns;
    var force = vectors[i];
    this.acc.add(force);
  }

  this.updateLastPos = function(){
    this.lastPos.x = this.pos.x;
    this.lastPos.y = this.pos.y;
  }

  this.show = function(){
    stroke(this.h, this.s, 255, 50);
    this.h++;
    this.s += 20;
    if(this.h > 255) this.h = 0;
    if(this.s > 255) this.s = 1;
    line(this.pos.x, this.pos.y, this.lastPos.x, this.lastPos.y);
    this.updateLastPos();
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.limits = function(){
    if(this.pos.x > width){
      this.pos.x = 0;
      this.updateLastPos();
    }
    if(this.pos.x < 0){
      this.pos.x = width;
      this.updateLastPos();
    }
    if(this.pos.y > height){
      this.pos.y = 0;
      this.updateLastPos();
    }
    if(this.pos.y < 0){
      this.pos.y = height;
      this.updateLastPos();
    }
  }
}
