'use strict'

let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  avgCookiesSoldHoulyArray: [],
  getRandomCustomer: function(){
    //this is specifically for the customers
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);// <--- generating random customer.
  },
  calcCookiesPerHour: function(){
    for (let i = 0; i < hour.length; i++){
      let customer = this.getRandomCustomer();
      let cookiesSold = Math.floor(customer * this.avg);
      this.avgCookiesSoldHoulyArray.push(cookiesSold);
    }
  },
  fuction sum(totalCookies) {
    let totalHourlyCookies = 1; //this is assigning multiple of any cookie index in the HOUR array.
    for (let i = 0; i < hour.length; i++){
    totalHourlyCookies =sum(hour[i], totalHourlyCookies)[0];// this is being multiplied and then reassigned
    }
    let display = `The total cookies sold are ${this.totalCookiesSold}.`;
    return [totalHourlyCookies, display];
  }
},
console.log(seattle.getRandomCustomer());
seattle.calcCookiesPerHour();
console.log(seattle.avgCookiesSoldHoulyArray);
    // let totalCookies = sum(sum(calcCookiesPerHour,hour)[0]);
    // hour.splice  ()
    // return [calcCookiesPerHour, totalCookies];
// console.log(seattle.avgCookiesSoldHoulyArray());
//floor tells it to round down, and cieling tells it to round up. (people)
//math.random is telling them generate a number.
//calcCookiesPerHour: function()
// code that prints my cookies to the dom
//calc cookies for all 14 hours
// for loop?
//inside for loop? use random number of customer to calculate numer of cookies sold that hour
//
// a for loop to go through your cookies array
// use random number of customer to calculate numer of cookies sold that hour
//invoke our methods on each store
 // for (i = 0; i < hour.length; i++){
  //   asdasd =
let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  avgCookiesSoldHoulyArray: [],
  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(dubai.getRandomCustomer());
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  avgCookiesSoldHoulyArray: [],
  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(paris.getRandomCustomer());
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  avgCookiesSoldHoulyArray: [],
  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(paris.getRandomCustomer());
let tokyo = {
  name: 'Tokyo',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  avgCookiesSoldHoulyArray: [],
  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(tokyo.getRandomCustomer());