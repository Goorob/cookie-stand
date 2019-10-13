var seattle = {
    min: 23,
    max: 65,
    avarage: 6.3,
    randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        return Math.ceil(rand);
    }
};
var tokyo = {
    min: 3,
    max: 24,
    avarage: 1.2,
    randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        return Math.ceil(rand);
    }

};
var dubai = {
    min: 11,
    max: 38,
    avarage: 3.7,
    randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        return Math.ceil(rand);
    }

};
var paris = {
    min: 20,
    max: 38,
    avarage: 2.3,
    randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        return Math.ceil(rand);
    }

};
var lima = {
    min: 2,
    max: 16,
    avarage: 4.6,
    randomInRange: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        return Math.ceil(rand);
    }
};
// seattle 
var totalCookies =0 ;
var seattleResult1 = [];
for (var j = 6; j < 12; j++) {
    var seattleCust = seattle.randomInRange(seattle.min, seattle.max);
    var cookiesNumSeattle = Math.ceil(seattle.avarage * seattleCust);
    totalCookies += cookiesNumSeattle;
    var seattleString = j + 'am :' + cookiesNumSeattle + ' cookies .';
    seattleResult1.push(seattleString);
}
if (j = 12) {
    var seattleCust = seattle.randomInRange(seattle.min, seattle.max);
    var cookiesNumSeattle=Math.ceil(seattle.avarage * seattleCust);
    totalCookies+=cookiesNumSeattle;
   var seattleString = j + 'pm :' + cookiesNumSeattle + ' cookies .';
    seattleResult1.push(seattleString);
}

for (var j = 1; j < 8; j++) {
    var seattleCust = seattle.randomInRange(seattle.min, seattle.max);
    var cookiesNumSeattle= Math.ceil(seattle.avarage * seattleCust);
    totalCookies+=cookiesNumSeattle;
    var seattleString2 = j + 'pm :' + cookiesNumSeattle + ' cookies .';
    seattleResult1.push(seattleString2);
} 
var totalstring = 'Total : ' + totalCookies + ' cookies .';
seattleResult1.push(totalstring);
console.log(totalCookies)
console.log(seattleResult1);
// tokyo
var totalCookies1 = 0 ;
var tokyoResult1 = [];
for (var j = 6; j < 12; j++) {
    var tokyoCust = tokyo.randomInRange(tokyo.min, tokyo.max);
    var cookiesNumtokyo = Math.ceil(tokyo.avarage * tokyoCust);
    totalCookies1+=cookiesNumtokyo
    var tokyoString = j + 'am :' + cookiesNumtokyo + ' cookies .';
    tokyoResult1.push(tokyoString);
}
if (j = 12) {
    var tokyoCust = tokyo.randomInRange(tokyo.min, tokyo.max);
    var cookiesNumtokyo =Math.ceil(tokyo.avarage * tokyoCust);
    totalCookies1+=cookiesNumtokyo
   var tokyoString = j + 'pm :' + cookiesNumtokyo + ' cookies .';
    tokyoResult1.push(tokyoString);
}


for (var j = 1; j < 8; j++) {
    var tokyoCust = tokyo.randomInRange(tokyo.min, tokyo.max);
    var cookiesNumtokyo = Math.ceil(tokyo.avarage * tokyoCust);
    totalCookies1+=cookiesNumtokyo
    var tokyoString2 = j + 'pm :' + cookiesNumtokyo + ' cookies .';
    tokyoResult1.push(tokyoString2);
} 
var totalstring1 = 'Total : ' + totalCookies1 + ' cookies .';
tokyoResult1.push(totalstring1);
console.log(tokyoResult1);
// dubai
totalCookies2=0;
var dubaiResult1 = [];
for (var j = 6; j < 12; j++) {
    var dubaiCust = dubai.randomInRange(dubai.min, dubai.max);
    var cookiesNumDubai = Math.ceil(dubai.avarage * dubaiCust);
    totalCookies2+=cookiesNumDubai;
    var dubaiString = j + 'am :' + cookiesNumDubai + ' cookies .';
    dubaiResult1.push(dubaiString);
}
if (j = 12) {
    var dubaiCust = dubai.randomInRange(dubai.min, dubai.max);
    var cookiesNumDubai=Math.ceil(dubai.avarage * dubaiCust);
    totalCookies2+=cookiesNumDubai ;
   var dubaiString = j + 'pm :' + cookiesNumDubai + ' cookies .';
    dubaiResult1.push(dubaiString);
}

for (var j = 1; j < 8; j++) {
    var dubaiCust = dubai.randomInRange(dubai.min, dubai.max);
    var cookiesNumDubai= Math.ceil(dubai.avarage * dubaiCust);
    totalCookies2+=cookiesNumDubai ;
    var dubaiString2 = j + 'pm :' + cookiesNumDubai + ' cookies .';
    dubaiResult1.push(dubaiString2);
} 
var totalstring2 = 'Total : ' + totalCookies2 + ' cookies .';
  dubaiResult1.push(totalstring2);
console.log(dubaiResult1);

// paris 
var totalCookies3 =0 ;
var parisResult1 = [];
for (var j = 6; j < 12; j++) {
    var parisCust = paris.randomInRange(paris.min, paris.max);
    var cookiesNumParis = Math.ceil(paris.avarage * parisCust);
    totalCookies3+= cookiesNumParis ; 
    var parisString = j + 'am :' + cookiesNumParis + ' cookies .';
    parisResult1.push(parisString);
}
if (j = 12) {
    var parisCust = paris.randomInRange(paris.min, paris.max);
    var cookiesNumParis=Math.ceil(paris.avarage * parisCust);
    totalCookies3+= cookiesNumParis ;
   var parisString = j + 'pm :' + cookiesNumParis + ' cookies .';
    parisResult1.push(parisString);
}


