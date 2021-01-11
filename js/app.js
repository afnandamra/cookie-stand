'use strict';
var openHour = [];
for (var i = 6; i < 12; i++) {
    openHour.push(i + 'am');
}
openHour.push(12 + 'pm');
for (var j = 1; j <= 7; j++) {
    openHour.push(j + 'pm');
}

console.log(openHour);



function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Shop(shopName, minCusPerHour, maxCusPerHour, avgCookiePerCus) {
    this.name = shopName;
    this.minCusPerHour = minCusPerHour;
    this.maxCusPerHour = maxCusPerHour;
    this.avgCookiePerCus = avgCookiePerCus;
    this.avgCusPerHour = [];
    this.totalCookies = 0;
}

Shop.prototype.getCusPerHour = function () {
    for (var m = 0; m < openHour.length; m++) {
        this.avgCusPerHour.push(randomNum(this.minCusPerHour, this.maxCusPerHour));
        // console.log(this.avgCusPerHour[m]);
    }
}

Shop.prototype.getAvgCookiesPerHour = function () {
    var avgCookiesPerHour = [];
    for (var k = 0; k < openHour.length; k++) {
        avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
        this.totalCookies = this.totalCookies + avgCookiesPerHour[k];
    }
    // for (var l = 0; l < openHour.length; l++) {
    //     console.log(openHour[l], ': ', avgCookiesPerHour[l]);
    // }
    console.log('total: ', this.totalCookies);
}


Shop.prototype.render = function () {
    var parentSec = document.getElementById('mainId');
    // section
    var locationSection = document.createElement('section');
    parentSec.appendChild(locationSection);
    //Name h3
    var tableName = document.createElement('h3');
    tableName.textContent = 'Salmon Cookie Sales';
    locationSection.appendChild(tableName);
    //table

    locationSection.appendChild(locationTable);
    // table rows
    this.header();
    //5 shop rows tableRow[1-5]
    var locationRows = [1, 2, 3, 4, 5];

    //last row tableRow[6]
}
var locationTable = document.createElement('table');
Shop.prototype.header = function () {
    var headRow = document.createElement('thead');
    locationTable.appendChild(headRow);
    var emptyCell = document.createElement('th');
    headRow.appendChild(emptyCell);
    var headRowCells = [emptyCell];
    for (var j = 1; j <= openHour.length; j++) {
        headRowCells.push(document.createElement('th'));
        headRowCells[j].textContent = openHour[j - 1];
        headRow.appendChild(headRowCells[j]);
    }
    var totalDaily = document.createElement('th');
    totalDaily.textContent = 'Daily Location Total';
    headRow.appendChild(totalDaily);
}
// for (var o = 0; o < locations.length; o++) {
//     locations[o].getCusPerHour();
//     locations[o].getAvgCookiesPerHour();
//     var parent = document.getElementById('mainId');
//     var locationName = document.createElement('h3');
//     locationName.textContent = locations[o].name;
//     parent.appendChild(locationName);

//     var locationCookies = document.createElement('ul');
//     locationCookies.setAttribute('id', 'hours');
//     parent.appendChild(locationCookies);

//     var locationList = [];
//     for (var n = 0; n < openHour.length + 1; n++) {
//         locationList = document.createElement('li');
//         locationList.setAttribute('class', 'hours');
//         locationCookies.appendChild(locationList);
//         locationList.textContent = (openHour[n] + ': ' + locations[o].avgCookiesPerHour[n] + ' cookies');
//     }
//     locationList.textContent = ('total: ' + locations[o].totalCookies + ' cookies');

// }

var seattle = new Shop('Seattle', 23, 65, 6.3);
console.log(seattle);

var tokyo = new Shop('Tokyo', 3, 24, 1.2);
console.log(tokyo);

var dubai = new Shop('Dubai', 11, 38, 3.7);
console.log(dubai);

var paris = new Shop('Paris', 20, 38, 2.3);
console.log(paris);

var lima = new Shop('Lima', 2, 16, 4.6);
console.log(lima);

var locations = [seattle, tokyo, dubai, paris, lima];
console.log(locations);

for (var i = 0; i < locations.length; i++) {
    locations[i].getCusPerHour();
    locations[i].getAvgCookiesPerHour();
}
seattle.render();

