'use strict'

function Stores(name, min, max, avarage) {
    this.name = name;
    this.min = min;
    this.max = max;

    this.avarage = avarage;

    this.theNumOfCookies = [];
    this.totalCookies = 0;
}

Stores.prototype.randomInRange = function () {
    var range = this.max - this.min;
    var rand = (Math.random() * range) + this.min;
    var rand1 = Math.ceil(rand)
    return rand1;

}


var seattle = new Stores('seattle', 23, 65, 6.3);
console.log(seattle);
var tokyo = new Stores('tokyo', 3, 24, 1.2);
console.log(tokyo);
var dubai = new Stores('dubai', 11, 38, 3.7);
console.log(dubai);
var paris = new Stores('paris', 20, 38, 3.7);
console.log(paris);
var lima = new Stores('lima', 2, 16, 4.6);
console.log(lima);
seattle.randomInRange();
console.log('seattle', seattle.rand);
var storeName = [seattle, tokyo, dubai, paris, lima];

Stores.prototype.cookiesNum = function () {
    for (var j = 0; j < 14; j++) {
        var randomNum = this.randomInRange(this.min, this.max)
        var cookiesNums = Math.ceil(this.avarage * randomNum);
        this.theNumOfCookies.push(cookiesNums);
        this.totalCookies += cookiesNums;


    }
    console.log('cooo', this.theNumOfCookies)
    console.log(this.totalCookies)
}
console.log('hello ', this.theNumOfCookies);
for (var i = 0; i < storeName.length; i++) {
    console.log(storeName[i])
    storeName[i].cookiesNum();
}
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var container = document.getElementById('content-area')
var table = document.createElement('table');
container.appendChild(table);
var headerRaw = document.createElement('tr');
table.appendChild(headerRaw);
var dayHours = document.createElement('th');
headerRaw.appendChild(dayHours);
dayHours.textContent = '       ';
for (var i = 0; i < hours.length; i++) {

    var hourHeader = document.createElement('th');
    headerRaw.appendChild(hourHeader);
    hourHeader.textContent = hours[i];
}
var locationTotal = document.createElement('th');
headerRaw.appendChild(locationTotal);
locationTotal.textContent = 'Daily Location Total ';
Stores.prototype.results = function () {
    var headerRaw = document.createElement('tr');
    table.appendChild(headerRaw);
    var name = document.createElement('th');
    headerRaw.appendChild(name);
    name.textContent = this.name;
    for (var i = 0; i < this.theNumOfCookies.length; i++) {
        var numOfCookies = document.createElement('td');
        headerRaw.appendChild(numOfCookies);
        numOfCookies.textContent = this.theNumOfCookies[i];
    }
    var totalOfCookies = document.createElement('td');
    headerRaw.appendChild(totalOfCookies);
    totalOfCookies.textContent = this.totalCookies;
};
for (var i = 0; i < storeName.length; i++) {
    storeName[i].results();

}
var headerRaw = document.createElement('tr');
table.appendChild(headerRaw);
var hourTotal = document.createElement('td');
headerRaw.appendChild(hourTotal);
hourTotal.textContent = 'Totals';
for (var i = 0; i < 14; i++) {
    var hourTotal = document.createElement('td');
    headerRaw.appendChild(hourTotal);
    hourTotal.textContent = seattle.theNumOfCookies[i] +tokyo.theNumOfCookies[i]+dubai.theNumOfCookies[i]+paris.theNumOfCookies[i]+lima.theNumOfCookies[i];
}
var Total = document.createElement('td');
headerRaw.appendChild(Total);
Total.textContent = seattle.totalCookies+tokyo.totalCookies+dubai.totalCookies+paris.totalCookies+lima.totalCookies;

