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

function randomCus(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var seattle = {
    name: 'Seattle',
    minCusPerHour: 23,
    maxCusPerHour: 65,
    avgCookiePerCus: 6.3,
    avgCusPerHour: [],
    getCusPerHour: function () {
        for (var m = 0; m < openHour.length; m++) {
            this.avgCusPerHour.push(randomCus(this.minCusPerHour, this.maxCusPerHour));
            // console.log(this.avgCusPerHour[m]);
        }
        return this.avgCusPerHour;
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    getAvgCookiesPerHour: function () {
        for (var k = 0; k < openHour.length; k++) {
            this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
            this.totalCookies = this.totalCookies + this.avgCookiesPerHour[k];
        }
        // for (var l = 0; l < openHour.length; l++) {
        //     console.log(openHour[l], ': ', this.avgCookiesPerHour[l]);
        // }
        // console.log('total: ', this.totalCookies);
        return this.avgCookiesPerHour, this.totalCookies;
    }
}

var tokyo = {
    name: 'Tokyo',
    minCusPerHour: 3,
    maxCusPerHour: 24,
    avgCookiePerCus: 1.2,
    avgCusPerHour: [],
    getCusPerHour: function () {
        for (var m = 0; m < openHour.length; m++) {
            this.avgCusPerHour.push(randomCus(this.minCusPerHour, this.maxCusPerHour));
            // console.log(this.avgCusPerHour[m]);
        }
        return this.avgCusPerHour;
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    getAvgCookiesPerHour: function () {
        for (var k = 0; k < openHour.length; k++) {
            this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
            this.totalCookies = this.totalCookies + this.avgCookiesPerHour[k];
        }
        // for (var l = 0; l < openHour.length; l++) {
        //     console.log(openHour[l], ': ', this.avgCookiesPerHour[l]);
        // }
        // console.log('total: ', this.totalCookies);
        return this.avgCookiesPerHour, this.totalCookies;
    }
}

var dubai = {
    name: 'Dubai',
    minCusPerHour: 11,
    maxCusPerHour: 38,
    avgCookiePerCus: 3.7,
    avgCusPerHour: [],
    getCusPerHour: function () {
        for (var m = 0; m < openHour.length; m++) {
            this.avgCusPerHour.push(randomCus(this.minCusPerHour, this.maxCusPerHour));
            // console.log(this.avgCusPerHour[m]);
        }
        return this.avgCusPerHour;
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    getAvgCookiesPerHour: function () {
        for (var k = 0; k < openHour.length; k++) {
            this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
            this.totalCookies = this.totalCookies + this.avgCookiesPerHour[k];
        }
        // for (var l = 0; l < openHour.length; l++) {
        //     console.log(openHour[l], ': ', this.avgCookiesPerHour[l]);
        // }
        // console.log('total: ', this.totalCookies);
        return this.avgCookiesPerHour, this.totalCookies;
    }
}

var paris = {
    name: 'Paris',
    minCusPerHour: 20,
    maxCusPerHour: 38,
    avgCookiePerCus: 2.3,
    avgCusPerHour: [],
    getCusPerHour: function () {
        for (var m = 0; m < openHour.length; m++) {
            this.avgCusPerHour.push(randomCus(this.minCusPerHour, this.maxCusPerHour));
            // console.log(this.avgCusPerHour[m]);
        }
        return this.avgCusPerHour;
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    getAvgCookiesPerHour: function () {
        for (var k = 0; k < openHour.length; k++) {
            this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
            this.totalCookies = this.totalCookies + this.avgCookiesPerHour[k];
        }
        // for (var l = 0; l < openHour.length; l++) {
        //     console.log(openHour[l], ': ', this.avgCookiesPerHour[l]);
        // }
        // console.log('total: ', this.totalCookies);
        return this.avgCookiesPerHour, this.totalCookies;
    }
}

var lima = {
    name: 'Lima',
    minCusPerHour: 2,
    maxCusPerHour: 16,
    avgCookiePerCus: 4.6,
    avgCusPerHour: [],
    getCusPerHour: function () {
        for (var m = 0; m < openHour.length; m++) {
            this.avgCusPerHour.push(randomCus(this.minCusPerHour, this.maxCusPerHour));
            // console.log(this.avgCusPerHour[m]);
        }
        return this.avgCusPerHour;
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    getAvgCookiesPerHour: function () {
        for (var k = 0; k < openHour.length; k++) {
            this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
            this.totalCookies = this.totalCookies + this.avgCookiesPerHour[k];
        }
        // for (var l = 0; l < openHour.length; l++) {
        //     console.log(openHour[l], ': ', this.avgCookiesPerHour[l]);
        // }
        // console.log('total: ', this.totalCookies);
        return this.avgCookiesPerHour, this.totalCookies;
    }
}

var locations = [seattle, tokyo, dubai, paris, lima];

for (var o = 0; o < locations.length; o++) {
    locations[o].getCusPerHour();
    locations[o].getAvgCookiesPerHour();
    var parent = document.getElementById('mainId');
    var locationName = document.createElement('h3');
    locationName.textContent = locations[o].name;
    parent.appendChild(locationName);

    var locationCookies = document.createElement('ul');
    locationCookies.setAttribute('id', 'hours');
    parent.appendChild(locationCookies);

    var locationList = [];
    for (var n = 0; n < openHour.length + 1; n++) {
        locationList = document.createElement('li');
        locationList.setAttribute('class', 'hours');
        locationCookies.appendChild(locationList);
        locationList.textContent = (openHour[n] + ': ' + locations[o].avgCookiesPerHour[n]);
    }
    locationList.textContent = ('total: ' + locations[o].totalCookies);

}
