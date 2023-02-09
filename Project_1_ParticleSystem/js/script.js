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
let tree = []; //tree array
let monster = []; //monster shape array
let ghostBois = []; //ghost array
let ghostieBois = []; //more ghost arrays
let party = []; //party shapes array
let eyePupil = [];
let red = 0;//color controllers
let blue = 255;
let green = 255;
let diameterSize = 20;

function setup() {//creates the initial particle and canvas
    createCanvas(710, 400);
    for (let i = 0; i < 2; i++) {// puts the player ball in the array
        ball[i] = new Particle();
    }
    for (let i = 0; i < 50; i++) {//puts the trees in the array
        tree[i] = new forrest();
    }
    for (let i = 0; i < 2; i++) {//puts shapes in array
        monster[i] = new bigMonster();
    }
    for (let i = 0; i < 2; i++) {//puts party shapes in array
        party[i] = new PartyTime();
    }
    for (let i = 0; i < 2; i++) {//puts party shapes in array
        eyePupil[i] = new Pupil();
    }
}

function draw() {
    background(200);
    print(mouseX, mouseY);
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
            fill(255);
            circle(400, 200, 390);
            fill(255, 0, 0);
            circle(400, 200, 250);
            fill(0);
            circle(400, 200, 225);
            eyePupil[i].display();
            eyePupil[i].move();
            red = 255;
            blue = 0;
        }
        else {//reverts it to normal
            ball[i].diameter = 20;
            ball[i].speed = 10;
            blue = 255;
            red = 0;
        }
        if (mouseX >= width / 2 && mouseY <= height / 4) {//makes the ball green and nervous in the top left while ghosts surround him
            background(255, 0, 0)
            stroke(10);
            fill(200)
            rect(350, 0, 410, 100)
            ball[i].speed = 0;
            ball[i].display();
            blue = 0;
            green = 255;
            for (let i = 0; i < 500; i++) {//spawns the ghosts to surround the player area
                ghostBois[i] = new Ghosts();
                ghostBois[i].display();
                ghostieBois[i] = new Ghosts2();
                ghostieBois[i].display();
            }
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
        }
        if (mouseX <= width / 4 && mouseY >= height / 4) {//forrest area
            background(0, 150, 200, 100);
            fill(0, 120, 220);
            quad(0, 0, 710, 0, 710, 410, 400, 200);
            fill(0, 160, 210);
            quad(0, 0, 710, 0, 710, 410, 500, 200);
            fill(0, 200, 250);
            triangle(400, 0, 710, 0, 710, 400);
            for (let i = 0; i < tree.length; i++) {//shows the trees
                tree[i].display();
                for (let i = 0; i < ball.length; i++) { //puts the ball ontop of everything else
                    ball[i].display();
                }
            }
        }
        if (mouseX <= width / 1.25 && mouseX > width / 3.5 && mouseY >= height / 1.5) {//rainbow zone
            frameRate(10);
            background(random(255), random(255), random(255));
            party[i].move();
            party[i].display();
            red = random(255);
            blue = random(255);
            ball[i].display();
        } else {
            frameRate(30);
        }
        drop[i] = new fallingStars();//interpreted from https://thecodingtrain.com/challenges/78-simple-particle-system
        drop.push(drop[i]);
        for (let i = 0; i < drop.length; i++) {
            drop[i].update();
            if (drop[i].offScreen()) {//deletes the sweat drops
                drop.splice(i, 1);
            }
            if (mouseX >= width / 2 && mouseY <= height / 4) {//makes the ball green and nervous in the top right(add sweat drops, get this to stay in its corner)
                drop[i].display();
            }
            for (let i = 0; i < tree.length; i++) { //makes the trees move from the mouse
                tree[i].fearMouse();
            } 
        }
    }
    if (mouseX >= width / 1.25 && mouseY >= height / 4) {//spawns the monster shapes
        for (let i = 0; i < monster.length; i++) {
            monster[i].display();
            monster[i].move();
        }
    }
}

