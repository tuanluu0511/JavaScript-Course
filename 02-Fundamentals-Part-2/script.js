/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

console.log(fruitProcessor(3, 0));
// Function declaration
const Age1 = calcAge1(1993);

function calcAge1(yearBirth) {
  return 2021 - yearBirth;
}

// Function expression

const calcAge2 = function (yearBirth) {
  return 2021 - yearBirth;
};
const Age2 = calcAge2(1993);

console.log(Age1, Age2);


// ARROW FUNCTION

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retire = 65 - age;
  return `${firstName} is ${age} years old. He will retire in ${retire} years.`;
};

console.log(yearUntilRetirement(1993, "Nghi"));
console.log(yearUntilRetirement(1996, "Thanh"));


//Declared function
function cong(a, b) {
  return a + b;
}
console.log(cong(2, 3));

//Expresion function
var cong1 = function (a, b) {
  return a + b;
};
console.log(sum(3, 3));

//Arrow function
const cong2 = (a, b) => a + b;
console.log(add(4, 4));


// FUNCTION CALLING OTHER FUNCTION
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (appples, oranges) {
  const applesPieces = cutPieces(appples);
  const orangesPieces = cutPieces(oranges);
  
  const juice = `Juice has ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));


function calcAge(birthYear, firstName) {
  const age = 2021 - birthYear;
  console.log(`${firstName} is ${age} years old.`);
}

const age = calcAge(1991, "Jonas");

ARRAY
//Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const years = new Array(1993, 1996, 1991, 2003);

// const age1 = calcAge(years[0]);
// console.log(age1);

const ages = new Array(
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1])
  );
  console.log(ages);
  
  
  const friends = new Array("An", "Hoa", "Tuan");
const ages = new Array(1993, 1992, 1993);
friends.push(ages);
console.log(friends);


// Object method
const tuan = {
  firstName: "Tuan",
  lastName: "Luu",
  birthYear: 1993,
  job: "jobless",
  friend: ["Nghi", "IDK"],
  hasDriverLicense: false,
  
  // calcAge: function (birthYear) {
    //   return 2021 - birthYear;
  // },

  // calcAge: function () {
    //   // console.log(this);
    //   return 2021 - this.birthYear;
    // },
    
    calcAge: function () {
      this.age = 2021 - this.birthYear;
      return this.age;
    },
    
    getSumary: function () {
      return `${this.firstName} is a ${this.age}-year old ${
        this.job
      }, and he has ${tuan.hasDriverLicense ? "a" : "no"} drvier's license`;
  },
};

console.log(tuan.calcAge());
console.log(tuan.age);

//Challenge
console.log(tuan.getSumary());


//The for loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`This is line ${rep}`);
}


// Looping Array
const tuan = ["Tuan", "Luu", 1993, "jobless", ["Nghi", "IDK"]];
const types = [];

for (let i = 0; i < tuan.length; i++) {
  console.log(tuan[i], typeof tuan[i]);
  
  // Filling types array
  // types[i] = typeof tuan[i];
  types.push(typeof tuan[i]);
}

console.log(types);


// Example: Calc ages
const years = [1993, 1991, 1995, 1996];
const ages = [];
for (let i = 0; i < years.length; i++) {
  // ages[i] = 2021 - years[i];
  ages.push(2021 - years[i]);
}

console.log(ages);


// Continue
const years = [1993, 1991, 1995, 1996];
const ages = [];
for (let i = 0; i < years.length; i++) {
  // ages[i] = 2021 - years[i];
  ages.push(2021 - years[i]);
  if (ages[i] !== 26) continue;
  console.log(ages);
}

// //Break
const years = [1993, 1991, 1995, 1996];
const ages = [];
for (let i = 0; i < years.length; i++) {
  // ages[i] = 2021 - years[i];
  ages.push(2021 - years[i]);
  if (ages[i] === 26) break;
}

console.log(ages);

// While loop 
let rep = 1;
while (rep <= 10) {
  console.log(`${rep}`);
  rep++;
}

let dice = 0;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

*/

console.log();