for (var j = 1; j < 8; j++) {
    var parisCust = paris.randomInRange(paris.min, paris.max);
    var cookiesNumParis= Math.ceil(paris.avarage * parisCust);
    totalCookies3+= cookiesNumParis ;
    var parisString2 = j + 'pm :' + cookiesNumParis + ' cookies .';
    parisResult1.push(parisString2);
} 
var totalstring3 = 'Total : ' + totalCookies3+ ' cookies .';
  parisResult1.push(totalstring3);
console.log(parisResult1);
//lima 
var totalCookies4= 0 ;
var limaResult1 = [];
for (var j = 6; j < 12; j++) {
    var limaCust = lima.randomInRange(lima.min, lima.max);
    var cookiesNumLima = Math.ceil(lima.avarage * limaCust);
    totalCookies4 += cookiesNumLima ;
    var limaString = j + 'am :' + cookiesNumLima + ' cookies .';
    limaResult1.push(limaString);
}
if (j = 12) {
    var limaCust = lima.randomInRange(lima.min, lima.max);
    var cookiesNumLima=Math.ceil(lima.avarage * limaCust);
    totalCookies4 += cookiesNumLima ;
   var limaString = j + 'pm :' + cookiesNumLima + ' cookies .';
    limaResult1.push(limaString);
}


for (var j = 1; j < 8; j++) {
    var limaCust = lima.randomInRange(lima.min, lima.max);
    var cookiesNumLima= Math.ceil(lima.avarage * limaCust);
    totalCookies4 += cookiesNumLima ;
    var limaString2 = j + 'pm :' + cookiesNumLima + ' cookies .';
    limaResult1.push(limaString2);
} 
var totalstring4 = 'Total : ' + totalCookies4+ ' cookies .';
  limaResult1.push(totalstring4);
console.log(limaResult1);
// html 
var paragraph = document.createElement('p') ;
paragraph.textContent = 'Seattle';
var contentArea = document.getElementById('content-area');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
contentArea.appendChild(ul);
for (var i = 0; i < 15; i++) {
   var li = document.createElement('li');
   li.textContent = seattleResult1[i];
   ul.appendChild(li);
};
var paragraph = document.createElement('p') ;
paragraph.textContent = 'Tokyo';
var contentArea = document.getElementById('content-area');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
contentArea.appendChild(ul);
for (var i = 0; i < 15; i++) {
   var li = document.createElement('li');
   li.textContent = tokyoResult1[i];
   ul.appendChild(li);
};
var paragraph = document.createElement('p') ;
paragraph.textContent = 'Dubai';
var contentArea = document.getElementById('content-area');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
contentArea.appendChild(ul);
for (var i = 0; i < 15; i++) {
   var li = document.createElement('li');
   li.textContent = dubaiResult1[i];
   ul.appendChild(li);
};
var paragraph = document.createElement('p') ;
paragraph.textContent = 'Paris';
var contentArea = document.getElementById('content-area');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
contentArea.appendChild(ul);
for (var i = 0; i < 15; i++) {
   var li = document.createElement('li');
   li.textContent = parisResult1[i];
   ul.appendChild(li);
};
var paragraph = document.createElement('p') ;
paragraph.textContent = 'Lima';
var contentArea = document.getElementById('content-area');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
contentArea.appendChild(ul);
for (var i = 0; i < 15; i++) {
   var li = document.createElement('li');
   li.textContent = limaResult1[i];
   ul.appendChild(li);
};























//    seattle
//    var seattleCust = randomInRange(23,65);
// console.log ('seatleRandomCust :',seattleCust)
// var cookiesNum = Math.ceil(seattleCust * seattle.avarage);
// console.log ('Cookies numbers for seattle store : '+ cookiesNum);
// seattle.cookiesNum = cookiesNum;

// // tokyo 
//    var tokyoCust = randomInRange(3,24);
//    console.log ('TokyoRandomCust :',tokyoCust)
// var cookiesNumTokyo = Math.ceil(tokyoCust * tokyo.avarage);
// console.log ('Cookies numbers for tokyo store  '+ cookiesNumTokyo);
// tokyo.cookiesNumTokyo = cookiesNumTokyo;


//    var dubaiCust = randomInRange(11,38);
//    console.log ('DubaiRandomCust :',dubaiCust)
//    var cookiesNumDubai = Math.ceil(dubaiCust * dubai.avarage);
//    console.log ('Cookies numbers for Dubai store  '+ cookiesNumDubai);
//    dubai.cookiesNumDubai = cookiesNumDubai;
//    var parisCust = randomInRange(20 ,38);
//    console.log ('ParisRandomCust :',parisCust);
//    var cookiesNumParis = Math.ceil(parisCust * paris.avarage);
//    console.log ('Cookies numbers for Paris store  '+ cookiesNumParis);
//    paris.cookiesNumParis = cookiesNumParis
//    var limaCust = randomInRange(2 , 16);
//    console.log ('LimaRandomCust :',limaCust)
//    var cookiesNumLima = Math.ceil(limaCust * lima.avarage);
//    console.log ('Cookies numbers for Lima store  '+ cookiesNumLima);
//    lima.cookiesNumLima = cookiesNumLima



