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
    }
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

// rendering function call
header();
cellData();
footer();


// calling 
for (var i = 0; i < locations.length; i++) {
    console.log(locations[i].name, locations[i].avgCookiesPerHour);
    locations[i].getCusPerHour();
    locations[i].getAvgCookiesPerHour();
    locations[i].render();
}


// table rendering
// Header
function header() {
    var headRow = document.createElement('thead');
    locationTable.appendChild(headRow);
    var tableRow = document.createElement('tr');
    headRow.appendChild(tableRow);
    var emptyCell = document.createElement('th');
    tableRow.appendChild(emptyCell);
    var headRowCells = [emptyCell];
    for (var j = 1; j <= openHour.length; j++) {
        headRowCells.push(document.createElement('th'));
        headRowCells[j].textContent = openHour[j - 1];
        tableRow.appendChild(headRowCells[j]);
    }
    var totalDaily = document.createElement('th');
    totalDaily.textContent = 'Daily Location Total';
    tableRow.appendChild(totalDaily);
}

// Body
function cellData() {
    var tableBody = document.createElement('tbody');
    locationTable.appendChild(tableBody);
    Shop.prototype.render = function () {
        var tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        var shopTitleCell = document.createElement('td');
        shopTitleCell.textContent = this.shopName;
        tableRow.appendChild(shopTitleCell);
        var dataCell = [];
        for (var i = 0; i < openHour.length; i++) {
            dataCell.push(document.createElement('td'));
            dataCell[i].textContent = this.avgCookiesPerHour[i];
            tableRow.appendChild(dataCell[i]);
        }
        var dailyLocationTotal = document.createElement('td');
        dailyLocationTotal.textContent = this.totalCookies;
        tableRow.appendChild(dailyLocationTotal);
    }
}



// Footer
function footer() {
    var footRow = document.createElement('tfoot');
    locationTable.appendChild(footRow);
    var tableRow = document.createElement('tr');
    footRow.appendChild(tableRow);
    var footRowCells = [];
    footRowCells.push(document.createElement('td'));
    footRowCells[0].textContent = 'Totals';
    tableRow.appendChild(footRowCells[0]);
    for (var j = 1; j <= openHour.length; j++) {
        footRowCells.push(document.createElement('td'));
        footRowCells[j].textContent = totalsRow()[j - 1];
        tableRow.appendChild(footRowCells[j]);
    }
    // var totalDaily = document.createElement('td');
    // totalDaily.textContent = this.totalCookies;
    // tableRow.appendChild(totalDaily);
}
// // for (var v = 0; v < total.length; v++) {
// //     var totalCell = document.createElement('td');
// //     totalCell.textContent = totalsArr[v];
// //     totalsRow.appendChild(totalCell);
// // }

function totalsRow() {
    var totalPerHour = [];
    // var totalTotals =0;
    for (var v = 0; v < locations.length; v++) {
        var total = 0;
        totalPerHour.push(total + seattle.avgCookiesPerHour[0]);
    }
    return totalPerHour;
}

var totalsArr = getTotalPerhour()[0];
var totalsSum = getTotalPerhour()[1];
function getTotalPerhour() {
    var totalPerHour = [];
    var sumTotalPerHour = 0;
    for (var z = 0; z < salmonObjs[0].times.length; z++) {
        var perHour = 0;
        for (var y = 0; y < salmonObjs.length; y++) {
            perHour = perHour + salmonObjs[y].cookiesRandomNums[z];
        }
        totalPerHour.push(perHour);
        sumTotalPerHour = sumTotalPerHour + perHour;
    }
    return [totalPerHour, sumTotalPerHour];
}