class Particle {
    constructor() {//makes the ball and controls speed and size
        this.x = mouseX;
        this.y = mouseY;
        this.speed = 10;
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
    update(){ //constantly checking the movement of the sweat drops
        this.x += this.vx;
        this.y += this.vy;
        this.alpha--
    }
    offScreen() {//deletes the drops when they are off screen
        return this.alpha < 50;
    }
    display() {//displays the drops
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
    fearMouse(){ //makes the trees move away
        if (dist(this.x, this.y, mouseX, mouseY) <= this.thresh) {
          this.move();
      }
    }
    move() {//makes them move smoothly
        this.y =  lerp(this.y, mouseY, -0.1);
        this.x =  lerp(this.x, mouseX, -0.1);
    }
    display() { //shows the trees on screen
      noStroke();
      fill(0, this.x, 0);
      ellipse(this.x, this.y, this.diameter);
    }
}
  
class bigMonster{
    constructor() {// the tools used to create monster
        this.x = 600;
        this.y = 30;
        this.x1 = 200;
        this.y1 = 100;
        this.x2 = 375;
        this.y2 = 345;
        this.x3 = 0;
        this.y3 = 0;
        this.x4 = 0;
        this.y4 = 300;
        this.x5 = 100;
        this.y5 = 300;
        this.x6 = 400;
        this.y6 = 300;
        this.x7 = 50;
        this.y7 = 50;
        this.x8 = 150;
        this.y8 = 100;
        this.x9 = 600;
        this.y9 = 250;
        this.x10 = 50;
        this.y10 = 100;
        this.speed = 2;
    }
    display() {// displays the monster shapes
        fill(0);
        quad(this.x, this.y, this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        quad(this.x4, this.y4, this.x5, this.y5, this.x6, this.y6, this.x7, this.y7);
        triangle(this.x8, this.y8, this.x9, this.y9, this.x10, this.y10);
    }
    move() {//makes it jittery
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        this.x1 += random(-this.speed, this.speed);
        this.y1 += random(-this.speed, this.speed);
        this.x2 += random(-this.speed, this.speed);
        this.y2 += random(-this.speed, this.speed);
        this.x3 += random(-this.speed, this.speed);
        this.y3 += random(-this.speed, this.speed);
        this.x4 += random(-this.speed, this.speed);
        this.y4 += random(-this.speed, this.speed);
        this.x5 += random(-this.speed, this.speed);
        this.y5 += random(-this.speed, this.speed);
        this.x6 += random(-this.speed, this.speed);
        this.y6 += random(-this.speed, this.speed);
        this.x7 += random(-this.speed, this.speed);
        this.y7 += random(-this.speed, this.speed);
        this.x8 += random(-this.speed, this.speed);
        this.y8 += random(-this.speed, this.speed);
        this.x9 += random(-this.speed, this.speed);
        this.y9 += random(-this.speed, this.speed);
        this.x10 += random(-this.speed, this.speed);
        this.y10 += random(-this.speed, this.speed);
    }

}

class Ghosts {
    constructor() {//the choas thatll go around the ball in the top right
        this.x = random(350);
        this.y = random(400);
        this.speed = 10;
        this.diameter = diameterSize;
    }
    move() {//makes it jittery
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
    display() {//displays the little guy
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.diameter);
    }
}

class Ghosts2 {
    constructor() {//the choas thatll go around the ball in the top right
        this.x = random(350,700);
        this.y = random(100,400);
        this.speed = 10;
        this.diameter = diameterSize;
    }
    move() {//makes it jittery
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
    display() {//displays the little guy
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.diameter);
    }
}

class PartyTime{
    constructor() {//pieces to make the triangles
        this.x0 = 0;
        this.y0 = 0;
        this.x700 = 700;
        this.x300 = 300;
        this.x750 = 750;
        this.x200 = 200;
        this.x400 = 400;
        this.x700 = 700;
        this.x500 = 500;
        this.y400 = 400;
        this.y100 = 100;
        this.y200 = 200;
        this.y300 = 300;
        this.speed = 10;
    }
    display() {//party time triangles
        quad(this.x0, this.y0, this.x700, this.y0, this.x400, this.y100, this.x300, this.y100);
        triangle(this.x0, this.y100, this.x0, this.y300, this.x200, this.y200);
        triangle(this.x750, this.y100, this.x750, this.y300, this.x500, this.y200);
    }
    move() {//makes it jittery
        this.x400 += random(-this.speed, this.speed);
        this.y100 += random(-this.speed, this.speed);
        this.x200 += random(-this.speed, this.speed);
        this.x500 += random(-this.speed, this.speed);
    }
}

class Pupil {
    constructor() {//makes the ball and controls speed and size
        this.x = 400;
        this.y = 200;
        this.speed = 2;
        this.diameter = 75;
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
}