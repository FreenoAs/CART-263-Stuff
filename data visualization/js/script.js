/**
Representation Difference in Fire Emblem Heroes (plus a couple of data generation stuff)
Anthony Scopacasa
*/

"use strict";


let table;//grabs the table
let points = [];//the array for the all of the hero objects
let button;//allows the buttons to function on the main screen
let buttonSummon;//allows for the toggling of the designated buttons (so they can be turned off later)
let buttonSearch;
let inputSearch;
let heroCircle;

function preload() {//loads the table
    table = loadTable('fire emblem heroes.csv', 'csv', 'header');
}

function setup() {//creates the object for every hero
    createCanvas(windowWidth, windowHeight);
    background(0);
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
    genderDifferenceButton();//activates each of the designated button function
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
    fill(150);
    textSize(30);
    text("Fire Emblem", width / 2.2, 50);
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
    background(255);
    stroke(10);
    textSize(20);
    fill(255);
    points[0].summonHero(table.getRow(Math.floor(Math.random() * 922)));//sourced from https://stackoverflow.com/questions/48038491/generate-a-random-integer-in-p5-js
    text("Alternate Variation" + "       Character" + "      Game", width / 4.5, height / 2.5);
    text("Title: ", width / 2.3, height / 2);
    fill(150);
    textSize(30);
    text("Fire Emblem", width / 2.2, 50);
}

function deleteButton() {//hides the summon button between screens https://editor.p5js.org/xinemata/sketches/EuI7ox8AC
    if (buttonSummon) {
        buttonSummon.hide();
    }
}

function deleteSearchButton() {//hides the search button on between screens https://editor.p5js.org/xinemata/sketches/EuI7ox8AC
    if (buttonSearch) {
        buttonSearch.hide();
    }
}

function deleteInput() {//hides the text box when switching between screens https://editor.p5js.org/xinemata/sketches/EuI7ox8AC
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
    fill(150);
    textSize(30);
    text("Fire Emblem", width / 2.2, 50);
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
    text("Color Coded By Game", 50, 70);
    deleteButton();
    deleteInput();
    deleteSearchButton();
    fill(150);
    textSize(30);
    text("Fire Emblem", width / 2.2, 50);
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
    fill(150);
    textSize(30);
    text("Fire Emblem", width / 2.2, 50);
}

function heroSearch() {//displays the units with the most alternate variations (most rows) (didn't get this to work but it felt technically very impressive)
    background(0);
    textSize(20);
    fill(255);
    text("Search Examples:", 50, 50);
    text("Lyn", 50, 70);
    text("Camilla", 50, 90);
    text("Lucina", 50, 110);
    text("Corrin", 50, 130);
    inputSearch = createInput();//input referenced from https://p5js.org/examples/dom-input-and-button.html
    inputSearch.position(width / 2, height / 2);
    buttonSearch = createButton('Search');
    buttonSearch.position(width / 2.4, height / 2);
    buttonSearch.mousePressed(generateHero);
    deleteButton();
    fill(150);
    textSize(30);
    text("Fire Emblem", width / 2.2, 50);
}

function showHeroInfo() {
    text(this.Game, this.x, this.y + 5);
    text(this.MovementType, this.x, this.y + 10);
    text(this.AlternateVariation, this.x, this.y + 15);
    text(this.Weapon, this.x, this.y + 20);
}

function generateHero() {//generates the amount of alts based on name submitted
    const hero = inputSearch.value();
    let rows = table.findRows(hero, 'Name');
    textSize(8);
    fill(random(255), random(255), random(255));
    text(rows, random(width), random(height));
    console.log(hero);
}

