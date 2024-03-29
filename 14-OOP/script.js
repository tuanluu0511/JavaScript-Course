'use strict';

/*
// CODING CHALLENGE 4:

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log((this.speed += 10));
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  getCharge() {
    return this.#charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${
        this.speed
      } km/h, with a charge of ${this.getCharge()}%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().brake().chargeBattery(50).accelerate().brake();
// Private class field and method

// 1.Public fields(instances)
// 2.Private fields
// 3.Public methods
// 4.Private methods
// (there is also static version)

// Encapsulation: Protected properties and methods

//Clases Example:

class Account {
  //1.Public fields
  locale = navigator.language;
  // 2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected properties:
    this.#pin = pin;
  }

  // 3. Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawl(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan) {
    if (this._approveLoan) {
      this.deposit(val);
      console.log('Your Loan is approved');
      return this;
    }
  }
  // 4. Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Max', 'USD', 1111);
acc1.deposit(200);
console.log(acc1);
// console.log(acc1.#approveLoan);
// console.log(acc1.#movements);
// console.log(acc1.#pin);

// acc1.requestLoan(500);
// Chaining
acc1.deposit(400).withdrawl(100).deposit(500).requestLoan(5000).withdrawl(3000);

console.log(acc1.getMovements());

// Inheritance between classes : Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi I'm ${this.fullName}, i study ${this.course}`);
};

const thomas = Object.create(StudentProto);
thomas.init('Thomas Toy', 2015, 'Back End');
thomas.introduce();
thomas.calcAge();
// Inheritance between classes: ES6 Classes
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always this line first
    super(fullName, birthYear);
    this.course = course;
  }

  caclAge() {
    console.log(
      `I'm ${2021 - this.birthYear} years old. But I feel still so young`
    );
  }
}

const Alan = new StudentCl('Alan Greenspan', 1970, 'Computer Science');
// console.log(Alan);
Alan.greeting();
Alan.caclAge();

//////////////////////////////////////
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

////////////////////////////////////////////
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
