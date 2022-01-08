'use strict';

// CODING CHALLENGE 3:

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  return console.log(
    `Tesla is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const maxEv = new EV('Tesla', 120, 23);
maxEv.accelerate();
maxEv.brake();
maxEv.accelerate();
maxEv.accelerate();
// console.log(maxEv);
// console.dir(EV.prototype.constructor);

/*
// Inheritance Between "Classes": Constructor Functions

const Person = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};

Person.prototype.caclAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (fullName, birthYear, course) {
  Person.call(this, fullName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi I'm ${this.fullName}, i study ${this.course}`);
};

const max = new Student('Max', 1996, 'Data Sicence');

Student.prototype.constructor = Student;

max.introduce();
max.caclAge();
console.dir(Student.prototype.constructor);
// CODING CHALLENGE 2

class CarCl {
  constructor(car, speed) {
    this.car = car;
    this.speed = speed;
  }

  get speedUS() {
    return (this.speed = this.speed / 1.6);
  }

  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 5));
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new CarCl('Ford', 120);
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1);

///////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const david = Object.create(PersonProto);
david.name = 'David';
david.birthYear = 2003;
david.calcAge();

const laura = Object.create(PersonProto);
laura.init('Laura', 1975);
laura.calcAge();

// Classes expression
// const PersonCl = class {};

// Setters and Letters
const account = {
  owner: 'Jonas',
  movements: [100, 200, 500, 400, 300],

  get lastest() {
    return this.movements.pop();
  },
};

// Classes declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  caclAge() {
    console.log(2037 - this.birthYear);
  }

  greeting() {
    console.log(`Hello ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else {
      console.log(`You entered a wrong name!`);
    }
  }

  get fullName() {
    return (this.fullName = this._fullName);
  }
  // Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

PersonCl.hey();

const jessica = new PersonCl('Jessica Davis', 1991);
jessica.age;


const sarah = new PersonCl('Sarah', 1991);
sarah.caclAge();

// PersonCl.prototype.greeting = function () {
  //   console.log(`Hello ${this.name}`);
// };
sarah.greeting();

// CODING CHALLENGE 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  console.log((this.speed = this.speed + 10));
};
Car.prototype.brake = function () {
  console.log((this.speed = this.speed - 5));
};

const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
bmw.brake();
bmw.brake();
bmw.brake();
console.log(bmw.__proto__);
console.log(bmw);
// function contruction
const Person = function (name, birthYear) {
  // Instances properties
  this.name = name;
  this.birthYear = birthYear;
};

// 4 step when calling contructor function
// 1 creat new {} object
// 2 when fucntion is called, this = {}
// 3 {} linked to prototype
// 4 function automatically return {}

const su = new Person('Su', 1991);
// console.log(su);

const vy = new Person('Vy', 1993);
// console.log(vy);

const ga = new Person('ga', 2017);
// console.log(ga);

// console.log(ga instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

console.log(su.birthYear);
su.calcAge();
ga.calcAge();
console.log(Person.prototype);

const h1 = document.querySelector('h1');
console.dir(h1);
*/
