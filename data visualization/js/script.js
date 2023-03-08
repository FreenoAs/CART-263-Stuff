/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let table;
let points = [];
let button;

function preload() {
    table = loadTable('fire emblem heroes.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    console.log(table.getRowCount() + " total rows in table");
    console.log(table.getColumnCount() + " total columns in table");
    let rows = table.findRow('Heroes', 'Game');
    for (var r = 0; r < table.getRowCount(); r++) { // Cycle through each row of the table
            points[r] = new DataPoint(table.getString(r, 0),
                    table.getString(r, 1),
                    table.getString(r, 2),
                    table.getString(r, 3),
                    table.getString(r, 4),
                    table.getString(r, 5),
                    table.getString(r, 6));
                // Pass through the values in each row
            console.log(table.getString(r,0));
            points[r].drawHeroes();
    }
    genderDifferenceButton();
    mostAltsButton();
    heroesButton();
    movementTypeButton();
    heroSummonerButton();
} 


function heroSummonerButton() {//bring up the hero summoner screen
    button = createButton("Hero Summoner");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(drawHeroSummoner,deleteButton);
    button.size(100, 25);
    button.position(width / 1.54, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function movementTypeButton() {//changes every characters color to their corresponding movement type in the top left
    button = createButton("Movement Type");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(drawMovementType,deleteButton);
    button.size(100, 25);
    button.position(width / 2.001, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function heroesButton() {//returns to the default screen with all the hero information
    button = createButton("All Heroes");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(drawHeroes,deleteButton);
    button.size(100, 25);
    button.position(width / 20, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function mostAltsButton() {//displays the units with the most hero variations
    button = createButton("Most Alts");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(mostAlts,deleteButton);
    button.size(100, 25);
    button.position(width / 5, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function genderDifferenceButton() {//color codes the heroes to their gender
    button = createButton("Gender Difference");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(genderDifference,deleteButton);
    button.size(100, 25);
    button.position(width / 2.85, height / 1.1);
    button.style("font-size", "9px");
    background(0);
}

function drawHeroSummoner() {//brings up the hero summon button on the hero summoning screen
    button = createButton("Summon");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(summonHero);
    button.size(100, 25);
    button.position(width / 2.25, height / 2);
    button.style("font-size", "10px");
    background(0);
}

function summonHero() { //generates a random hero
    stroke(10);
    textSize(20);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            table.getString(random(922));
        }
    }
}

function deleteButton() {
    button.hide(drawHeroSummoner);
}

function drawMovementType() {//changes unit color based on movement type
    background(0);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawMovementType();
        }
    }
    textSize(15);
    fill(255, 55, 0);
    text("Infantry", 50, 50);
    fill(0, 230, 255);
    text("Cavalry", 50, 60);
    fill(0, 255, 205);
    text("Flier", 50, 70);
    fill(255, 230, 90);
    text("Armoured", 50, 80);
}

function drawHeroes() {//displays all of the heroes
    background(0);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawHeroes();
        }
    }
}

function genderDifference() {//seperates all the heroes based on gender
    background(0);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawGender();
        }
    }
    textSize(15);
    fill(255, 150, 220);
    text("Female", 50, 50);
    fill(0, 0, 255);
    text("Male", 50, 60);
    fill(150);
    text("Non-Binary", 50, 70);

}

function mostAlts() {//displays the units with the most alternate variations (most rows)
    background(0);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawMostAlts();
            points[c].drawMostAlts();
        }
    }
}

class DataPoint {//creates the heroes object
    constructor(Name, Game, Gender, AlternateVariation, Title, Weapon, MovementType) {
        // Add each data point to the object
        this.Name = Name;
        this.Game = Game;
        this.Gender = Gender;
        this.AlternateVariation = AlternateVariation;
        this.Title = Title;
        this.Weapon = Weapon;
        this.MovementType = MovementType;
        this.x = random(width);
        this.y = random (height);
    }
    drawHeroes() {//displays all heroes by which game they originate from
        noStroke();
        textSize(5);
        if (this.Game == "Heroes") {
            fill(225, 255, 79);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Mystery") {
            fill(25, 30, 220);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Valentia") {
            fill(35, 230, 100);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Geneology") {
            fill(220, 225, 145);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Thracia") {
            fill(255, 0, 0);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Binding") {
            fill(255, 0, 0);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Blazing") {
            fill(120, 235, 140);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Sacred Stones") {
            fill(150, 240, 235);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Path of Radiance") {
            fill(90, 160, 200);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Radiant Dawn") {
            fill(25, 75, 100);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Awakening") {
            fill(0, 135, 255);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Fates") {
            fill(255);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Three Houses") {
            fill(235, 235, 150);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Tokyo Mirage") {
            fill(255, 55, 210);
            text(this.Name, this.x, this.y);
        } if (this.Game == "Engage") {
            fill(0, 0, 255);
            text(this.Name, this.x, this.y);
        }
    }
    drawGender() {//color codes all heroes by gender
        if (this.Gender == "Female") {
            textSize(5);
            fill(255, 150, 220);
            text(this.Name, this.x, this.y);
        } else if (this.Gender == "Male") {
            fill(0, 0, 255);
            text(this.Name, this.x, this.y);
        } else if (this.Gender == "Non-Binary") {
            fill(150);
            text(this.Name, this.x, this.y);
        }
    }
    drawMostAlts() {//increases the font size of the characters with the most amount of alternate variations (rows) 
        if (table.getRowCount("Lyn") >= 3) {
            textSize(20);
            text(this.Name, this.x, this.y);
        } else {
            textSize(5);
            text(this.Name, this.x, this.y);
        }
    }
    drawMovementType() {//color codes units based on their movement type
        if (this.MovementType == "Infantry") {
            textSize(5)
            fill(255, 55, 0);
            text(this.Name, this.x, this.y);
        } if (this.MovementType == "Cavalry") {
            textSize(5)
            fill(0, 230, 255);
            text(this.Name, this.x, this.y);
        } if (this.MovementType == "Flier") {
            textSize(5)
            fill(0, 255, 205);
            text(this.Name, this.x, this.y);
        } if (this.MovementType == "Armoured") {
            textSize(5)
            fill(255, 230, 90);
            text(this.Name, this.x, this.y);
        } 
    }
}