class DataPoint {//creates the heroes object (using all of the information as seen below)
    constructor(Name, Game, Gender, AlternateVariation, Title, Weapon, MovementType) {
        this.Name = Name;
        this.Game = Game;
        this.Gender = Gender;
        this.AlternateVariation = AlternateVariation;
        this.Title = Title;
        this.Weapon = Weapon;
        this.MovementType = MovementType;
        this.x = random(width);
        this.y = random(height);
        this.genderx = random(width / 2, width);
        this.infantryx = random(width / 4, width / 55);
        this.flierx = random(width / 4, width / 2);
        this.armouredx = random(width / 2, width / 1.25);
        this.cavalryx = random(width / 1.25, width / 1);
        this.heroesx = random(width / 55, width / 15);
        this.mysteryx = random(width / 15, width / 10);
        this.valentiax = random(width / 10, width / 5);
        this.geneologyx = random(width / 5, width / 4);
        this.thraciax = random(width / 4.5, width / 3.5);
        this.bindingx = random(width / 3, width / 2.5);
        this.blazingx = random(width / 2, width / 1.75);
        this.sacredstonesx = random(width / 1.75, width / 1.5);
        this.pathofradiancex = random(width / 1.5, width / 1.25);
        this.radiantdawnx = random(width / 1.25, width / 1.1);
        this.awakeningx = random(width / 1.1, width / 1.05);
        this.fatesx = random(width / 1.05, width / 1.01);
        this.threehousesx = random(width / 3.5, width / 3);
        this.tokyomiragex = random(width / 2.5, width / 2);
        this.engagex = random(width / 2.5, width / 2);

    }
    drawHeroes() {//displays all heroes by which game they originate from
        stroke(5);
        textSize(8);
        if (this.Game == "Heroes") {
            fill(225, 255, 79);
            heroCircle = ellipse(this.heroesx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);//was not anle to get the mouse over function to work heres where i found it though https://p5js.org/reference/#/p5.Element/mouseOver
            text(this.Name, this.heroesx, this.y);
            text(this.Game, this.heroesx, this.y + 5);
        } if (this.Game == "Mystery") {
            fill(25, 30, 220);
            heroCircle = ellipse(this.mysteryx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.mysteryx, this.y);
            text(this.Game, this.mysteryx, this.y + 5);
        } if (this.Game == "Valentia") {
            fill(35, 230, 100);
            heroCircle = ellipse(this.valentiax, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.valentiax, this.y);
            text(this.Game, this.valentiax, this.y + 5);
        } if (this.Game == "Geneology") {
            fill(220, 225, 145);
            heroCircle = ellipse(this.geneologyx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.geneologyx, this.y);
            text(this.Game, this.geneologyx, this.y + 5);
        } if (this.Game == "Thracia") {
            fill(255, 0, 0);
            heroCircle = ellipse(this.thraciax, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.thraciax, this.y);
            text(this.Game, this.thraciax, this.y + 5);
        } if (this.Game == "Binding") {
            fill(255, 0, 0);
            heroCircle = ellipse(this.bindingx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.bindingx, this.y);
            text(this.Game, this.bindingx, this.y + 5);
        } if (this.Game == "Blazing") {
            fill(120, 235, 140);
            heroCircle = ellipse(this.blazingx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.blazingx, this.y);
            text(this.Game, this.blazingx, this.y + 5);
        } if (this.Game == "Sacred Stones") {
            fill(150, 240, 235);
            heroCircle = ellipse(this.sacredstonesx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.sacredstonesx, this.y);
            text(this.Game, this.sacredstonesx, this.y + 5);
        } if (this.Game == "Path of Radiance") {
            fill(90, 160, 200);
            heroCircle = ellipse(this.pathofradiancex, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.pathofradiancex, this.y);
            text(this.Game, this.pathofradiancex, this.y + 5);
        } if (this.Game == "Radiant Dawn") {
            fill(25, 75, 100);
            heroCircle = ellipse(this.radiantdawnx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.radiantdawnx, this.y);
            text(this.Game, this.radiantdawnx, this.y + 5);
        } if (this.Game == "Awakening") {
            fill(0, 135, 255);
            heroCircle = ellipse(this.awakeningx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.awakeningx, this.y);
            text(this.Game, this.awakeningx, this.y + 5);
        } if (this.Game == "Fates") {
            fill(255);
            heroCircle = ellipse(this.fatesx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.fatesx, this.y);
            text(this.Game, this.fatesx, this.y + 5);
        } if (this.Game == "Three Houses") {
            fill(235, 235, 150);
            heroCircle = ellipse(this.threehousesx, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.threehousesx, this.y);
            text(this.Game, this.threehousesx, this.y + 5);
        } if (this.Game == "Tokyo Mirage") {
            fill(255, 55, 210);
            heroCircle = ellipse(this.tokyomiragex, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.tokyomiragex, this.y);
            text(this.Game, this.tokyomiragex, this.y + 5);
        } if (this.Game == "Engage") {
            fill(0, 0, 255);
            heroCircle = ellipse(this.engagex, this.y, 20);
            // heroCircle.mouseOver(showHeroInfo);
            text(this.Name, this.engagex, this.y);
            text(this.Game, this.engagex, this.y + 5);
        }
    }
    drawGender() {//color codes all heroes by gender
        if (this.Gender == "Female") {
            let rows = table.findRows('Female', 'Gender');
            textSize(5);
            fill(255, 150, 220);
            ellipse(this.x/2, this.y, rows.length / 20);
        } else if (this.Gender == "Male") {
            let rows = table.findRows('Male', 'Gender');
            fill(0, 0, 255);
            ellipse(this.genderx, this.y, rows.length/20);
        } else if (this.Gender == "Non-Binary") {
            let rows = table.findRows('Non-Binary', 'Gender');
            fill(150);
            ellipse(this.x, this.y, rows.length*30);
        }
    }
    drawMovementType() {//color codes units based on their movement type
        if (this.MovementType == "Infantry") {
            textSize(7);
            fill(255, 55, 0);
            square(this.infantryx, this.y - 10, 25);
            text(this.Name, this.infantryx, this.y);
            text(this.AlternateVariation, this.infantryx, this.y + 5);
        } if (this.MovementType == "Cavalry") {
            textSize(7);
            fill(0, 230, 255);
            square(this.cavalryx, this.y - 10, 25, 5, 10);
            text(this.Name, this.cavalryx, this.y);
            text(this.AlternateVariation, this.cavalryx, this.y + 5);
        } if (this.MovementType == "Flier") {
            textSize(7);
            fill(0, 255, 205);
            ellipse(this.flierx + 7, this.y, 35);
            text(this.Name, this.flierx, this.y);
            text(this.AlternateVariation, this.flierx, this.y + 5);
        } if (this.MovementType == "Armoured") {
            textSize(7);
            fill(255, 230, 90);
            square(this.armouredx, this.y - 10, 25, 5);
            text(this.Name, this.armouredx, this.y);
            text(this.AlternateVariation, this.armouredx, this.y + 5);
        } 
    }
    summonHero(row) {
        fill(random(255), random(255), random(255));
        text(row.arr[0], width / 2, height / 2.2);
        text(row.arr[1], width / 1.5, height / 2.2);
        text(row.arr[3], width / 3, height / 2.2);
        text(row.arr[4], width / 2, height / 2);
    }
}
