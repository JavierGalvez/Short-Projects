var axiom = 'X';
var sentence = axiom;
var len = 200;
var angle = 25;


var generation = 0;
var maxgeneration = 6;
var cycle = true;
var button;

function setup(){
  createCanvas(800, 550);
  background(51);
  angle = radians(angle);
  document.getElementById('sentencebox').value = axiom;
  document.getElementById('copybutton').onclick = copySentence;
  document.getElementById('stopbutton').onclick = stop;
  frameRate(1);
  turtle();
}

function draw(){
  if(cycle)
    rules();
}

function rules(){
  if(generation == maxgeneration){
    reset();
  } else{
    len /= 2;
    generation++;
    newSentence = '';
    for(var i = 0; i < sentence.length; i++){
      c = sentence.charAt(i);
      if(c == 'X'){
        newSentence += 'F[-X][X]F[-X]+FX';
      }
      else if(c == 'F'){
        newSentence += 'FF';
      }
      else{
        newSentence += c;
      }
      if(generation == maxgeneration)
        stop();
    }
    sentence = newSentence;
    document.getElementById('sentencebox').value = sentence;
    turtle();
  }
}

function turtle(){
  showG();
  stroke(255);
  translate(225, 500);
  rotate(angle);
  for(var i = 0; i < sentence.length; i++){
    c = sentence.charAt(i);
    if(c == 'F'){
      line(0, 0, 0, -len);
      translate(0, -len);
    }
    else if(c == '+'){
      rotate(angle);
    }
    else if(c == '-'){
      rotate(-angle);
    }
    else if(c == '['){
      push();
    }
    else if(c == ']'){
      pop();
    }
  }
}

function showG(){
  background(51);
  noStroke();
  fill(255);
  textSize(24);
  text('Generation n = ' + generation, 10, 25);
}

function reset(){
  sentence = axiom;
  generation = 0;
  len = 200;
  document.getElementById('sentencebox').value = sentence;
  turtle();
}

function stop(){
  if(cycle){
    cycle = false;
    document.getElementById('stopbutton').innerHTML = "Run";
  }
  else{
    cycle = true;
    document.getElementById('stopbutton').innerHTML = "Stop";
  }
}

function copySentence(){
  var copytext = document.getElementById('sentencebox');
  copytext.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}
