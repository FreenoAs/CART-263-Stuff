/**
Exploration and Curiosity
Anthony Scopacasa

This is a template. You must fill in the title,
author, and this description to match your project!
*/


/**
Description of preload
*/
let ball = []; // particle one array
let drop = []; // particle two array
let tree = [];
let red = 0;//color controllers
let blue = 255;
let green = 255;
let dropX = 0;
let dropY = 0;
let diameterSize = 20;

function setup() {//creates the initial particle and canvas
    createCanvas(710, 400);
    for(let i = 0; i < 2; i++){
        ball[i] = new Particle();
    } for (let i = 0; i < 50; i++){
        tree[i] = new forrest();
    }
}

function draw() {
    background(200);
    for (let i = 0; i < ball.length; i++) {//allows the fabrication of the ball
        ball[i].move();
        ball[i].display();
        ball[i].follow();
        if (mouseX <= width / 4 && mouseY <= height / 4) {//makes the ball freak out and red in the top left
            fill(0);
            rect(0,0, width, height);
            ball[i].diameter = 100;
            ball[i].move();
            ball[i].display();
            ball[i].speed = 100;
            red = 255;
            blue = 0;
        }
        else {//reverts it to normal
            ball[i].diameter = 20;
            ball[i].speed = 2;
            blue = 255;
            red = 0;
        }
        if (mouseX >= width / 2 && mouseY <= height / 4) {//makes the ball green and nervous in the top right(add sweat drops)
            background(255,0,0)
            ball[i].speed = 0;
            ball[i].display();
            blue = 0;
            green = 255;
        }
        else {
            green = 0;
        }
        if (mouseX >= width / 1.25 && mouseY >= height / 4) {//smol little guy
            background(255);
            ball[i].diameter = 5;
            ball[i].move();
            ball[i].speed = 10;
            ball[i].display();
            blue = 255;
        }
        if (mouseX <= width / 4 && mouseY >= height / 4) {//forrest area
            background(0, 150, 200);
            for (let i = 0; i < tree.length; i++) {
                tree[i].display();
                for (let i = 0; i < ball.length; i++) {
                    ball[i].display();
                }
            }
        }
        if (mouseX <= width / 1.25 && mouseX > width / 3.5 && mouseY >= height / 1.5) {
            red = 255;
            blue = 255;
        }
        drop[i] = new fallingStars();//interpreted from https://thecodingtrain.com/challenges/78-simple-particle-system
        drop.push(drop[i]);
        for (let i = 0; i < drop.length; i++) {
            drop[i].update();
            if (drop[i].offScreen()) {
                drop.splice(i, 1);
            }
            if (mouseX >= width / 2 && mouseY <= height / 4) {//makes the ball green and nervous in the top right(add sweat drops, get this to stay in its corner)
                drop[i].display();
            }
            for (let i = 0; i < tree.length; i++) {
                tree[i].fearMouse();
            } if (tree.x >= width / 4 && tree.x <= 0 && tree.y >= height / 1.5 && tree.y <= 0) {
                tree[i].stop();
            }
        }
    }
}

class Particle {
    constructor() {//makes the ball and controls speed and size
        this.x = mouseX;
        this.y = mouseY;
        this.speed = 1;
        this.diameter = diameterSize;
    }
    move() {//makes it jittery
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
    display() {//displays the little guy
        noStroke();
        fill(red, green, blue);
        ellipse(this.x, this.y, this.diameter);
    }
    follow() { //makes the lil guy follow the mouse
        this.x = mouseX;
        this.y = mouseY;
    }
}

class fallingStars {//i want this to be sweat droplets (intrpreted from https://thecodingtrain.com/challenges/78-simple-particle-system)
    constructor() {
        this.x = mouseX -10;
        this.y = mouseY - 10;
        this.vx = random(-1, 1);
        this.vy = random(5, 1);
        this.alpha = 100
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha--
    }
    offScreen() {
        return this.alpha < 50;
    }
    display() {
        fill(100, 100, 170, this.alpha);
        rect(this.x, this.y, 10, 30);
    }
    move() {//makes it jittery
        this.x = dropX;
        this.y = dropY;
    }
    follow() { //makes the lil guy follow the mouse
        this.x = mouseX;
        this.y = mouseY;
    }
}

class forrest { //interpreted from class notes
    constructor() {
      this.x = random(150);
      this.y = random(100,400);
      this.speed = 20;
      this.diameter = random(50);
      this.thresh = 30;
    }
    fearMouse(){ 
        if (dist(this.x, this.y, mouseX, mouseY) <= this.thresh) {
          this.move();
      }
    }
    move() {
        this.y =  lerp(this.y, mouseY, -0.1);
        this.x =  lerp(this.x, mouseX, -0.1);
    }
    stop() {
        this.y = 0;
        this.x = 0;
    }
    display() {
      noStroke();
      fill(0, this.x, 0);
      ellipse(this.x, this.y, this.diameter);
    }
}
  