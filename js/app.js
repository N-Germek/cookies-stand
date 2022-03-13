'use strict'

console.log(`Hello World`);

const hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']

console.log(hour);
console.log(hour[2]);

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    dailyTotal: 0,
    avgCookiesSoldHoulyArray: [],

    getRandomCustomer: function () {
        //this is specifically for the customers
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);// <--- generating random customer.
    },

    calcCookiesPerHour: function () {
        for (let i = 0; i < hour.length; i++) {
            let customer = this.getRandomCustomer();
            let cookiesSold = Math.floor(customer * this.avg);
            this.avgCookiesSoldHoulyArray.push(cookiesSold);
        }
    },
    sum: function () {
            let totalHourlyCookies = 0;
            //this is assigning multiple of any cookie index in the HOUR array.
            for (let i = 0; i < this.avgCookiesSoldHoulyArray.length; i++) {
                totalHourlyCookies += this.avgCookiesSoldHoulyArray[i];
                // this is being multiplied and then reassigned
                // if finding the letters in the "index" field, look back to the begining of the loop to see what vault it started at. That is the value it is starting at. 
            }
            let display = `The total cookies sold are ${totalHourlyCookies}.`;
            console.log(display);
            return [totalHourlyCookies, display];
    }
}
seattle.calcCookiesPerHour();
console.log(seattle);
seattle.sum();
