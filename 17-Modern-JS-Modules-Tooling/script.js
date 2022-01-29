//Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// import * as shoppingCart from './shoppingCart.js';

// shoppingCart.addToCart('apple', 5);
// console.log(shoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('banana', 5);
add('orange', 5);
add('cocacola', 5);

console.log(cart);
