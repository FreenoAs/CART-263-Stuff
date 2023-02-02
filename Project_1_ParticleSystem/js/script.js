/**
Exploration and curiosity
Anthony Scopacasa

This is a template. You must fill in the title,
author, and this description to match your project!
*/


/**
Description of preload
*/
let ball = []; // Declare array
let red = 0;//color controllers
let blue = 255;
let green = 255;

function setup() {//creates the initial particle and canvas
    createCanvas(710, 400);
    for(let i = 0; i < 2; i++){
        ball[i] = new Particle();
    }
}

function draw() {
    background(200);
    for (let i = 0; i < ball.length; i++) {//allows the fabrication of the ball
        ball[i].move();
        ball[i].display();
        ball[i].follow();
        if (mouseX <= width / 4 && mouseY <= height / 4) {//makes the ball freak out and red in the top left
            ball[i].diameter = 100;
            ball[i].speed = 100;
            red = 255;
            blue = 0;
        } else {//reverts it to normal
            ball[i].diameter = 20;
            ball[i].speed = 5;
            blue = 255;
            red = 0;
        }if (mouseX >= width / 2 && mouseY <= height / 4) {//makes the ball green and nervous in the top right(add sweat drops)
            blue = 0;
            green = 255;
        } else {
            green = 0;
        }if (mouseX >= width / 1.25 && mouseY >= height / 4) {//smol little guy
            ball[i].diameter = 5;
            ball[i].speed = 10;
            blue = 255;
        } if (mouseX <= width / 4 && mouseY >= height / 8) {
            ball[i].x = mouseX + 100;
        } if (mouseX <= width / 1.25 && mouseX >width / 3.5 && mouseY >= height / 1.5) {
            red = 255;
            blue = 255;
        }
    }
}

/*function panic() {
   
}

function nervous() {
   
}

function smol(){
    
}*/

class Particle {
    constructor() {//makes the ball and controls speed and size
        this.x = mouseX;
        this.y = mouseY;
        this.speed = 2;
        this.diameter = 20;
    }
    move() {//makes it jittery
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
    display() {//displays the little guy
        noStroke();
        fill(red,green,blue);
        ellipse(this.x, this.y, this.diameter);
    }
    follow() { //makes the lil guy follow the mouse
        this.x = mouseX;
        this.y = mouseY;
    }
}

class fallingStars {//i want this to be sweat droplets
    constructor() {
        this.x = random(width);
        this.y = random(height);
    } display() {
    }
}
