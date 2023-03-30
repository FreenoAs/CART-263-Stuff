/*

Anthony Scopacasa and Hannah

library resources used:
https://p5play.org/learn/index.html
https://github.com/Vamoss/p5.joystick

*/

var joystick;

let posx = 200;
let posy = 200;
let monkey;
let player1;
let bullet;
let wallBreakable;
let wallBreakable2;
let wallStatic;
let wallStatic2;
let wallStatic3;
let player2;
let wallHP = 5;
let wallHP2 = 5;
let spritex = 300;
let spritey = 400;
let spritex2 = 1200;
let spritey2 = 400;

function preload() {
  player1 = new Sprite(spritex, spritey, 50, 50, 'kinematic');
  player1.img = 'monkeyleft.png';
  player1.height = 100;
  player1.width = 60;
  player2 = new Sprite(spritex2, spritey2, 50, 50, 'kinematic');
  player2.img = 'monkeyright.png';
  player2.height = 100;
  player2.width = 60;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  wallBreakable = new Sprite(width / 2, height / 10, 50, 500, 'static');
  wallStatic = new Sprite(width / 1.5, height / 2, 50, 500, 'static');
  wallStatic2 = new Sprite(width / 3, height / 2, 50, 500, 'static');
  wallBreakable2 = new Sprite(width / 2, height / 1.05, 50, 500, 'static');
  // wallStatic3 = new Sprite(width / 1.05, height / 2, 50, 1000, 'static');
  bullet1();
  bullet2();
  if (player1.colliding(wallBreakable)) {
    spritex = 300;
    spritey = 400;
  }
  joystick = createJoystick();
  if(!joystick.calibrated())
    joystick.calibrate(true);
}

function bullet1() {
  bullet = new Sprite(player1.x - 500, player1.y, 30);
  bullet.overlaps(bullet);
}

function bullet2() {
  bullet2 = new Sprite(player1.x - 500, player1.y, 30);
  bullet2.overlaps(bullet);
}

function draw() {
  background(100);
  textSize(20);
  text("ControlsP1: D-Pad & X to shoot", 50, 50);
  text("ControlsP2: D-Pad & SpaceBar(sorry) to shoot", width/1.5, 50);
  wallBreakable.text = wallHP;
  wallBreakable2.text = wallHP2;
  playArea1();
  playArea2();
  if (wallBreakable.collided(bullet)) {
    wallHP--
    bullet.remove();
    if (wallHP == 0) {
      wallBreakable.remove();
    } 
  }
  if (wallBreakable.collided(bullet2)) {
    wallHP--
    bullet2.remove();
    if (wallHP == 0) {
      wallBreakable.remove();
    } 
  }
  if (wallBreakable2.collided(bullet)) {
    wallHP2--
    bullet.remove();
    if (wallHP2 == 0) {
      wallBreakable2.remove();
    } 
  }
  if (wallBreakable2.collided(bullet2)) {
    wallHP2--
    bullet2.remove();
    if (wallHP2 == 0) {
      wallBreakable2.remove();
    } 
  }
  if (bullet.collided(player2)) {
    textSize(100);
    text("PLAYER 1 WINS", width / 4, height / 2);
    player2.remove();
  }
  if (bullet2.collided(player1)) {
    textSize(100);
    text("PLAYER 2 WINS", width / 4, height / 2);
    player1.remove();
  }
  player1.collide(wallBreakable);
  player1.collide(wallBreakable2);
  player1.collide(wallStatic);
  player1.collide(wallStatic2);
  player2.collide(wallBreakable);
  player2.collide(wallBreakable2);
  player2.collide(wallStatic);
  player2.collide(wallStatic2);
  player1.debug = mouse.pressing();
  player2.debug = mouse.pressing();
}


function playArea1() {
  if (joystick.getButtonPressedByIndex(0,12)) {
    player1.y--;
  }
  if (joystick.getButtonPressedByIndex(0,13)) {
    player1.y++;
  }
  if (joystick.getButtonPressedByIndex(0,15)) {
    player1.x++;
  }
  if (joystick.getButtonPressedByIndex(0,14)) {
    player1.x--;
  }
  if (contro.presses('a')) {
    bullet = new Sprite(player1.x + 70, player1.y, 30);
    bullet.vel.x = 10;
    bullet.life = 60;
  }  
}

function playArea2() {
  if (joystick.getButtonPressedByIndex(1,12)) {
    player2.y--;
  }
  if (joystick.getButtonPressedByIndex(1,13)) {
    player2.y++;
  }
  if (joystick.getButtonPressedByIndex(1,15)) {
    player2.x++;
  }
  if (joystick.getButtonPressedByIndex(1,14)) {
    player2.x--;
  }
  // if (kb.pressing('up')) {
  //   console.log("up");
  //   player2.y--;
  // }
  // if (kb.pressing('down')) {
  //   player2.y++;
  // }
  // if (kb.pressing('right')) {
  //   player2.x++;
  // }
  // if (kb.pressing('left')) {
  //   player2.x--;
  // }
  if (kb.presses('space') || contro.presses('b')) {
    bullet2 = new Sprite(player2.x - 40, player2.y, 30);
    bullet2.vel.x = -10;
    bullet2.life = 60;
  }  
}

function bulletTimeout1() {
  bullet.remove();
}

function bulletTimeout2() {
  bullet2.remove();
}

function onJoystick(e) {
  console.log("onJoystick", e);
}
