`use strict`;

let hoursLocation = [ `6am `, `7am `, `8am `, `9am `, `10am `, `11am `, `12pm `, `1pm `, `2pm `, `3pm `, `4pm `, `5pm`, `6pm `, `7pm `];
let parent = document.getElementById(`parent`);
let table = document.createElement(`table`);
parent.appendChild(table);

function forHeader() {
    
let headingRow = document.createElement(`tr`);
table.appendChild(headingRow);
let thElement = document.createElement(`th`);
headingRow.appendChild(thElement);
thElement.textContent='Name ';
for (let i = 0; i < hoursLocation.length; i++) {
    let thElement = document.createElement(`th`);
    headingRow.appendChild(thElement);
    thElement.textContent = hoursLocation[i];
}
let finalTh=document.createElement(`th`);
headingRow.appendChild(finalTh);
finalTh.textContent="Daily Location Total";
}

let locations = [`Seattle`, `Tokyo`, `Dubai`, `Paris`, `Lima`, `Totals`]


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}










function LocationShop(nameLoc, min, max, avg) {
    this.nameLoc = nameLoc;
    this.total = 0;
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.avgCust = [];
    this.cookies = [];

}

LocationShop.prototype.randerRow = function () {

    let dataRow = document.createElement(`tr`);
    table.appendChild(dataRow);
    let tdElement = document.createElement(`td`);
    dataRow.appendChild(tdElement);
    tdElement.textContent = this.nameLoc;
    for (let i = 0; i < hoursLocation.length; i++) {

        let tdElement = document.createElement(`td`);
        dataRow.appendChild(tdElement);
        tdElement.textContent = this.cookies[i];
    }
    let totaltdElement= document.createElement(`td`); 

    dataRow.appendChild(totaltdElement);
    totaltdElement.textContent=this.total;
}
LocationShop.prototype.getAvg = function () {
    for (let j = 0; j < hoursLocation.length; j++) {
        this.avgCust.push(Math.floor(randomNumber(this.min, this.max)));
        
    }

    for (let a = 0; a < hoursLocation.length; a++) {
        this.cookies.push(Math.floor(randomNumber(this.min, this.max) * this.avg));
        this.total += this.cookies[a];
    }
}
function forFooter() {
    let footrtER=document.createElement(`tr`);
    table.appendChild(footrtER);
    let totalth=document.createElement(`th`);
    footrtER.appendChild(totalth);
    totalth.textContent=`Totals`;

    let totalForHour;
    let totalTotal=0;
    for (let i = 0; i < hoursLocation.length; i++) {
        totalForHour=0;
        for (let j = 0; j < locations.length; j++) {
            totalForHour+=LocationShop.cookies[i];
            totalTotal+=hoursLocation.cookies[i];
        }
        let finalTh =document.createElement(`th`);
        dataRow.appendChild(finalTh);
        finalTh.textContent=totalForHour;
     }    
   
    let totalsth =document.createElement(`th`);
    footrtER.appendChild(totalsth);
    totalth.textContent=totalTotal;


}
forHeader();


let seattle = new LocationShop(`seattle`, 23, 65, 6.3);
seattle.getAvg();
seattle.randerRow();

