/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let table;
let points = [];

function preload() {
    table = loadTable('fire emblem heroes.csv', 'csv', 'header');
}

function setup() {
    createCanvas(800, 800);
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
            points[r] = new DataPoint(table.getString(r, c),
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
}