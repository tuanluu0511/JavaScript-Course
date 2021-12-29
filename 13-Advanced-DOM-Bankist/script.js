'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Types of Events and Even handlers
const h1 = document.querySelector('h1');

const printH1 = function (e) {
  console.log('addEventListener: Youre reding H1');
};

h1.addEventListener('mouseenter', printH1);

setTimeout(() => h1.removeEventListener('mouseenter', printH1), 10000);

// Try not to use onmouseenter
// h1.onmouseenter = function (e) {
//   console.log('On mouse enter: youre reading H1');
// };
// Implement Scroling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // current position of element & top of view port
  console.log(s1coords.left);
  // current position of the view port & top of the page
  console.log('X/Y', window.pageXOffset, window.pageYOffset);
  // current viewport height & width
  console.log(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // Old school way to scroll
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
// Cookies button
const header = document.querySelector('.header');
// Creating, inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');

// Add content to element
// message.textContent = '..........';
message.innerHTML =
  'We used cokkied for improved functionality and analytics. <button class="btn btn-close-cookies">Got it!</button>';

header.append(message);

// Remove HTML elements
document
  .querySelector('.btn-close-cookies')
  .addEventListener('click', function () {
    message.remove();
    // Old ways to remove element
    // message.parentNode.removeChild(message);
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
*/

/*
// Style

console.log(message.style.backgroundColor);
console.log(message.style.width);

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

console.log(message.style.height);

document.documentElement.style.setProperty('--color-primary', 'blue');

// Attribute

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);

// Non-standardlize
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data atribute
console.log(logo.dataset.abcXyz);

// Classes
logo.classList.add('a', 'b');
logo.classList.add('a');
logo.classList.add('a');
logo.classList.add('a'); //not includes

// Selecting elements
console.log(document.querySelector('.header'));

console.log(document.querySelectorAll('.section'));

console.log(document.getElementById('section--1'));

// The 2 methods below return a HTML Colection: (live HTML element)
console.log(document.getElementsByTagName('button'));

console.log(document.getElementsByClassName('section'));
*/
