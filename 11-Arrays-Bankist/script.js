'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  // Set begin state to empty:
  containerMovements.innerHTML = '';
  // .textcontent = 0;
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value"> ${mov} €</div>
    </div>
    `;
    // Insert HTML to element class:
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (curAcc) {
  curAcc.balance = curAcc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${curAcc.balance} EUR  `;
};

const calcDisplaySumary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income} EUR`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur, i, arr) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outcome)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, cur, i, arr) => acc + cur, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);

// Updat UI
const updatUI = function (acc) {
  // Display balance
  calcDisplayBalance(acc);

  // Display sumary
  calcDisplaySumary(acc);

  // Display movements
  displayMovements(acc.movements);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & welcome message
    labelWelcome.textContent = `Welcome back! ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Updat UI
    updatUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(currentAccount);
  // console.log(receiverAccount);
  // Clear the input data
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount &&
    currentAccount?.username !== receiverAccount.username
  ) {
    // Tranfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
  }

  // Updat UI
  updatUI(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Updat UI
    updatUI(currentAccount);
  }
  // Clear the input field
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount?.username === inputCloseUsername.value &&
    currentAccount?.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Remove the account
    accounts.splice(index, 1);
    // Clear UI
    labelWelcome.textContent = 'Log in to get started';
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault;

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// CODING CHALLENGE 4:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
const recFood = dogs.forEach(
  dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(1, dogs);
// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(2, sarahDog);
console.log(
  `Sarah dog ear too ${sarahDog.recFood > sarahDog.curFood ? 'much' : 'little'}`
);

// 3.
const dogMuch = dogs
  .filter(dog => dog.recFood > dog.curFood)
  .flatMap(dog => dog.owners);
console.log(3, dogMuch);
const dogLittle = dogs
  .filter(dog => dog.recFood < dog.curFood)
  .flatMap(dog => dog.owners);
console.log(3, dogLittle);

// 4

// 5
const equalDog = dogs.some(dog => (dog.recFood = dog.curFood));
console.log(equalDog);
/*
// 1 Sum all the deposit
const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

// 2. Count num deposit > 1000
const bankDepositCount = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(bankDepositCount);

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposit1000);

// 3 reduce method return an object
// const objMovements = accounts
const { deposit, withdrawal } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur);
      sum[cur > 0 ? 'deposit' : 'withdrawal'] += cur;
      return sum;
    },
    { deposit: 0, withdrawal: 0 }
  );

console.log(deposit, withdrawal);

// 4. Convert title case:

const convertTitleCase = function (title) {
  const captalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : captalize(word)))
    .join(' ');

  return captalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and hERE is another TITLE wITH THE EXAmple'));
console.log(convertTitleCase('It is a sentence wiTH nothing SPECIAL'));

labelBalance.addEventListener('click', function () {
  // Take the value from UI
  const movementsUI = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI);
  const movss = movementsUI.map(el => Number(el.textContent.replace('€', '')));
  console.log(movss);

  // Array.from() function
  const movementUI2 = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementUI2);
});
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Flat
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const movementsTotal = accountMovements
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(movementsTotal);
// Flatmap
const movementsTotal2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(movementsTotal2);

// THE CODING CHALLENGE 3:
const dogs3 = [5, 2, 4, 1, 15, 8, 3];
const dogs4 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge3 = function (dogs) {
  const dogAge = dogs
    .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter(dog => dog >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(dogAge);
};
calcAverageHumanAge3(dogs3);
calcAverageHumanAge3(dogs4);
// THE CODING CHALLENGE 2:

const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogs) {
  // 1. Dog in Human age:
  const dogInHumanAge = dogs.map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4));
  // console.log(dogInHumanAge);
  // 2. Dog 18+:
  const dogAdults = dogInHumanAge.filter(dog => dog >= 18);
  // console.log(dogAdults);
  // 3. Calc average human age
  const avgAdultDogAge = dogAdults.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  console.log(avgAdultDogAge);
};

calcAverageHumanAge(dogs1);
calcAverageHumanAge(dogs2);

// The reduce method:

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(max);

const min = movements.reduce(
  (acc, cur) => (acc < cur ? acc : cur),
  movements[0]
);
console.log(min);

// The filter method:
const deposit = movements.filter(mov => mov > 0);
console.log(deposit);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

// The map method: 
const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movementsUSD);

const movementsDes = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrawl'} ${Math.abs(
      mov
    )}!`
);
console.log(movementsDes);

// CODING CHALLENGE 1:

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const Julia = [9, 16, 6, 8, 3];
const Kate = [10, 5, 6, 1, 4];

// // 1.Remove the first and the last two elements
// const dogsJuliacopy = dogsJulia.slice();
// dogsJuliacopy.splice(0, 1);
// dogsJuliacopy.splice(-2);
// console.log(dogsJuliacopy);

// // 2.Array with both datas
// const dogs = dogsJuliacopy.concat(dogsKate);
// console.log(dogs);

const checkDogs = function (dogJ, dogK) {
  //1
  const dogJcopy = dogJ.slice();
  dogJcopy.splice(0, 1);
  dogJcopy.splice(-2);
  // 2
  const dogs = dogJcopy.concat(dogK);
  // 3
  dogs.forEach(function (age, i) {
    const dog =
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppey`;
    console.log(dog);
  });
};

checkDogs(dogsJulia, dogsKate);
checkDogs(Julia, Kate);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'VND', 'BGP', 'VND', 'USD']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(map);
});

// THE FOREACH METHOD:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The forof loop:
// for (const movement of movements) {
  for (const [i, movement] of movements.entries()) {
    movement > 0
    ? console.log(`Movement ${i + 1}: You deposited ${movement}!`)
    : console.log(`Movement ${i + 1}: You widthdrawed ${Math.abs(movement)}!`);
}

console.log(`----------------FOR EACH--------`);
// The for each loop:
movements.forEach(function (mov, i, arr) {
  mov > 0
    ? console.log(`Movement ${i + 1}: You deposited ${mov}!`)
    : console.log(`Movement ${i + 1}: You widthdraw ${Math.abs(mov)}`);
});

// THE AT METHOD

const arr = [11, 25, 40];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// SIMPLE ARRAY METHOD

const arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, 2));
console.log(arr.slice(-1));
console.log(arr.slice(4));
console.log(arr.slice(1, -1));
console.log(arr.slice());

// SPLCE

arr.splice(-1);
console.log(arr);

// REVERSE

arr.push('e');
console.log(arr);
arr.reverse();
console.log(arr);

// CONCAT
const arr2 = arr.splice(-2);
console.log(arr2, arr);
console.log(arr.concat(arr2));

// JOIN
const string = arr.join(' - ');
console.log(string);

*/
