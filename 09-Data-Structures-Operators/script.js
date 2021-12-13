'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(start, main) {
    return [this.starterMenu[start], this.mainMenu[main]];
  },

  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  orderDelivery({ menu, time, starter, location }) {
    console.log(
      `Order recived! ${this.mainMenu[menu]} & ${this.starterMenu[starter]} will be delievered to ${location} at ${time}`
    );
  },
};

/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr);

const entries = Object.entries(openingHours);
for (let [day, { open, close }] of entries) {
  console.log(`On ${day} day, we open at ${open} and close at ${close}.`);
}
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open} `);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Sorry we dont have this meal');

// console.log(restaurant.order?.(0, 1) ?? 'Mothod does not exitst');
// console.log(restaurant.openingHours?.fri ?? 'ABC');

// console.log(restaurant.order?.(0, 1));

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// console.log(console.log('abc'));


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);
for (const item of menu.entries()) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
restaurant.order && restaurant.order(0, 2);

restaurant.orderDelivery({
  time: '21:30',
  location: '129 Hoang Hoa Tham',
  starter: 1,
  menu: 2,
});
restaurant.orderDelivery({
  location: '129 Hoang Hoa Tham',
});

// let a = 100;
// let b = 120;
// const obj = { a: 1, b: 2, c: 3 };

// ({ a, b } = obj);
// console.log(a, b);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { food: idk = [], categories: tag = [] } = restaurant;
console.log(idk, tags);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const res1 = {
  numGuest: 0,
  name: 'Vy',
};

const res2 = {
  // name: 'Max',
  Age: 20,
};

res1.Age ||= 10;
console.log(res1.Age);
res2.Age ||= 30;
console.log(res2.Age);

res1.numGuest ??= 20;
console.log(res1.numGuest);
res2.numGuest ??= 30;
console.log(res2.numGuest);

res1.name &&= 'haha';
console.log(res1.name);
res2.name &&= 'haha';
console.log(res2.name);

// let [first, , second] = restaurant.categories;
// console.log(first, second);
// [second, first] = [first, second];
// console.log(first, second);
// const [a, b] = restaurant.order(0, 2);
// console.log(a, b);
// const nest = [1, 2, [3, 4]];

// const [a, , [b, c]] = nest;
// console.log(a, b, c);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerName) {},
};

// 1
const scoredPlayer = game.scored;
console.log(scoredPlayer);
for (const [no, sName] of scoredPlayer.entries()) {
  console.log(`Goal ${no + 1}: ${sName}`);
}

// 2
const od = Object.values(game.odds);
console.log(od);
let avg = 0;
let sum = 0;
for (const i of od) {
  sum += i;
}
avg = sum / od.length;
console.log(avg);

// 3
const odd = Object.entries(game.odds);
console.log(odd);
for (const [teamWin, oddNo] of odd) {
  const Str = teamWin === 'x' ? 'draw' : `victory ${game[teamWin]}`;
  console.log(`Odd of ${Str}: ${oddNo}`);
}

// 4
game.scorers = { Gnarby: 1, Hummels: 1, Lewandowski: 2 };
console.log(game.scorers);
// // 1
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayer] = players1;
// console.log(gk, fieldPlayer);
// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4
// const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);
// // 5
// const {
  //   odds: { team1, x: draw, team2 },
  // } = game;
  // // const { team1, x: draw, team2 } = game.odds;
  // console.log(team1, draw, team2);
  
  // // 6
  // // 7
  
  //CODING CHALLENGE 3: Game event
  const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

// 1 events array
const events = [...new Set(gameEvents.values())z];
console.log(events);
// 2 Remove the yellow card 64'
gameEvents.delete(64);
console.log(gameEvents);
// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// 4
for (const event of gameEvents) {
  console.log(
    gameEvents.keys < 45
      ? `[FIRST HALF] ${gameEvents.keys}\: ${gameEvents.values}`
      : `[SECOND HALF] ${gameEvents.keys}\: ${gameEvents.values}`
      );
    }

    const name = 'Jonas Abcd'.split(' ');
    console.log(name);
    
    const captalizeName = function (name) {
      const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

captalizeName('jonas schmedtmann');

// Padding

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(32918739874941));
console.log(maskCreditCard(3291873987));
console.log(maskCreditCard('329187398749411312'));


// CODING CHALLENGE 4:

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'+'.repeat(i + 1)}`);
  }
});



// console.log(flights);

const flightinfo = function (flights) {
  const rows = flights.split('+');
  console.log(rows);
  for (const row of rows) {
    // console.log(row);
    const line = row.split(';');
    // console.log(line[0]);
    line[0].includes('_Delayed') &&
    console.log(
      `+ ${line[0].replaceAll('_', ' ')} from ${line[1]
        .slice(0, 3)
        .toUpperCase()} to ${line[2].slice(0, 3).toUpperCase()} (${
          line[3]
        })`.padStart(45, ' ')
        );
        
        line[0].includes('_Delayed') ||
        console.log(
          ` ${line[0].replaceAll('_', ' ')} from ${line[1]
          .slice(0, 3)
          .toUpperCase()} to ${line[2].slice(0, 3).toUpperCase()} (${
            line[3]
          })`.padStart(45)
          );
        }
};

flightinfo(flights);


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  
  const getCode = str => str.slice(0, 3).toUpperCase();
  
  for (const flight of flights.split('+')) {
    // console.log(flight);
    const [type, from, to, time] = flight.split(';');
    // console.log(type);
    const output = `${type.startsWith('_Delayed') ? '+' : ''} ${type.replaceAll(
      '_',
      ' '
      )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
      console.log(output.padStart(45));
    }
    
*/
