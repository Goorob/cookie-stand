'use strict'
var footerRows ; 
function Stores(name, min, max, avarage) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avarage = avarage;
    this.theNumOfCookies = [];
    this.totalCookies = 0;
    
}
var  storeName= [];
storeName.push(new Stores('seattle', 23, 65, 6.3));
storeName.push(new Stores('tokyo', 3, 24, 1.2));
storeName.push(new Stores('dubai', 11, 38, 3.7));
storeName.push(new Stores('paris', 20, 38, 2.3));
storeName.push(new Stores('lima', 2, 16, 4.6));
// var seattle = new Stores('seattle', 23, 65, 6.3);
// console.log(seattle);
// var tokyo = new Stores('tokyo', 3, 24, 1.2);
// console.log(tokyo);
// var dubai = new Stores('dubai', 11, 38, 3.7);
// console.log(dubai);
// var paris = new Stores('paris', 20, 38, 3.7);
// console.log(paris);
// var lima = new Stores('lima', 2, 16, 4.6);
// console.log(lima);


// var storeName = [seattle, tokyo, dubai, paris, lima];



var shopForm = document.getElementById("AddShop");
shopForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.name.value;
    var min = event.target.min.value;
    var max = event.target.max.value;
    var avarage = event.target.avarage.value;
    var newStores = new Stores(name, min, max, avarage);
    console.log(name);
    newStores.cookiesNum();
    storeName.push(newStores);
    cookietable.removeChild(footerRows);
    newStores.renderDataRows();
    renderfooterRows(cookietable );
    
});
Stores.prototype.randomInRange = function () {
    var range = this.max - this.min;
    var rand = (Math.random() * range) + this.min;
    var rand1 = Math.ceil(rand)
    return rand1;
}
Stores.prototype.cookiesNum = function () {
    for (var j = 0; j < 14; j++) {
        var randomNum = this.randomInRange(this.min, this.max)
        var cookiesNums = Math.ceil(this.avarage * randomNum);
        this.theNumOfCookies.push(cookiesNums);
        this.totalCookies += cookiesNums;


    }

    console.log(this.totalCookies)
    console.log('hello ', this.theNumOfCookies);
}
console.log('hello ', this.theNumOfCookies);
for (var i = 0; i < storeName.length; i++) {
    console.log(storeName[i])
    storeName[i].cookiesNum();
}

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var container = document.getElementById('stores'); 
var cookietable = document.createElement('table');
container.appendChild(cookietable);
function renderHeaderRow(table) {
   var headerRow = document.createElement('tr');
   table.appendChild(headerRow);
   var Header = document.createElement('th');
   headerRow.appendChild(Header);
   for (var i = 0; i < hours.length; i++) {
    var hourheader = document.createElement('th');
    headerRow.appendChild(hourheader);
    hourheader.textContent = hours[i];
}
var locationTotal = document.createElement('th');
headerRow.appendChild(locationTotal);
locationTotal.textContent = 'Daily Location Total';
}
renderHeaderRow(cookietable);
Stores.prototype.renderDataRows = function () {
   var dataRow = document.createElement('tr');
   cookietable.appendChild(dataRow);
   var name = document.createElement('th');
   dataRow.appendChild(name);
   name.textContent = this.name;
   for (var i = 0; i < this.theNumOfCookies.length; i++) {
    var numOfCookies = document.createElement('td');
    dataRow.appendChild(numOfCookies);
    numOfCookies.textContent = this.theNumOfCookies[i];
}
var totalofcookies = document.createElement('td');
dataRow.appendChild(totalofcookies);
totalofcookies.textContent = this.totalCookies;
};
for (var i = 0; i < storeName.length; i++) {
    this.storeName[i].renderDataRows();
 }
 function renderfooterRows(table) {
    footerRows = document.createElement('tr');
    table.appendChild(footerRows);
    var hourTotal = document.createElement('td');
    footerRows.appendChild(hourTotal);
  hourTotal.textContent = 'Totals';
    var megsum = 0;
    for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
        var td = document.createElement('td');
        footerRows.appendChild(td);
        var sum = 0;
        for (var shopIndex = 0; shopIndex < storeName.length; shopIndex++) {
            var shop =storeName[shopIndex];
            sum += shop.theNumOfCookies[hourIndex];
        }
        td.textContent = sum;
        megsum += sum;
    }
    var td = document.createElement('td');
    footerRows.appendChild(td);
    td.textContent = megsum;
 }
 renderfooterRows(cookietable);
 


