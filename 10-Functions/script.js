'use strict';
/*
const bookings = [];

const createBooking = function (flightNumber, numPassengers = 10, price = 10) {
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  console.log(bookings);
};

// createBooking('MH370');
createBooking('MH3701', 1, 2);
createBooking('MH370', 20, 30);


const flight = 'MH370';
const jonas = {
  name: 'Jonas Schmedmannt',
  passport: 32143432432423,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'VNA322';
  passenger.name = 'Mr. ' + passenger.name;
  
  if (passenger.passport === 32143432432423) {
    console.log('Checked In');
  } else console.log('Wrong passport!');
  console.log(flightNum);
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const changePass = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 100000000);
};

changePass(jonas);
checkIn(flight, jonas);
console.log(jonas);



// Function accepting function 
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original texts: ${str}`);
  console.log(`Transformed texts: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', upperFirstWord);

// Example:


// Function returning function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Meow');

greet('Hello')('Jonas');

const hello = greeting => name => console.log(`${greeting} ${name}`);
hello('Hi')('Meow');


// THE CALL AND APPLY METHOD
const vietJet = {
  airline: 'vietjet',
  iataCode: 'MH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({
        flight: `${this.iataCode}${flightNum}, name`,
    });
  },
};

const bamBoo = {
  airline: 'Bamboo',
  iataCode: 'BB',
  bookings: [],
};
vietJet.book(370, 'Vy');
vietJet.book(380, 'Vi');
console.log(vietJet);


const book = vietJet.book;

book.call(bamBoo, 322, 'Vy');


const poll = {
  answers: [0, 0, 0, 0],
  
  registerNewAnswer() {
    const number = Number(
      prompt(`What is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++`)
      );
      
      number !== 0 && number !== 1 && number !== 2 && number !== 3
      ? console.log(`Your answer is an invalid number!`)
      : `${this.answers[number]++}`;
      // console.log(this.answers);
    },
    
    displayResults(type) {
      type === Array ? console.log(this.answers) : `Poll results are + ${type}`;
    },
  };
  
  // poll.registerNewAnswer();
  
  document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
  
  
  // CLOSURES
  
  let f;
  const g = function () {
    const a = 20;
    f = function () {
      console.log(a * 2);
    };
  };
  
  g();
  f();
  
  const boardPassenger = function (n, wait) {
    const perGroup = n / 3;
    
    setTimeout(() => {
      console.log(`We now boarding ${n} passengers`);
      console.log(`There are 3 groups, each wuth ${n / 3} passengers`);
    }, wait * 1000);
    
    console.log(`Will start boarding in ${wait} second`);
  };
  
  boardPassenger(1000, 3);
  
  
  //  CODING CHALLENGE 2:
  
  (function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
  
  */
