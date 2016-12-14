var a;
var b;
var c;

var aAudio;
var bAudio;
var cAudio;

var currentLetter = 0;

var randletter = 1;

var aboolean = false;
var acounter = 0;

var bboolean = false;
var bcounter = 0;

var cboolean = false;
var ccounter = 0;

var message = "WHACK-A-HOLE. Press A, B, or C to begin.";

function setup() {

  createCanvas(1200, 400);


  aAudio = loadSound('assets/aAudio.wav');
  bAudio = loadSound('assets/bAudio.wav');
  cAudio = loadSound('assets/cAudio.wav');

  a = createSprite(200, 200);
  a.addAnimation("off", "assets/A_0.jpg");
  a.addAnimation("normal", "assets/A_0.jpg", "assets/A_1.jpg", "assets/A_2.jpg", "assets/A_3.jpg", "assets/A_4.jpg", "assets/A_5.jpg", "assets/A_6.jpg");
  a.addAnimation("reverse", "assets/A_6.jpg", "assets/A_5.jpg", "assets/A_4.jpg", "assets/A_3.jpg", "assets/A_2.jpg", "assets/A_1.jpg", "assets/A_0.jpg");
  a.mouseActive = true;

  b = createSprite(600, 200);
  b.addAnimation("off", "assets/B_1.jpg");
  b.addAnimation("normal", "assets/B_1.jpg", "assets/B_2.jpg", "assets/B_3.jpg", "assets/B_4.jpg", "assets/B_5.jpg", "assets/B_6.jpg");
  b.addAnimation("reverse", "assets/B_6.jpg", "assets/B_5.jpg", "assets/B_4.jpg", "assets/B_3.jpg", "assets/B_2.jpg", "assets/B_1.jpg");
  b.mouseActive = true;

  c = createSprite(1000, 200);
  c.addAnimation("off", "assets/C_1.jpg");
  c.addAnimation("normal", "assets/C_1.jpg", "assets/C_2.jpg", "assets/C_3.jpg", "assets/C_4.jpg", "assets/C_5.jpg", "assets/C_6.jpg");
  c.addAnimation("reverse", "assets/C_6.jpg", "assets/C_5.jpg", "assets/C_4.jpg", "assets/C_3.jpg", "assets/C_2.jpg", "assets/C_1.jpg");
  c.mouseActive = true;

  a.onMousePressed = function() {
    if (currentLetter == 1) {
      aboolean = true
    }
    if (aAudio.isPlaying()) {
      aAudio.stop();
    } else {
      aAudio.play();
    }
  }

  b.onMousePressed = function() {
    if (currentLetter == 2) {
      bboolean = true;
    }
    if (aAudio.isPlaying()) {
      bAudio.stop();
    } else {
      bAudio.play();
    }
  }

  c.onMousePressed = function() {
    if (currentLetter == 3) {
      cboolean = true;
    }
    if (aAudio.isPlaying()) {
      cAudio.stop();
    } else {
      cAudio.play();
    }
  }

  randletter = int(random(1, 4));
  currentLetter = randletter;
}

function draw() {

  // background(255, 255, 255);
  // background(255);
  //fill(0);

  drawSprites();
  a.animation.looping = false;
  if (aboolean == true || randletter == 1) {
    aboolean = false;
    acounter++;
    a.animation.rewind();
    // console.log(acounter);
    if (acounter == 1) {
      randletter = 0;
      a.changeAnimation("normal");
    }
    if (acounter == 2) {
      a.changeAnimation("reverse");
      randletter = int(random(1, 4));
      currentLetter = randletter;
      acounter = 0;
    }

  }
  b.animation.looping = false;
  if (bboolean == true || randletter == 2) {
    bboolean = false;
    bcounter++;
    b.animation.rewind();
    if (bcounter == 1) {
      randletter = 0;

      b.changeAnimation("normal");
    }
    if (bcounter == 2) {
      b.changeAnimation("reverse");
      randletter = int(random(1, 4));
      currentLetter = randletter;
      bcounter = 0;
    }
  }
  c.animation.looping = false;
  if (cboolean == true || randletter == 3) {
    cboolean = false;
    ccounter++;
    c.animation.rewind();
    if (ccounter == 1) {
      randletter = 0;
      c.changeAnimation("normal");
    }
    if (ccounter == 2) {
      c.changeAnimation("reverse");
      randletter = int(random(1, 4));
      currentLetter = randletter;
      ccounter = 0;
    }
  }

  textSize(32);
  text(message, 75, 30,700,100);
}
