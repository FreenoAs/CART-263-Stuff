/*

Anthony Scopacasa and Hannah Kim

library resources used:
https://p5play.org/learn/index.html
https://github.com/Vamoss/p5.joystick

*/

var joystick;//creates the joystick variable to allow for movement

let monkey;//initiates the monkey playes
let wallHP = 5;//hp for breakable rocks
let wallHP2 = 5;
let bananaP1;//initaites banana objects
let bananaP2;
let bananaSkyP1;
let bananaSkyP2;
let scoreP1 = 0;//tallys score
let scoreP2 = 0;
let player1HP = 3;//keeps track of player hp
let player2HP = 3;

  function preload() {
  joystick = createJoystick();//initiates the joystick connection
  if(!joystick.calibrated())
    joystick.calibrate(true);
  player1 = new Sprite(1100, 300, 50, 50, 'dynamic');//creates the first player (yellow)
  player1.img = 'assets/player 2.png';
  player1.scale = .5
  player1.height = 50;
  player1.width = 50;
  player1.rotationLock = true;
  player2 = new Sprite(1250, 200, 50, 50, 'dynamic');//creates the second player (green)
  player2.img = 'assets/player 1.png';
  player2.scale = .5;
  player2.height = 50;
  player2.width = 50;
  player2.rotationLock = true;
  wallBreakable = new Sprite(720, 220, 150, 90, 'static');//creates the breakable walls
  wallBreakable.img = 'assets/breakable rocks.png';
  wallBreakable2 = new Sprite(700, 505, 150, 90, 'static');//creates the collectable bananas
  wallBreakable2.img = 'assets/breakable rocks.png';
  bananaP1 = new Sprite(1080, 400, 50, 50, 'static');
  bananaP1.img = 'assets/banana2.png';
  bananaP1.scale = .5;
  bananaP1.height = 50;
  bananaP1.width = 50;
  bananaP2 = new Sprite(1230, 130, 50, 50, 'static');
  bananaP2.img = 'assets/banana1.png';
  bananaP2.scale = .5;
  bananaP2.height = 50;
  bananaP2.width = 50;
  bananaSkyP1 = new Sprite(-500, 230, 50, 50, 'static');//creates teh collectable bananas for the sky arena
  bananaSkyP1.img = 'assets/banana2.png';
  bananaSkyP1.scale = .5;
  bananaSkyP1.height = 50;
  bananaSkyP1.width = 50;
  bananaSkyP2 = new Sprite(-1000, 500, 50, 50, 'static');
  bananaSkyP2.img = 'assets/banana1.png';
  bananaSkyP2.scale = .5;
  bananaSkyP2.height = 50;
  bananaSkyP2.width = 50;
  bananaSpaceP1 = new Sprite(-500, 230, 50, 50, 'static');//creates the collectible bananas for the space arena
  bananaSpaceP1.img = 'assets/banana2.png';
  bananaSpaceP1.scale = .5;
  bananaSpaceP1.height = 50;
  bananaSpaceP1.width = 50;
  bananaSpaceP2 = new Sprite(-1000, 500, 50, 50, 'static');
  bananaSpaceP2.img = 'assets/banana1.png';
  bananaSpaceP2.scale = .5;
  bananaSpaceP2.height = 50;
  bananaSpaceP2.width = 50;
  bullet = new Sprite(player1.x - 1500, player1.y, 30);//initaites teh bullet object in order to be used for later use
  bullet2 = new Sprite(player1.x - 1500, player1.y, 30);
}

function setup() {
  bg1 = loadImage('assets/bg-04.png');//load the first map image
  createCanvas(window.innerWidth, window.innerHeight);
  forrestMap();//the forrest area
}

function forrestMap() {//creates the collision for the forrest map and renders it invisible in normal play
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
}

