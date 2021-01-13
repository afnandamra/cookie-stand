'use strict';
// Hours Array
var openHour = [];
for (var i = 6; i < 12; i++) {
    openHour.push(i + 'am');
}
openHour.push(12 + 'pm');
for (var j = 1; j <= 7; j++) {
    openHour.push(j + 'pm');
}
// locations Array
var locations = [];
var grandTotal = 0;
//Functions

// Random Number function
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Constructor template
function Shop(shopName, minCusPerHour, maxCusPerHour, avgCookiePerCus) {
    this.shopName = shopName;
    this.minCusPerHour = minCusPerHour;
    this.maxCusPerHour = maxCusPerHour;
    this.avgCookiePerCus = avgCookiePerCus;
    this.avgCusPerHour = [];
    this.avgCookiesPerHour = [];
    this.totalCookies = 0;
    locations.push(this);
}

// constructer method to get average customers per hour
Shop.prototype.getCusPerHour = function () {
    for (var m = 0; m < openHour.length; m++) {
        this.avgCusPerHour.push(randomNum(this.minCusPerHour, this.maxCusPerHour));
    }
}

// constructer method to get average cookies per hour
Shop.prototype.getAvgCookiesPerHour = function () {
    for (var k = 0; k < openHour.length; k++) {
        this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
        this.totalCookies = this.totalCookies + this.avgCookiesPerHour[k];
        grandTotal += this.avgCookiesPerHour[k];
    }
}

// constructor method to render table body
Shop.prototype.render = function () {
    var tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    var shopTitleCell = document.createElement('th');
    shopTitleCell.textContent = this.shopName;
    tableRow.appendChild(shopTitleCell);
    var dataCell;
    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
        dataCell = document.createElement('td');
        dataCell.textContent = this.avgCookiesPerHour[i];
        tableRow.appendChild(dataCell);
    }
    var dailyLocationTotal = document.createElement('th');
    dailyLocationTotal.textContent = this.totalCookies;
    tableRow.appendChild(dailyLocationTotal);
}

// creating objects
var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);



// Page Rendering
var parentSec = document.getElementById('mainId');
var locationSection = document.createElement('section');
parentSec.appendChild(locationSection);
var tableName = document.createElement('h3');
tableName.textContent = 'Salmon Cookie Sales';
locationSection.appendChild(tableName);
var locationTable = document.createElement('table');
locationSection.appendChild(locationTable);
// form rendering
var newSection = document.createElement('section');
parentSec.appendChild(newSection);
var form = document.getElementById('formSection');
newSection.append(form);
// rendering function call
header();
cellData();


// table rendering
// Header
function header() {
    var headRow = document.createElement('thead');
    locationTable.appendChild(headRow);
    var tableRow = document.createElement('tr');
    headRow.appendChild(tableRow);
    var emptyCell = document.createElement('th');
    tableRow.appendChild(emptyCell);
    var headRowCells;
    for (var j = 0; j <= openHour.length - 1; j++) {
        headRowCells = document.createElement('th');
        headRowCells.textContent = openHour[j];
        tableRow.appendChild(headRowCells);
    }
    var totalDaily = document.createElement('th');
    totalDaily.textContent = 'Daily Location Total';
    tableRow.appendChild(totalDaily);
}

// Body
var tableBody;
function cellData() {
    tableBody = document.createElement('tbody');
    locationTable.appendChild(tableBody);
}


// Footer
function footer() {
    var footRow = document.createElement('tfoot');
    locationTable.appendChild(footRow);
    var tableRow = document.createElement('tr');
    footRow.appendChild(tableRow);
    var footRowCells = document.createElement('th');
    footRowCells.textContent = 'Totals';
    tableRow.appendChild(footRowCells);
    var dataCell = [];
    var dataTotal = 0;
    for (var z = 0; z < openHour.length; z++) {
        var hourCol = 0;
        for (var y = 0; y < locations.length; y++) {
            hourCol = hourCol + locations[y].avgCookiesPerHour[z];
        }
        dataCell.push(hourCol);
        dataTotal = dataTotal + hourCol;
        footRowCells = document.createElement('th');
        footRowCells.textContent = dataCell[z];
        tableRow.appendChild(footRowCells);
    }
    var grandTotalCell = document.createElement('th');
    grandTotalCell.textContent = grandTotal;
    tableRow.appendChild(grandTotalCell);
}

// calling 

for (var i = 0; i < locations.length; i++) {
    console.log(locations[i].name, locations[i].avgCookiesPerHour);
    locations[i].getCusPerHour();
    locations[i].getAvgCookiesPerHour();
    locations[i].render();
}
footer();

// form event

form = addEventListener('submit', newSubmit);

function newSubmit(event) {
    event.preventDefault();

    var newName = event.target.shopName.value;
    var newMin = parseInt(event.target.minCus.value);
    var newMax = parseInt(event.target.maxCus.value);
    var newAvg = event.target.avgCookies.value;

    new Shop(newName, newMin, newMax, newAvg);

    locationTable.innerHTML = '';
    header();
    cellData();
    for (var i = 0; i < locations.length; i++) {
        locations[i].avgCookiesPerHour = [];
        locations[i].getCusPerHour();
        locations[i].getAvgCookiesPerHour();
        locations[i].render();
    }
    footer();
}

