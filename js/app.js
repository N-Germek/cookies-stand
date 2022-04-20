'use strict';
let table = document.getElementById('table');
let head = document.getElementById('head');
let foot = document.getElementById('foot');
let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']

let storesArray = [];
function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.dailytotal = 0;
    this.avgCookiesSoldHoulyArray = [];
    storesArray.push(this)    
}

Store.prototype.getRandomCustomer = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesPerHour = function() {
    for (let i = 0; i < hour.length; i++) {
        let customer = this.getRandomCustomer();
        let cookiesSold = Math.ceil(customer * this.avg);
        this.dailyTotal = (this.dailyTotal + cookiesSold);
        this.avgCookiesSoldHoulyArray.push(cookiesSold);
    }
};

Store.prototype.render = function () {
    this.calcCookiesPerHour();
    let storesRows = document.createElement('tr');
    table.appendChild(storesRows);
    let storeName = document.createElement('td');
    storeName.textContent = this.name;
    storesRows.appendChild(storeName);
  for (let i = 0; i < hour.length; i++) {
    let hourlyCookieSales = document.createElement('td');
    hourlyCookieSales.textContent = this.avgCookiesSoldHoulyArray[i];
    storesRows.appendChild(hourlyCookieSales);
    // console.log(render);
  };
        let total = document.createElement('td');
        total.textContent = this.dailyTotal;
        stores.appendChild(total);
    };
    function createHeader() {
        let tableRow = document.createElement('tr');
        let tableHeader = document.createElement('th');
        tableHeader.textContent = 'location';
        tableRow.appendChild(tableHeader);
        for (let i = 0; i < hour.length; i++) {
            tableHeader = document.createElement('th');
            tableHeader.textContent = hour[i];
            tableRow.appendChild(tableHeader);
        }
        tableHeader = document.createElement('th');
        tableHeader.textContent = 'total';
        tableRow.appendChild(tableHeader);
        head.appendChild(tableRow);
    }
    
    function createFooter () {
        let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('td');
  tableHeader.textContent = 'Hourly Total';
  tableRow.appendChild(tableHeader);
  let grandTotal = 0;
  for (let i = 0; i < hour.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storesArray.length; j++) {
      hourlyTotal += storesArray[j].avgCookiesSoldHoulyArray[i];
      grandTotal += storesArray[j].avgCookiesSoldHoulyArray[i];
    }

    let tableHour = document.createElement('td')
    tableHour.textContent = hourlyTotal;
    tableRow.appendChild(tableHour);
  }

  let tableTotal = document.createElement('td');
  tableTotal.textContent = grandTotal;
  tableRow.appendChild(tableTotal);
  foot.appendChild(tableRow);
    }

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 23, 65, 6.3);
new Store('Lima', 2, 16, 4.6);

function renderLocations() {
    for (let i = 0; i < storesArray.length; i ++) {
    storesArray[i].render();
    }
};

function footerReset() {
    while (foot.firstChild) { 
      foot.removeChild(foot.firstChild);
    }
    createFooter();
  }


function handleForm(event) {
    event.preventDefault();
    let newLocation = event.target.location.value;
    let newMin = parseInt(event.target.min.value);
    let newMax = parseInt(event.target.max.value);
    let newAvg = parseInt(event.target.avg.value);
    console.log(newLocation);
    let newStore = new Store(newLocation, newMin, newMax, newAvg); 
    storesArray.push(newStore);
    newStore.render();
    footerReset();
  }

  let stores = document.getElementById('stores');
  stores.addEventListener('submit', handleForm);
  
  createHeader();
  renderLocations();
  createFooter();
 