function skyMap() {//initates the collision for the sky map while moving around objects to puit them in place for the next round
  player1.x = 600;
  player1.y = 230;
  player2.x = 900;
  player2.y = 500;
  bananaP1.x = -1000;
  bananaP2.x = -1000;
  bananaSkyP1 = new Sprite(500, 230, 50, 50, 'static');
  bananaSkyP1.img = 'assets/banana2.png';
  bananaSkyP1.scale = .5;
  bananaSkyP1.height = 50;
  bananaSkyP1.width = 50;
  bananaSkyP2 = new Sprite(1000, 500, 50, 50, 'static');
  bananaSkyP2.img = 'assets/banana1.png';
  bananaSkyP2.scale = .5;
  bananaSkyP2.height = 50;
  bananaSkyP2.width = 50;
  wallHP = 5;
  player1HP = 3;
  player2HP = 3;
  wallBreakable = new Sprite(600, 440, 150, 90, 'static');
  wallBreakable.img = 'assets/breakable rocks.png';
  wallBreakable.x = 600;
  wallBreakable.y = 440;
  wallBreakable2.x = -1000;
  wallStaticSky = new Sprite(width / 2.56, height / 1.5, 240, 70, 'static');
  wallStaticSky2 = new Sprite(width / 1.646, height / 1.73, 400, 40, 'static');
  wallStaticSky3 = new Sprite(width / 2.03, height / 1.3, 70, 300, 'static');
  wallStaticSky4 = new Sprite(width / 1.59, height / 1.33, 80, 70, 'static');
  wallStaticSky5 = new Sprite(width / 2.25, height / 2.4, 530, 60, 'static');
  wallStaticSky6 = new Sprite(width / 1.2, height / 1.5, 50, 400, 'static');
  wallStaticSky7 = new Sprite(width / 1.29, height / 3.8, 250, 300, 'static');
  wallStaticSky8 = new Sprite(width / 2.13, height / 4.8, 120, 260, 'static');
  wallStaticSky9 = new Sprite(width / 2, height / 15, 1000, 70, 'static');
  wallStaticSky10 = new Sprite(width / 6.4, height / 2.75, 80, 400, 'static');
  wallStaticSky11 = new Sprite(width / 4.1, height / 1.63, 200, 80, 'static');
  wallStaticSky12 = new Sprite(width / 3.56, height / 3.5, 60, 150, 'static');
  wallStaticSky13 = new Sprite(width / 1.36, height / 1.45, 30, 180, 'static');
  wallStaticSky14 = new Sprite(width / 1.45, height / 1.28, 100, 20, 'static');
  wallStaticSky15 = new Sprite(width / 1.5, height / 1.04, 600, 50, 'static');
  wallStaticSky16 = new Sprite(width / 3, height / 4.5, 100, 50, 'static');
  wallStaticSky17 = new Sprite(width / 1.68, height / 4.35, 90, 40, 'static');
  wallStaticSky18 = new Sprite(width / 1.63, height / 3.3, 30, 150, 'static');
  wallStaticSky19 = new Sprite(width / 1.8, height / 2.5, 150, 90, 'static');
  wallStaticSky.visible = false;
  wallStaticSky2.visible = false;
  wallStaticSky3.visible = false;
  wallStaticSky4.visible = false;
  wallStaticSky5.visible = false;
  wallStaticSky6.visible = false;
  wallStaticSky7.visible = false;
  wallStaticSky8.visible = false;
  wallStaticSky9.visible = false;
  wallStaticSky10.visible = false;
  wallStaticSky11.visible = false;
  wallStaticSky12.visible = false;
  wallStaticSky13.visible = false;
  wallStaticSky14.visible = false;
  wallStaticSky15.visible = false;
  wallStaticSky16.visible = false;
  wallStaticSky17.visible = false;
  wallStaticSky18.visible = false;
  wallStaticSky19.visible = false;
}

