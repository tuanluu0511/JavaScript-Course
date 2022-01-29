// Exporting module
console.log('Exporting module');

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
