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
let player2;
let wallHP = 20;
let bullet;
let wall;
let spritex = 300;
let spritey = 400;
let spritex2 = 300;
let spritey2 = 400;

function preload() {
  player1 = new Sprite(spritex, spritey, 50, 50, 'kinematic');
  player1.img = 'monkeT.jpg';
  player1.diameter = 70;
  player1.scale = .05;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  player2 = new Sprite(spritex2, spritey2, 50, 50, 'kinematic');
  wall = new Sprite(width / 1.05, height / 2, 50, 1000, 'static');
  if (player1.colliding(wall)) {
    spritex = 300;
    spritey = 400;
  }
  joystick = createJoystick();
  if(!joystick.calibrated())
    joystick.calibrate(true);
}

function draw(){
  background(100);
  playArea1();
  damage();
  console.log(wallHP);
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
    bullet = new Sprite(player1.x + 40, player1.y, 30);
    bullet.vel.x = 10;
    if (bullet.collides(wall)) {
      wallHp--
      bullet.visible = false;
      console.log('hit');
      if (wallHP == 0) {
        wall.remove();
      } 
    }
  }  
}

// function playArea2() {
//   if (joystick.getButtonPressedByIndex(0,12)) {
//     player2.y--;
//   }
//   if (joystick.getButtonPressedByIndex(0,13)) {
//     player2.y++;
//   }
//   if (joystick.getButtonPressedByIndex(0,15)) {
//     player2.x++;
//   }
//   if (joystick.getButtonPressedByIndex(0,14)) {
//     player2.x--;
//   }
//   if (contro.presses('a')) {
//     bullet = new Sprite(player1.x + 40, player1.y, 30);
//     bullet.vel.x = 10;
//   }
// }

function damage() {
  
}

function onJoystick(e) {
  console.log("onJoystick", e);
}