function spaceMap() {//same thing as the sky map (creates collision and moves peices around)
  player1.x = 290;
  player1.y = 80;
  player2.x = 800;
  player2.y = 150;
  wallBreakable = new Sprite(600, 702, 150, 90, 'static');
  wallBreakable.img = 'assets/breakable rocks.png';
  wallBreakable2 = new Sprite(1000, 702, 150, 90, 'static');
  wallBreakable2.img = 'assets/breakable rocks.png';
  wallHP = 5;
  wallHP2 = 5;
  player1HP = 3;
  player2HP = 3;
  wallBreakable.x = 600;
  wallBreakable.y = 702;
  wallBreakable2.x = 1000;
  wallBreakable2.y = 702;
  bananaP1.x = -150;
  bananaP2.x = -700;
  bananaSkyP1.x = -1000;
  bananaSkyP2.x = -1000;
  bananaSpaceP1 = new Sprite(150, 80, 50, 50, 'static');
  bananaSpaceP1.img = 'assets/banana2.png';
  bananaSpaceP1.scale = .5;
  bananaSpaceP1.height = 50;
  bananaSpaceP1.width = 50;
  bananaSpaceP2 = new Sprite(700, 80, 50, 50, 'static');
  bananaSpaceP2.img = 'assets/banana1.png';
  bananaSpaceP2.scale = .5;
  bananaSpaceP2.height = 50;
  bananaSpaceP2.width = 50;
  wallStaticSpace = new Sprite(width / 1.456, height / 1.54, 350, 100, 'static');
  wallStaticSpace2 = new Sprite(width / 1.315, height / 2.2, 135, 330, 'static');
  wallStaticSpace3 = new Sprite(width / 2.62, height / 1.49, 155, 40, 'static');
  wallStaticSpace4 = new Sprite(width / 1.7, height / 3, 560, 140, 'static');
  wallStaticSpace5 = new Sprite(width / 2.6, height / 2.8, 290, 110, 'static');
  wallStaticSpace6 = new Sprite(width / 1.04, height / 2, 100, 900, 'static');
  wallStaticSpace7 = new Sprite(width / 2, height / 1.01, 1300, 50, 'static');
  wallStaticSpace8 = new Sprite(width / 1.3, height / 15, 670, 100, 'static');
  wallStaticSpace9 = new Sprite(width / 2.9, height / 1000, 900, 60, 'static');
  wallStaticSpace10 = new Sprite(width / 4.6, height / 1.63, 640, 55, 'static');
  wallStaticSpace11 = new Sprite(width / 9, height / 2.5, 210, 340, 'static');
  wallStaticSpace12 = new Sprite(width / 20, height / 9, 60, 150, 'static');
  wallStaticSpace13 = new Sprite(width / 13, height / 1.2, 60, 290, 'static');
  wallStaticSpace14 = new Sprite(width / 2.37, height / 7, 70, 160, 'static');
  wallStaticSpace.visible = false;
  wallStaticSpace2.visible = false;
  wallStaticSpace3.visible = false;
  wallStaticSpace4.visible = false;
  wallStaticSpace5.visible = false;
  wallStaticSpace6.visible = false;
  wallStaticSpace7.visible = false;
  wallStaticSpace8.visible = false;
  wallStaticSpace9.visible = false;
  wallStaticSpace10.visible = false;
  wallStaticSpace11.visible = false;
  wallStaticSpace12.visible = false;
  wallStaticSpace13.visible = false;
  wallStaticSpace14.visible = false;
}


