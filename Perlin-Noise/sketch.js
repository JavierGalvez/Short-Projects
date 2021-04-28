
var scl = 10;
var columns, rows;

var z = 0;
var inc = 0.1;

var particles = [];
var vectorField;

function setup(){
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  colorMode(HSB, 255);

  columns = floor(width / scl);
  rows = floor(height / scl);
  vectorField = new Array(columns * rows);

  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }

  background(0);

}

function draw(){
  var y = 0;
  for(var i = 0; i < rows; i++){
    var x = 0;
    for(var j = 0; j < columns; j++){
      var k =  j + i * columns;
      var angle = noise(x,y,z) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      vectorField[k] = v;
      x += inc;
    }
    y += inc;
    z += 0.00001;
  }


  for(var i = 0; i < particles.length; i++){
    particles[i].move(vectorField);
    particles[i].update();
    particles[i].limits();
    particles[i].show();
  }

}

function mouseClicked(){
  background(0);
  delete particles;
  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }
}
