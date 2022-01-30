// Exporting module
console.log('Exporting module');

//Blocking code: The top-level await will block other below code to be executed(even in module it was imported to)
// console.log('Start fetching code');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finish fetching code');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart!`);
};

const totalPrice = 230;
const totalQuantiy = 10;

export { totalPrice, totalQuantiy as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart!`);
}