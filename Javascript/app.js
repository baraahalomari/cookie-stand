`use strict`;

let hoursLocation = [`6am :`, `7am :`, `8am :`, `9am :`, `10am :`, `11am :`, `12pm :`, `1pm :`, `2pm :`, `3pm :`, `4pm :`, `5pm :`, `6pm :`, `7pm :`];

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
