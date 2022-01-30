//Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
/*
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

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Not clean
// const lastPost = getLastPost().then(last => {
//   console.log(last);
// });

const lastPost = await getLastPost();
console.log(lastPost); 

const shoppingCart2 = (function () {
  const cart = [];
  const totalPrice = 230;
  const totalQuantiy = 10;
  const shippingCost = 10;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart!`);
  };
  
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from suplier`);
  };
  
  return {
    cart,
    totalPrice,
    totalQuantiy,
    addToCart,
  };
})();

shoppingCart2.addToCart('Apple', 2);
shoppingCart2.addToCart('Banana', 5);

console.log(shoppingCart2);

//Common JS 
//Export 
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart!`);
};

//Import 
const {addToCart} = require('./shoppingCart.js');

*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'apple', quantity: 5 },
  ],
  user: { logginIn: 'true' },
};

// Casual way to deep copy an object :
const stateClone = Object.assign({}, state);
// cloneDeep
const stateDeepClone = cloneDeep(state);

state.user.logginIn = 'false';

console.log(stateClone); //logginIn: false
console.log(stateDeepClone); //logginIn: true
