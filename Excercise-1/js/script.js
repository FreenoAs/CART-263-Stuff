/**
Trying to make pong
Anthony John Scopacasa
*/

"use strict";


/**
Description of preload
*/

let yposP1 = 200;
let yposP2 = 200;
let x = 250;
let y = 250;
let dX = 250;
let dY = 250;
let scoreP1 = 0;
let scoreP2 = 0;


function preload() {

}


/**
creates the canvas
*/
function setup() {
    createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
    background(0, 200, 200);
    textSize(50);
    text(scoreP1, 100, 100);
    text(scoreP2, 370, 100);
    textSize(20);
    text("up ---> W", 20, 450);
    text("down ---> S", 20, 480);
    text("up ---> P", 350, 450);
    text("down ---> L", 350, 480);
    ball();//ball (it lerps fpor now but should move around)
    player1();//rectangle for player 1
    player2();//racatangle for player 2
    if (keyIsPressed === true && key === "w" ){//makes player one go up
        yposP1--
    }if (keyIsPressed === true && key === "s"){//makes player one go down
        yposP1++
    }if (keyIsPressed === true && key === "p" ){//makes player two go up
        yposP2--
    }if (keyIsPressed === true && key === "l"){//makes player one go down
       yposP2++
    } if (scoreP1 == 10) {
        textSize(50);
        text("P1 WINS", width / 4, height / 2);
        //ballMovement = false;
    } if (scoreP2 == 10) {
        textSize(50);
        text("P2 WINS", width / 4, height / 2);
        //ballMovement = false;
    }
    if (x < 0) {// resets the ball and gives a poitn to p1
        x = width / 2;
        y = height/2;
        dX = width/2;
        dY = height/2;
        scoreP1++
    } if (x > 500) {//resets the ball and gives a point to p2
        x = width/2;
        y = height/2;
        dX = width/2;
        dY = height/2;
        scoreP2++
    }
}

function player1(){
    rect(50, yposP1, 40, 100);
}

function player2() {
    rect(410, yposP2, 40, 100);
}

function ball() {
    x = lerp(x, dX, .05);
    y = lerp(y, dY, .05);
    ellipse(x, y, 40, 40);
}

function mousePressed() {
    dX = mouseX;
    dY = mouseY;
}