function draw() {
  forrest();//loads in the first background
  textFont('Joystix');//creates the score text 
  textSize(50);
  fill(255, 0, 0);
  text('Yellow : ' + scoreP1, width / 4, 50);
  text('Green : ' + scoreP2, width / 1.7, 50);
  wallBreakable.textSize = '50';//creates the hp text for the walls
  wallBreakable.textColor = 'red';
  wallBreakable.text = wallHP;
  wallBreakable2.text = wallHP2;
  wallBreakable2.textSize = '50';
  wallBreakable2.textColor = 'red';
  fill(255);
  textSize(20);
  text(player1HP, player1.x - 20, player1.y - 20);//creates the hp text for the player
  text(player2HP, player2.x - 20, player2.y - 20);
  playArea1();//initiates the controls for each player
  playArea2();
  if (wallBreakable.collided(bullet)) {//allows the bullets to intereact with the breakable walls for each player
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
  if (bullet.collided(player2)) {//defeats the enemy player once they have been shot 3 times by moving them far off screen
    player2HP--
    if (player2HP == 0) {
      player2.x = 7000;
    }
  }
  if (bullet2.collided(player1)) {
    player1HP--
    if (player1HP == 0) {
      player1.x = -7000;
    }
  }
  if (player1.overlapping(bananaP2)) {//switches to the sky scene and removes the forrest scene collision when each player touches the enemy banana
    scoreP1++
    skyMap();
    sky();
    wallStatic.x = 5000;
    wallStatic2.x = 5000;
    wallStatic3.x = 5000;
    wallStatic4.x = 5000;
    wallStatic5.x = 5000;
    wallStatic6.x = 5000;
    wallStatic7.x = 5000;
    wallStatic8.x = 5000;
    wallStatic9.x = 5000;
    wallStatic10.x = 5000;
    wallStatic11.x = 5000;
    wallStatic12.x = 5000;
    wallStatic13.x = 5000;
    wallStatic14.x = 5000;
    wallStatic15.x = 5000;
    wallStatic16.x = 5000;
    wallStatic17.x = 5000;
  }
  if (player2.overlapping(bananaP1)) {
    scoreP2++
    skyMap();
    sky();
    wallStatic.x = 5000;
    wallStatic2.x = 5000;
    wallStatic3.x = 5000;
    wallStatic4.x = 5000;
    wallStatic5.x = 5000;
    wallStatic6.x = 5000;
    wallStatic7.x = 5000;
    wallStatic8.x = 5000;
    wallStatic9.x = 5000;
    wallStatic10.x = 5000;
    wallStatic11.x = 5000;
    wallStatic12.x = 5000;
    wallStatic13.x = 5000;
    wallStatic14.x = 5000;
    wallStatic15.x = 5000;
    wallStatic16.x = 5000;
    wallStatic17.x = 5000;
  }
  if (player2.overlapping(bananaSkyP1)) {//switches the scene to the space scene when each player touches the enemy banana while also removing the previous collision
    scoreP2++
    spaceMap();
    space();
    wallStaticSky.x = -5000;
    wallStaticSky2.x = -5000;
    wallStaticSky3.x = -5000;
    wallStaticSky4.x = -5000;
    wallStaticSky5.x = -5000;
    wallStaticSky6.x = -5000;
    wallStaticSky7.x = -5000;
    wallStaticSky8.x = -5000;
    wallStaticSky9.x = -5000;
    wallStaticSky10.x = -5000;
    wallStaticSky11.x = -5000;
    wallStaticSky12.x = -5000;
    wallStaticSky13.x = -5000;
    wallStaticSky14.x = -5000;
    wallStaticSky15.x = -5000;
    wallStaticSky16.x = -5000;
    wallStaticSky17.x = -5000;
    wallStaticSky18.x = -5000;
    wallStaticSky19.x = -5000;
  }
  if (player1.overlapping(bananaSkyP2)) {
    scoreP1++
    spaceMap();
    space();
    wallStaticSky.x = -5000;
    wallStaticSky2.x = -5000;
    wallStaticSky3.x = -5000;
    wallStaticSky4.x = -5000;
    wallStaticSky5.x = -5000;
    wallStaticSky6.x = -5000;
    wallStaticSky7.x = -5000;
    wallStaticSky8.x = -5000;
    wallStaticSky9.x = -5000;
    wallStaticSky10.x = -5000;
    wallStaticSky11.x = -5000;
    wallStaticSky12.x = -5000;
    wallStaticSky13.x = -5000;
    wallStaticSky14.x = -5000;
    wallStaticSky15.x = -5000;
    wallStaticSky16.x = -5000;
    wallStaticSky17.x = -5000;
    wallStaticSky18.x = -5000;
    wallStaticSky19.x = -5000;
  }
  if (player1.overlapping(bananaSpaceP2)) {//removes the previous collision and displays the victory screen for each respective player upon touching the enemy banana
    scoreP1++;
    bananaSpaceP1.x = -500;
    bananaSpaceP2.x = -500;
    wallBreakable.x = -500;
    wallBreakable2.x = -500;
    wallStaticSpace.x = -5000;
    wallStaticSpace2.x = -5000;
    wallStaticSpace3.x = -5000;
    wallStaticSpace4.x = -5000;
    wallStaticSpace5.x = -5000;
    wallStaticSpace6.x = -5000;
    wallStaticSpace7.x = -5000;
    wallStaticSpace8.x = -5000;
    wallStaticSpace9.x = -5000;
    wallStaticSpace10.x = -5000;
    wallStaticSpace11.x = -5000;
    wallStaticSpace12.x = -5000;
    wallStaticSpace13.x = -5000;
    wallStaticSpace14.x = -5000;
    bg1 = loadImage('assets/winner1.png');
  }
  if (player2.overlapping(bananaSpaceP1)) {
    scoreP2++;
    bananaSpaceP1.x = -500;
    bananaSpaceP2.x = -500;
    wallBreakable.x = -500;
    wallBreakable2.x = -500;
    wallStaticSpace.x = -5000;
    wallStaticSpace2.x = -5000;
    wallStaticSpace3.x = -5000;
    wallStaticSpace4.x = -5000;
    wallStaticSpace5.x = -5000;
    wallStaticSpace6.x = -5000;
    wallStaticSpace7.x = -5000;
    wallStaticSpace8.x = -5000;
    wallStaticSpace9.x = -5000;
    wallStaticSpace10.x = -5000;
    wallStaticSpace11.x = -5000;
    wallStaticSpace12.x = -5000;
    wallStaticSpace13.x = -5000;
    wallStaticSpace14.x = -5000;
    bg1 = loadImage('assets/winner2.png');
  }
}

function forrest() {//load the forrest background
  background(bg1);
}

function sky() {//loads the sky background
  bg1 = loadImage('assets/bg3.png');
}

function space() {//loads the space background
  bg1 = loadImage('assets/bg2.png')
}


function playArea1() {//initiates the controls for each individual player
  if (joystick.getButtonPressedByIndex(0,12)) {//movement
    player1.move(2, 'up', 20);
  }
  if (joystick.getButtonPressedByIndex(0,13)) {
    player1.move(2, 'down', 20);
  }
  if (joystick.getButtonPressedByIndex(0,15)) {
    player1.move(2, 'right', 20);
  }
  if (joystick.getButtonPressedByIndex(0,14)) {
    player1.move(2, 'left', 20);
  }
  if (contro[0] && contro[0].presses('b')) {//directional shooting
    bullet = new Sprite(player1.x + 70, player1.y, 30);
    bullet.img = 'assets/coconut.png';
    bullet.scale = .5;
    bullet.vel.x = 10;
    bullet.life = 60;
  }  
  if (contro[0] && contro[0].presses('x')) {
    bullet = new Sprite(player1.x - 70, player1.y, 30);
    bullet.img = 'assets/coconut.png';
    bullet.scale = .5;
    bullet.vel.x = -10;
    bullet.life = 60;
  }
  if (contro[0] && contro[0].presses('a')) {
    bullet = new Sprite(player1.x, player1.y + 70, 30);
    bullet.img = 'assets/coconut.png';
    bullet.scale = .5;
    bullet.vel.y = 10;
    bullet.life = 60;
  }
  if (contro[0] && contro[0].presses('y')) {
    bullet = new Sprite(player1.x, player1.y - 70, 30);
    bullet.img = 'assets/coconut.png';
    bullet.scale = .5;
    bullet.vel.y = -10;
    bullet.life = 60;
  }
  if (contro[0] && contro[0].presses('r')) {//directional dash
    player1.move(50, 'down', 10);
  }
  if (contro[0] && contro[0].presses('l')) {
    player1.move(50, 'up', 10);
  }
  if (contro[0] && contro[0].presses('rt')) {
    player1.move(50, 'right', 10);
  }
  if (contro[0] && contro[0].presses('lt')) {
    player1.move(50, 'left', 10);
  }
}

function playArea2() {
  if (joystick.getButtonPressedByIndex(1, 12)) {//movement
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
  if (contro[1] && contro[1].presses('b')) {//directional shooting
    bullet2 = new Sprite(player2.x + 40, player2.y, 30);
    bullet2.img = 'assets/coconut.png';
    bullet2.scale = .5;
    bullet2.vel.x = 10;
    bullet2.life = 60;
  }
  if (contro[1] && contro[1].presses('a')) {
    bullet2 = new Sprite(player2.x, player2.y + 40, 30);
    bullet2.img = 'assets/coconut.png';
    bullet2.scale = .5;
    bullet2.vel.y = 10;
    bullet2.life = 60;
  }
  if (contro[1] && contro[1].presses('x')) {
    bullet2 = new Sprite(player2.x - 70, player2.y, 30);
    bullet2.img = 'assets/coconut.png';
    bullet2.scale = .5;
    bullet2.vel.x = -10;
    bullet2.life = 60;
  }
  if (contro[1] && contro[1].presses('y')) {
    bullet2 = new Sprite(player2.x, player2.y - 40, 30);
    bullet2.img = 'assets/coconut.png';
    bullet2.scale = .5;
    bullet2.vel.y = -10;
    bullet2.life = 60;
  }
  if (contro[1] && contro[1].presses('r')) {//directional dash
    player2.move(50, 'down', 10);
  }
  if (contro[1] && contro[1].presses('l')) {
    player2.move(50, 'up', 10);
  }
  if (contro[1] && contro[1].presses('rt')) {
    player2.move(50, 'right', 10);
  }
  if (contro[1] && contro[1].presses('lt')) {
    player2.move(50, 'left', 10);
  }
}