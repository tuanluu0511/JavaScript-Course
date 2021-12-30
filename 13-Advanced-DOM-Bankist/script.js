'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////
// Button scrolling

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

///////////////////////////////////////
// Page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Determine what element originated the event
  // console.log(e.target);
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// The code above will create a click event for every el, so may cause less efficience

// 1. Add event listener to common parent element

///////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Safe guard
  if (!clicked) return;

  // Remove classes (deactive active tab)
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handlerHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Parsing "argument" to handler
nav.addEventListener('mouseover', handlerHover.bind(0.5));
nav.addEventListener('mouseout', handlerHover.bind(1));

// Implement sticky nav bar: Scroll event
window.addEventListener('scroll', function () {
  const initialCoords = section1.getBoundingClientRect();
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
/*
// DOM Traversing
const h1 = document.querySelector('h1');
// Going downward: child
console.log(h1.querySelectorAll('.highlight')); //Rerturn  nodelist
console.log(h1.childNodes); //Rerturn  nodelist
console.log(h1.children); //Rerturn  HTML Collection

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upward: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

// Closet parent
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideway: Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
/*
// Event propagation
// Code below change bg color of nav,nav__links & nav__link when click
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
  }
  // Capture and exectute event in capture phase, initial value: false
  // true
);
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
 */

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
