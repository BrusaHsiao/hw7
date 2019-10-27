var mySound;
var my2Sound;

function preload() {
  mySound = loadSound("eat.wav");
  my2Sound = loadSound("Ding.wav")
}

function setup() {
  createCanvas(400, 400);
}

var ballX = 450
var ballSpeed = 3
var TotalPoint = 0

function draw() {
  background(239, 247, 126);
  fill(138, 80, 33);
  noStroke();
  ellipse(120, 400, 300); //belly
  fill(138, 80, 33);
  noStroke();
  ellipse(40, 330, 250); //neck

  fill(0);
  rect(30, 360, 10, 20, 10);
  fill(0);
  rect(17, 363, 10, 20, 10);
  fill(0);
  rect(4, 360, 10, 20, 10);
  fill(74, 48, 10);
  ellipse(20, 350, 55, 55);
  fill(138, 80, 33);
  ellipse(20, 325, 55, 55);

  //left paw

  fill(28, 17, 1);
  rect(165, 260, 10, 20, 10);
  fill(28, 17, 1);
  rect(150, 263, 10, 20, 10);
  fill(28, 17, 1);
  rect(135, 260, 10, 20, 10);
  fill(74, 48, 10);
  ellipse(155, 260, 55, 30);

  //right paw

  fill(163, 128, 80);
  noStroke();
  ellipse(35, 150, 40); //right ear
  fill(138, 80, 33);
  noStroke();
  ellipse(20, 220, 150); //head
  fill(176, 134, 76);
  noStroke();
  rect(50, 160, 50, 50, 20); //boop
  fill(0);
  noStroke();
  rect(70, 160, 20, 10, 20); //nose
  fill(163, 128, 80);
  noStroke();
  ellipse(3, 150, 40); //left ear
  fill(138, 80, 33);
  noStroke();
  ellipse(19, 173, 40); //blocker

  ballSpeed = ballSpeed + 0.004

  textSize(32);
  text("Total Points: " + TotalPoint, 10, 30);

  if (mouseIsPressed && 90 <= ballX && ballX <= 130) {
    TotalPoint = TotalPoint + 2;
    fill(77, 9, 17);
    noStroke();
    ellipse(80, 187, 20, 20); //mouse open
    ballX = 450
    textSize(32);
    text('cool', 300, 100);
    mySound.play();
  } else {
    rect(73, 180, 13, 5);
  }

  if (mouseIsPressed && 70 <= ballX && ballX <= 90) {
    TotalPoint = TotalPoint + 4;
    fill(77, 9, 17);
    noStroke();
    ellipse(80, 187, 20, 20); //mouse open
    ballX = 450
    textSize(32);
    text('perfect', 300, 100);
    mySound.play();
  } else {
    rect(73, 180, 13, 5);
  }
  if (mouseIsPressed && 50 <= ballX && ballX <= 70) {
    TotalPoint = TotalPoint + 2;
    fill(77, 9, 17);
    noStroke();
    ellipse(80, 187, 20, 20); //mouse open
    ballX = 450
    textSize(32);
    text('cool', 300, 100);
    mySound.play();
  } else {
    rect(73, 180, 13, 5);
  }

  fill(0);
  noStroke();
  ellipse(25, 173, 20);
  fill(138, 80, 33);
  noStroke();
  ellipse(25, 168, 20); //eye close


  ellipse(ballX, 187, 20);
  ballX = ballX - ballSpeed
  if (ballX < 50) {
    ballX = 450
    fill(0);
    noStroke();
    ellipse(25, 173, 20);
    fill(225);
    noStroke();
    ellipse(27, 173, 10); //open eye "gameover"
    noLoop();
  }

  if (TotalPoint >= 1 && TotalPoint < 20) {
    fill(99, 31, 10)
    strokeWeight(2);
    stroke(5);
    line(120, 90, 125, 98);
    line(150, 90, 145, 98);

    ellipse(135, 109, 25);
    ellipse(135, 130, 40, 50);
    line(135, 105, 135, 155);
  }
  if (TotalPoint >= 20 && TotalPoint < 40) {
    fill(45, 69, 21);
    strokeWeight(2);
    stroke(5);
    triangle(120, 130, 160, 150, 160, 100);
    fill(69, 21, 21);
    triangle(160, 150, 160, 100, 260, 130);
    triangle(260, 130, 280, 150, 290, 110);
  }

  if (TotalPoint >= 40 && TotalPoint < 71) {
    fill(45, 69, 21);
    strokeWeight(2);
    stroke(5);
    fill(217, 168, 104);
    ellipse(180, 130, 90);
    fill(232, 161, 46);
    ellipse(180, 130, 75);
    fill(161, 55, 6);
    ellipse(174, 110, 14);
    ellipse(156, 129, 14);
    ellipse(177, 130, 15);
    ellipse(197, 120, 15);
    ellipse(197, 146, 15);
    ellipse(165, 147, 15);
  }
  if (TotalPoint > 19 && TotalPoint < 22 && mouseIsPressed) {
    my2Sound.play();
  }
  if (TotalPoint > 39 && TotalPoint < 42 && mouseIsPressed) {
    my2Sound.play();
  }
  if (TotalPoint >= 71) {
    text('YOU WIN!', 200, 200);
    fill(0);
    noStroke();
    ellipse(25, 173, 20);
    fill(138, 80, 33);
    noStroke();
    ellipse(25, 178, 20);
    my2Sound.play();
    noLoop();
  }
}
