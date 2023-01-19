/**
Trying to make pong
Anthony John Scopacasa
*/

"use strict";


/**
proload aint doin much here but here are the variables that will control som later stuff
*/

let yposP1 = 200;
let yposP2 = 200;
let ballX = 250;
let ballY = 250;
let scoreP1 = 0;
let scoreP2 = 0;
let movementX = .5;
let movementY = 1;
let xposP1 = 50;
let xposP2 = 410;

/**
creates the canvas
*/
function setup() {
    createCanvas(500,500);
}

/**
controls the moving components of the game like the players and the ball
*/
function draw() {
    background(0, 200, 200);
    textSize(50);
    text(scoreP1, 100, 100);//player points
    text(scoreP2, 370, 100);
    textSize(20);
    text("up ---> W", 20, 450);//on screen text for inputs and the like
    text("down ---> S", 20, 480);
    text("up ---> P", 350, 450);
    text("down ---> L", 350, 480);
    ball();//the ball
    player1();//rectangle for player 1
    player2();//racatangle for player 2
    if (keyIsPressed === true && key === "w" ){//makes player one go up
        yposP1 = yposP1 - 1.25;
    }if (keyIsPressed === true && key === "s"){//makes player one go down
        yposP1 = yposP1 + 1.25;
    }if (keyIsPressed === true && key === "p" ){//makes player two go up
        yposP2 = yposP2 - 1.25;
    }if (keyIsPressed === true && key === "l"){//makes player one go down
        yposP2 = yposP2 + 1.25;
    } if (scoreP1 == 10 ) {
        textSize(50);
        text("P1 WINS", width / 4, height / 2);
    } if (scoreP2 == 10) {
        textSize(50);
        text("P2 WINS", width / 4, height / 2);
    } if (ballX < 0) {// resets the ball and gives a point to p1
        ballX = width / 2;
        ballY = height/2;
        scoreP1++
    } if (ballX > 500) {//resets the ball and gives a point to p2
        ballX = width/2;
        ballY = height/2;
        scoreP2++
    }
}

function player1(){//craetes the player one rectangle
    rect(xposP1, yposP1, 40, 100);
}

function player2() {//creates he player 2 rectangle
    rect(xposP2, yposP2, 40, 100);
}

function ball() {//ball bounces around the screen 
    ballY = ballY - movementY;
    ballX = ballX - movementX;
    ellipse(ballX, ballY, 40, 40);
    if (ballY == 0) {
        movementY = -1;
    } else if (ballY == 500) {
        movementY = 1;
    } if (scoreP1 == 10 || scoreP2 == 10) {//bounces off th top and bottom
        ballX = width / 2;
        ballY = height / 2;
    } if (ballX == xposP1+40 /* && ballY == yposP2*/) {//bounces off the left and right (the second part is to only bounce off when it hits the players but i cant seem to get that collosion working)
        movementX = -1; 
    } if (ballX == xposP2 /* && ballY == yposP2*/) {
        movementX = 1;
    }
}