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
    for (let i = 0; i < rows.length; i++) {
        print(rows[i].getString('Game'));
        print(rows[i].length + ' units from Fire Emblem Awakening');
    }
    for (var r = 0; r < table.getRowCount(); r++) { // Cycle through each row of the table
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r] = new DataPoint(table.getString(r, 0),
                    table.getString(r, 1),
                    table.getString(r, 2),
                    table.getString(r, 3),
                    table.getString(r, 4),
                    table.getString(r, 5),
                    table.getString(r, 6));
                // Pass through the values in each row
            console.log(table.getString(r, c));
            points[r].drawHeroes();
        }
    } 
    genderDifferenceButton();
    mostAltsButton();
    heroesButton();
    movementTypeButton();
}

function movementTypeButton() {
    button = createButton("Movement Type");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(drawMovementType);
    button.size(100, 25);
    button.position(width / 2.001, height / 1.1);
    button.style("font-family", "Bodoni");
    button.style("font-size", "10px");
}

function heroesButton() {
    button = createButton("All Heroes");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(drawHeroes);
    button.size(100, 25);
    button.position(width / 2.85, height / 1.1);
    button.style("font-family", "Bodoni");
    button.style("font-size", "10px");
}

function mostAltsButton() {
    button = createButton("Most Alts");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(mostAlts);
    button.size(100, 25);
    button.position(width / 5, height / 1.1);
    button.style("font-family", "Bodoni");
    button.style("font-size", "10px");
}

function genderDifferenceButton() {
    button = createButton("Gender Difference");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(genderDifference);
    button.size(100, 25);
    button.position(width / 20, height / 1.1);
    button.style("font-family", "Bodoni");
    button.style("font-size", "10px");
}

function drawMovementType() {
    background(0);
    textSize(15);
    fill(255, 55, 0);
    text("Infantry", 50, 50);
    fill(0, 230, 255);
    text("Cavalry", 50, 60);
    fill(0, 255, 205);
    text("Flier", 50, 70);
    fill(255, 230, 90);
    text("Armoured", 50, 80);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawMovementType();
        }
    }
}

function drawHeroes() {
    background(0);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawHeroes();
        }
    }
}

function genderDifference() {
    background(0);
    textSize(15);
    fill(255, 150, 220);
    text("Female", 50, 50);
    fill(0, 0, 255);
    text("Male", 50, 60);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawGender();
        }
    }
}

function mostAlts() {
    background(0);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawMostAlts();
            points[c].drawMostAlts();
        }
    }
}

class DataPoint {
    constructor(Name, Game, Gender, AlternateVariation, Title, Weapon, MovementType) {
        // Add each data point to the object
        this.Name = Name;
        this.Game = Game;
        this.Gender = Gender;
        this.AlternateVariation = AlternateVariation;
        this.Title = Title;
        this.Weapon = Weapon;
        this.MovementType = MovementType;
        this.x;
        this.y;
    }
    drawHeroes() {
        this.x = random(width);
        this.y = random(height);
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
    drawGender() {
        if (this.Gender == "Female") {
            textSize(5);
            fill(255, 150, 220);
            text(this.Name, this.x, this.y);
        } else if (this.Gender == "Male") {
            fill(0, 0, 255);
            text(this.Name, this.x, this.y);
        }
    }
    drawMostAlts() {
        if (table.getRowCount(this.AlternateVariation) > 4) {
            textSize(20);
            text(this.Name, this.x, this.y);
        } else {
            textSize(5);
            text(this.Name, this.x, this.y);
        }
    }
    drawMovementType() {
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