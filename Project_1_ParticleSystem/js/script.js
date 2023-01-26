/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


/**
Description of preload
*/
let ball = []; // Declare array

function setup() {
    createCanvas(710, 400);
    for(let i = 0; i < 50; i++){
        ball[i] = new Particle();
    }
}

function draw() {
    background(0);
    for(let i = 0; i < ball.length; i++){
        ball[i].move();
        ball[i].display();
        ball[i].follow();
    } 
} 

/*function mousePressed() {
    for (let i = 0; i < ball.length; i++) {
            ball.splice(i, 1);
    }
}*/

function keyPressed() {
    ball.push(new Particle());
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.speed = 100;
        this.diameter = random(50);
    }
    move() {
        this.x += random(mouseX) / 5;
        this.y += random(mouseY) / 5;
        // if (mouseX == width / 2 && mouseY == height / 2) {
        //     this.speed = 5;
        // 
    
    }
    display() {
            noStroke();
            fill(this.x, this.y, this.diameter);
            ellipse(this.x, this.y, this.diameter);
    }
    follow() {
        this.x = mouseX;
        this.y = mouseY;
    }
}

class fallingStars {
    constructor() {
        this.x = random(width);
        this.y = random(height);
    } display() {
    }
}
