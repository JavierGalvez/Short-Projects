
function setup(){
  createCanvas(800, 700);

  nslider = createSlider(1,7,4);
  dslider = createSlider(1,9,1);
  ampslider = createSlider(50,300,175);
  stslider = createSlider(1,25,5);
  slidersPos();

  // This probably should be done with HTML/CSS and not here
  slidersTexts();
  rhodoneaDescription();
}

function draw(){
  background(255);

  var n = nslider.value();
  var d = dslider.value();
  var k = n/d;
  var amplitude = ampslider.value();

  updateValues();

  beginShape();
  for(var i = 0; i < TWO_PI * 10; i += 0.01){
    var x = amplitude * cos(k*i)*cos(i) + width / 2;
    var y = amplitude * cos(k*i)*sin(i) + height / 2;
    strokeWeight(stslider.value());
    vertex(x,y);
  }
  endShape();
}

function updateValues(){
  nvalue.html(nslider.value());
  dvalue.html(dslider.value());
  ampvalue.html(ampslider.value());
  stvalue.html(stslider.value());
}

function slidersPos(){
  nslider.position(850, 200);
  dslider.position(850, 250);
  ampslider.position(850, 300);
  stslider.position(850, 350);
}

function slidersTexts (){
  nvalue = createP('');
  dvalue = createP('');
  ampvalue = createP('');
  stvalue = createP('');

  ntext = createP('N value');
  dtext = createP('D value');
  amptext = createP('Amplitude');
  sttext = createP('Pen Width');

  nvalue.position(1050, 185);
  ntext.position(920, 160);

  dvalue.position(1050, 235);
  dtext.position(920, 210);

  ampvalue.position(1050, 285);
  amptext.position(915, 260);

  stvalue.position(1050, 335);
  sttext.position(915, 310);
}

function rhodoneaDescription(){
  var des = document.getElementById("description");
  des.style.position = "absolute";
  des.style.left = "850px";
  des.style.top = "400px";

  var header = document.getElementById("header");
  header.style.position = "absolute";
  header.style.left = "850px";
  header.style.top = "50px";
}
