function setup(){
  createCanvas(800, 600);
  pixelDensity(1);
  loadPixels();
  for(var i = 0; i < width; i++){
    for(var j = 0; j < height; j++){
      var x0 = map(i, 0, width, -2.5, 1);
      var y0 = map(j, 0, height, -1, 1);

      var x = 0;
      var y = 0;

      var iteration = 0;
      var maxIterations = 1000;
      while(x*x + y*y < 256 && iteration < maxIterations){
        var aux = x*x - y*y + x0;
        y = 2 * x * y + y0;
        x = aux;
        iteration++;
      }

      if(iteration < maxIterations){
        var log_zn = log(x*x + y*y) / 2
        var nu = log( log_zn / log(2) ) / log(2);
        iteration = iteration + 1 - nu;
      }

      var color = linearInterpolate(iteration, iteration+1 , iteration % 1);

      var idx = (i + j * width) * 4;
      pixels[idx] = color;
      pixels[idx + 1] = color;
      pixels[idx + 2] = color;
      pixels[idx + 3] = 255;
    }
  }
  updatePixels();
}

function linearInterpolate(a, b, c){
  return (1.0 - c) * a + c * b;
}