console.log(seattle.cookies);
let tokyo = new LocationShop(`Tokyo`, 3, 24, 1.2);
tokyo.getAvg();
tokyo.randerRow();
let dubai = new LocationShop(`Dubai`, 11, 38, 3.7);
dubai.getAvg();
dubai.randerRow();
let paris = new LocationShop(`Paris`, 20, 38, 2.3);
paris.getAvg();
paris.randerRow();
let lima = new LocationShop(`Lima`, 2, 16, 4.6);
lima.getAvg();
lima.randerRow();
forFooter();
/*
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location1: `seattle`,
    avgCust: [],
    cookies: [],
    total: 0,
    getAvg: function () {
        for (let a = 0; a < hoursLocation.length; a++) {
            this.cookies.push(Math.floor(randomNumber(this.min, this.max)));
            this.total += this.cookies[a];
        }

        for (let j = 0; j < hoursLocation.length; j++) {
            this.avgCust.push(Math.floor(randomNumber(this.min, this.max)) * this.avg);

        }
    },
    getCookies: function () {
        let parent = document.getElementById(`seattel`);

        let articleElement = document.createElement(`article`);

        let h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location1;

        articleElement.appendChild(h2Element);

        let ulElement = document.createElement(`ul`);
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hoursLocation.length; i++) {
            let liElement = document.createElement(`li`);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hoursLocation[i]}  ${seattle.cookies[i]} Cookies`
        }
        let totalli = document.createElement(`li`);
        ulElement.appendChild(totalli);
        totalli.textContent = `Total: ${this.total} cookies`

        parent.appendChild(articleElement);
    }

}

seattle.getAvg();
seattle.getCookies();





let tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    location1: `tokyo`,
    total: 0,
    avgCust: [],
    cookies: [],
    getAvg: function () {
        for (let a = 0; a < hoursLocation.length; a++) {
            this.cookies.push(Math.floor(randomNumber(this.min, this.max)));
            this.total += this.cookies[a];
        }
        for (let j = 0; j < hoursLocation.length; j++) {
            this.avgCust.push(Math.floor(randomNumber(this.min, this.max)) * this.avg);
        }
    },
    getCookies: function () {
        let parent = document.getElementById(`tokyo`);

        let articleElement = document.createElement(`article`);

        let h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location1;

        articleElement.appendChild(h2Element);

        let ulElement = document.createElement(`ul`);
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hoursLocation.length; i++) {
            let liElement = document.createElement(`li`);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hoursLocation[i]}  ${tokyo.cookies[i]} Cookies`
        }

        let totalli = document.createElement(`li`);
        ulElement.appendChild(totalli);
        totalli.textContent = `Total: ${this.total} cookies`


        parent.appendChild(articleElement);
    }

}

tokyo.getAvg();
tokyo.getCookies();



let Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location1: `Dubai`,
    total: 0,
    avgCust: [],
    cookies: [],
    getAvg: function () {
        for (let a = 0; a < hoursLocation.length; a++) {
            this.cookies.push(Math.floor(randomNumber(this.min, this.max)));
            this.total += this.cookies[a];
        }
        for (let j = 0; j < hoursLocation.length; j++) {
            this.avgCust.push(Math.floor(randomNumber(this.min, this.max)) * this.avg);
        }
    },
    getCookies: function () {
        let parent = document.getElementById(`Dubai`);

        let articleElement = document.createElement(`article`);

        let h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location1;

        articleElement.appendChild(h2Element);

        let ulElement = document.createElement(`ul`);
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hoursLocation.length; i++) {
            let liElement = document.createElement(`li`);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hoursLocation[i]}  ${Dubai.cookies[i]} Cookies`
            }

        let totalli=document.createElement(`li`);
        ulElement.appendChild(totalli);
        totalli.textContent=`Total: ${this.total} cookies`



        parent.appendChild(articleElement);
    }

}

Dubai.getAvg();
Dubai.getCookies();


let Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    total: 0,
    location1: `Paris`,
    avgCust: [],
    cookies: [],
    getAvg: function () {
        for (let a = 0; a < hoursLocation.length; a++) {
            this.cookies.push(Math.floor(randomNumber(this.min, this.max)));
            this.total += this.cookies[a];
        }
        for (let j = 0; j < hoursLocation.length; j++) {
            this.avgCust.push(Math.floor(randomNumber(this.min, this.max)) * this.avg);
        }
    },
    getCookies: function () {
        let parent = document.getElementById(`Paris`);

        let articleElement = document.createElement(`article`);

        let h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location1;

        articleElement.appendChild(h2Element);

        let ulElement = document.createElement(`ul`);
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hoursLocation.length; i++) {
            let liElement = document.createElement(`li`);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hoursLocation[i]}  ${Paris.cookies[i]} Cookies`
        }

        let totalli=document.createElement(`li`);
        ulElement.appendChild(totalli);
        totalli.textContent=`Total: ${this.total} cookies`


        parent.appendChild(articleElement);
    }

}

Paris.getAvg();
Paris.getCookies();




let Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    total: 0,
    location1: `Lima`,
    avgCust: [],
    cookies: [],
    getAvg: function () {
        for (let a = 0; a < hoursLocation.length; a++) {
            this.cookies.push(Math.floor(randomNumber(this.min, this.max)));
            this.total += this.cookies[a];
        }
        for (let j = 0; j < hoursLocation.length; j++) {
            this.avgCust.push(Math.floor(randomNumber(this.min, this.max)) * this.avg);
        }
    },
    getCookies: function () {
        let parent = document.getElementById(`Lima`);

        let articleElement = document.createElement(`article`);

        let h2Element = document.createElement(`h2`);
        h2Element.textContent = this.location1;

        articleElement.appendChild(h2Element);

        let ulElement = document.createElement(`ul`);
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hoursLocation.length; i++) {
            let liElement = document.createElement(`li`);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hoursLocation[i]}  ${Lima.cookies[i]} Cookies`
        }

        let totalli=document.createElement(`li`);
        ulElement.appendChild(totalli);
        totalli.textContent=`Total: ${this.total} cookies`


        parent.appendChild(articleElement);
    }

}

Lima.getAvg();
Lima.getCookies();
*/