/*

Anthony Scopacasa and Hannah

library resources used:
https://p5play.org/learn/index.html
https://github.com/Vamoss/p5.joystick

*/

var joystick;
var contro;

let posx = 200;
let posy = 200;
let monkey;
let wallHP = 5;
let wallHP2 = 5;
let spritex = 300;
let spritey = 400;
let spritex2 = 1200;
let spritey2 = 400;
let bananaP1;
let bananaP2;


function preload() {
  joystick = createJoystick();
  if(!joystick.calibrated())
    joystick.calibrate(true);
  player1 = new Sprite(spritex, spritey, 50, 50, 'dynamic');
  player1.img = 'player 2.png';
  player1.scale = .5
  player1.height = 50;
  player1.width = 50;
  player1.rotationLock = true;
  player2 = new Sprite(spritex2, spritey2, 50, 50, 'dynamic');
  player2.img = 'player 1.png';
  player2.scale = .5;
  player2.height = 50;
  player2.width = 50;
  player2.rotationLock = true;
  wallBreakable = new Sprite(700, 50, 150, 90, 'static');
  wallBreakable.img = 'breakable rocks.png';
  wallBreakable2 = new Sprite(700, 700, 150, 90, 'static');
  wallBreakable2.img = 'breakable rocks.png';
  bananaP1 = new Sprite(1080, 400, 50, 50, 'static');
  bananaP1.img = 'banana2.png';
  bananaP1.scale = .5;
  bananaP1.height = 50;
  bananaP1.width = 50;
  bananaP2 = new Sprite(1230, 130, 50, 50, 'static');
  bananaP2.img = 'banana1.png';
  bananaP2.scale = .5;
  bananaP2.height = 50;
  bananaP2.width = 50;
  bullet = new Sprite(player1.x - 500, player1.y, 30);
  bullet2 = new Sprite(player1.x - 500, player1.y, 30);
}

function setup() {
  bg = loadImage('bg-04.png');
  createCanvas(window.innerWidth, window.innerHeight);
  wallStatic = new Sprite(width / 1.39, height / 1.6, 210, 70, 'static');
  wallStatic2 = new Sprite(width / 1.77, height / 1.8, 400, 70, 'static');
  wallStatic3 = new Sprite(width / 2.5, height / 1.75, 170, 40, 'static');
  wallStatic4 = new Sprite(width / 2.14, height / 2.3, 120, 150, 'static');
  wallStatic5 = new Sprite(width / 1.66, height / 2.6, 290, 70, 'static');
  wallStatic6 = new Sprite(width / 1.278, height / 2.6, 25, 460, 'static');
  wallStatic7 = new Sprite(width / 1.1, height / 2.3, 50, 600, 'static');
  wallStatic8 = new Sprite(width / 1.187, height / 20, 150, 70, 'static');
  wallStatic9 = new Sprite(width / 2.3, height / 6, 1000, 70, 'static');
  wallStatic10 = new Sprite(width / 4.6, height / 2.65, 350, 80, 'static');
  wallStatic11 = new Sprite(width / 6, height / 2.05, 200, 80, 'static');
  wallStatic12 = new Sprite(width / 11, height / 3.7, 50, 80, 'static');
  wallStatic13 = new Sprite(width / 6.5, height / 1.37, 50, 290, 'static');
  wallStatic14 = new Sprite(width / 3.5, height / 1.24, 50, 160, 'static');
  wallStatic15 = new Sprite(width / 2.3, height / 1.24, 400, 160, 'static');
  wallStatic16 = new Sprite(width / 1.35, height / 1.24, 500, 50, 'static');
  wallStatic17 = new Sprite(width / 4.5, height / 1.06, 200, 50, 'static');
  wallStatic.visible = false;
  wallStatic2.visible = false;
  wallStatic3.visible = false;
  wallStatic4.visible = false;
  wallStatic5.visible = false;
  wallStatic6.visible = false;
  wallStatic7.visible = false;
  wallStatic8.visible = false;
  wallStatic9.visible = false;
  wallStatic10.visible = false;
  wallStatic11.visible = false;
  wallStatic12.visible = false;
  wallStatic13.visible = false;
  wallStatic14.visible = false;
  wallStatic15.visible = false;
  wallStatic16.visible = false;
  wallStatic17.visible = false;
  if (player1.collided(wallBreakable)) {
    spritex = 300;
    spritey = 400;
  }
}


function draw() {
  forrest();
  textSize(20);
  text("ControlsP1: D-Pad & X to shoot", 50, 50);
  text("ControlsP2: D-Pad & SpaceBar(sorry) to shoot", width / 1.5, 50);
  wallBreakable.textSize = '50';
  wallBreakable.textColor = 'red';
  wallBreakable.text = wallHP;
  wallBreakable2.text = wallHP2;
  wallBreakable2.textSize = '50';
  wallBreakable2.textColor = 'red';
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
    player2.remove();
  }
  if (bullet2.collided(player1)) {
    player1.remove();
  }
  if (player2.overlapping(bananaP1)) {
    bananaP1.remove();
    console.log("banana touch");
    textSize(100);
    text("PLAYER 2 WINS", width / 4, height / 2);
  }
  if (player1.overlapping(bananaP2)) {
    bananaP2.remove();
    console.log("banana touch");
    textSize(100);
    text("PLAYER 1 WINS", width / 4, height / 2);
  }
  player1.debug = mouse.pressing();
  player2.debug = mouse.pressing();
  wallBreakable.debug = mouse.pressing();
  bananaP2.debug = mouse.pressing();
  wallStatic.debug = mouse.pressing();
}

function forrest() {
  background(bg);

}


function playArea1() {
  if (joystick.getButtonPressedByIndex(0,12)) {
    player1.move(2, 'up', 20);
  }
  if (joystick.getButtonPressedByIndex(0,13)) {
    player1.move(2, 'down', 20);
  }
  if (joystick.getButtonPressedByIndex(0,15)) {
    //player1.move(2, 'right', 20);
    player1.applyForce(10, 0, player1.x, player1.y);
  }
  if (joystick.getButtonPressedByIndex(0,14)) {
    player1.move(2, 'left', 20);
  }
  if (contro[0] && contro[0].presses('a')) {
    bullet = new Sprite(player1.x + 70, player1.y, 30);
    bullet.img = 'coconut.png';
    bullet.scale = .5;
    bullet.vel.x = 10;
    bullet.life = 60;
  }  
}

function playArea2() {
  if (joystick.getButtonPressedByIndex(1, 12)) {
    player2.move(2, 'up', 10);
  }
  if (joystick.getButtonPressedByIndex(1, 13)) {
    player2.move(2, 'down', 10);
  }
  if (joystick.getButtonPressedByIndex(1, 15)) {
    player2.move(2, 'right', 10);
  }
  if (joystick.getButtonPressedByIndex(1, 14)) {
    player2.move(2, 'left', 10);
  }
  if (contro[1] && contro[1].presses('a')) {
    bullet2 = new Sprite(player2.x - 40, player2.y, 30);
    bullet2.img = 'coconut.png';
    bullet2.scale = .5;
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
