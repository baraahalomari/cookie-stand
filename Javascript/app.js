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
thElement.textContent='';
for (let i = 0; i < hoursLocation.length; i++) {
    let thElement = document.createElement(`th`);
    headingRow.appendChild(thElement);
    thElement.textContent = hoursLocation[i];
}
let finalTh=document.createElement(`th`);
headingRow.appendChild(finalTh);
finalTh.textContent="Daily Location Total";
}




function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



let locations = [];
function LocationShop(nameLoc, min, max, avg) {
    this.nameLoc = nameLoc;
    this.total = 0;
    this.min=min;
    this.max = max;
    this.avg=avg;
   //  this.avgCust = [];
    this.cookies = [];
    locations.push(this);
}

    LocationShop.prototype.getAvg=function(){

        for (let j = 0; j < hoursLocation.length; j++) {
            this.cookies.push(Math.floor(randomNumber(this.min, this.max) * this.avg));
            this.total += this.cookies[j];
        }


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


    function forFooter() {
        let footrtER=document.createElement(`tr`);
        table.appendChild(footrtER);
        let totalTd=document.createElement(`td`);
        footrtER.appendChild(totalTd);
        totalTd.textContent=`Totals`;

        let totalForHour;
        let totalTotal=0;
        for (let i = 0; i < hoursLocation.length; i++) {
            totalForHour=0;
            for (let j = 0; j < locations.length; j++) {

                totalForHour+=locations[j].cookies[i];
                totalTotal+=locations[j].cookies[i];
            }
            let finalTd =document.createElement(`td`);
            footrtER.appendChild(finalTd);
        finalTd.textContent=totalForHour;
        }    
    
        let totalsth =document.createElement(`th`);
        footrtER.appendChild(totalsth);
        totalsth.textContent=totalTotal;

    }
forHeader();


let seattle =new LocationShop(`Seattle`, 23, 65 ,6.3);
let tokyo = new LocationShop(`Tokyo`, 3, 24, 1.2);
//tokyo.getAvg();
// dubai.getAvg();
let dubai = new LocationShop(`Dubai`, 11, 38, 3.7);
//dubai.getAvg();
// paris.getAvg();
let paris = new LocationShop(`Paris`, 20, 38, 2.3);
//paris.getAvg();
// lima.getAvg();
let lima = new LocationShop(`Lima`, 2, 16, 4.6);







let cookieStand= document.getElementById(`cookiestand`);
console.log(cookieStand);
cookieStand.addEventListener(`submit`,submitter);

function submitter(event) {
    event.preventDefault();
    let nameLoc= event.target.locationFaild.value;

    console.log(nameLoc);

    let min =parseInt(event.target.minCust.value);
    console.log(min);
    let max = parseInt(event.target.maxCust.value);
    console.log(max);
    let avg =parseFloat(event.target.avgCust.value);

    console.log(avgCust);
   let addedLocation=new LocationShop(nameLoc, min, max, avg);
    console.log(addedLocation);
 
   addedLocation.getAvg();
  table.textContent='';
 forHeader();
 
    for (let i=0 ; i< locations.length; i++ ) {

    locations[i].total=0;
         locations[i].getAvg();
        locations[i].randerRow();
        
    }
 
    forFooter();
}


for (let i = 0; i < locations.length; i++) {
  locations[i].getAvg();
    locations[i].randerRow();
     
}

forFooter();



