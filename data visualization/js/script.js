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
let buttonSummon;
let buttonSearch;
let inputSearch;

function preload() {
    table = loadTable('fire emblem heroes.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
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
    button.mouseClicked(drawHeroSummoner);
    button.size(100, 25);
    button.position(width / 1.54, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function movementTypeButton() {//changes every characters color to their corresponding movement type in the top left
    button = createButton("Movement Type");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(drawMovementType);
    button.size(100, 25);
    button.position(width / 2.001, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function heroesButton() {//returns to the default screen with all the hero information
    button = createButton("All Heroes");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(drawHeroes);
    button.size(100, 25);
    button.position(width / 20, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function mostAltsButton() {//displays the units with the most hero variations
    button = createButton("Hero Search");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(heroSearch);
    button.size(100, 25);
    button.position(width / 5, height / 1.1);
    button.style("font-size", "10px");
    background(0);
}

function genderDifferenceButton() {//color codes the heroes to their gender
    button = createButton("Gender Difference");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    button.mouseClicked(genderDifference);
    button.size(100, 25);
    button.position(width / 2.85, height / 1.1);
    button.style("font-size", "9px");
    background(0);
}

function drawHeroSummoner() {//brings up the hero summon button on the hero summoning screen
    buttonSummon = createButton("Summon");// button functionailty sourced from here https://editor.p5js.org/dwantilus/sketches/H1MzBzBT-
    buttonSummon.mouseClicked(summonHero);
    buttonSummon.size(100, 25);
    buttonSummon.position(width / 2.25, height / 2);
    buttonSummon.style("font-size", "10px");
    background(0);
    deleteSearchButton();
}

function summonHero() { //generates a random hero
    background(0);
    stroke(10);
    textSize(20);
    fill(255);
    points[0].summonHero(table.getRow(Math.floor(Math.random()*922)));//sourced from https://stackoverflow.com/questions/48038491/generate-a-random-integer-in-p5-js
}

function deleteButton() {
    if (buttonSummon) {
        buttonSummon.hide();
    }
}

function deleteSearchButton() {
    if (buttonSearch) {
        buttonSearch.hide();
    }
}

function deleteInput() {
    if (inputSearch) {
        inputSearch.hide();
    }
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
    fill(150);
    textSize(10);
    text("Alternate Variation Below Character", 50, 90);
    deleteButton();
    deleteInput();
    deleteSearchButton();
}

function drawHeroes() {//displays all of the heroes
    background(0);
    for (var r = 0; r < table.getRowCount(); r++) {
        for (var c = 0; c < table.getColumnCount(); c++) {
            points[r].drawHeroes();
        }
    }
    stroke(10);
    textSize(15);
    fill(255);
    text("Game Below Character", 50, 50);
    deleteButton();
    deleteInput();
    deleteSearchButton();
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
    deleteButton();
    deleteInput();
    deleteSearchButton();
}

function generateHero() {
    let rows = table.findRows(inputSearch.value(''), 'Name');
        fill(random(255), random(255), random(255));
    text("Lyn", DataPoint.x, DataPoint.y);
    console.log(inputSearch.value(''));
}

function heroSearch() {//displays the units with the most alternate variations (most rows)
    background(0);
    inputSearch = createInput();//input referenced from https://p5js.org/examples/dom-input-and-button.html
    inputSearch.position(width / 2, height / 2);
    buttonSearch = createButton('Search');
    buttonSearch.position(width / 2.4, height / 2);
    buttonSearch.mousePressed(generateHero);
    deleteButton();
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
        stroke(5);
        textSize(5);
        if (this.Game == "Heroes") {
            fill(225, 255, 79);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Mystery") {
            fill(25, 30, 220);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Valentia") {
            fill(35, 230, 100);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Geneology") {
            fill(220, 225, 145);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Thracia") {
            fill(255, 0, 0);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Binding") {
            fill(255, 0, 0);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Blazing") {
            fill(120, 235, 140);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Sacred Stones") {
            fill(150, 240, 235);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Path of Radiance") {
            fill(90, 160, 200);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Radiant Dawn") {
            fill(25, 75, 100);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Awakening") {
            fill(0, 135, 255);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Fates") {
            fill(255);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Three Houses") {
            fill(235, 235, 150);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Tokyo Mirage") {
            fill(255, 55, 210);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        } if (this.Game == "Engage") {
            fill(0, 0, 255);
            text(this.Name, this.x, this.y);
            text(this.Game, this.x, this.y + 5);
        }
    }
    drawGender() {//color codes all heroes by gender
        if (this.Gender == "Female") {
            let rows = table.findRows('Female', 'Gender');
            textSize(5);
            fill(255, 150, 220);
            ellipse(this.x, this.y, rows.length/20);
        } else if (this.Gender == "Male") {
            let rows = table.findRows('Male', 'Gender');
            fill(0, 0, 255);
            ellipse(this.x, this.y, rows.length/20);
        } else if (this.Gender == "Non-Binary") {
            let rows = table.findRows('Non-Binary', 'Gender');
            fill(150);
            ellipse(this.x, this.y, rows.length*30);
        }
    }
    drawMostAlts() {//increases the font size of the characters with the most amount of alternate variations (rows) 
        fill(random(255), random(255), random(255));
        //text(, this.x, this.y);
    }
    drawMovementType() {//color codes units based on their movement type
        if (this.MovementType == "Infantry") {
            textSize(7);
            fill(255, 55, 0);
            square(this.x, this.y - 10, 25);
            text(this.Name, this.x, this.y);
            text(this.AlternateVariation, this.x, this.y + 5);
        } if (this.MovementType == "Cavalry") {
            textSize(7);
            fill(0, 230, 255);
            square(this.x, this.y - 10, 25, 5, 10);
            text(this.Name, this.x, this.y);
            text(this.AlternateVariation, this.x, this.y + 5);
        } if (this.MovementType == "Flier") {
            textSize(7);
            fill(0, 255, 205);
            ellipse(this.x + 7, this.y, 35);
            text(this.Name, this.x, this.y);
            text(this.AlternateVariation, this.x, this.y + 5);
        } if (this.MovementType == "Armoured") {
            textSize(7);
            fill(255, 230, 90);
            square(this.x, this.y - 10, 25, 5);
            text(this.Name, this.x, this.y);
            text(this.AlternateVariation, this.x, this.y + 5);
        } 
    }
    summonHero(row) {
        text(row.arr[0], width / 2, height / 2.2);
    }
}
