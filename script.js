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
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // console.log(e.target.getBoundingClientRect());
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log('current scrool(x/y)', window.pageXOffset, window.pageYOffset);
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// h1.onmouseenter = function (e) {
//   alert('heheh');
// };
////
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// document.getElementById('section--1');
console.log(document.getElementsByClassName('btn'));
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);

// header.prepend(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
console.log(
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'
);
document.documentElement.style.setProperty('--color-primary', 'red');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.setAttribute('company', 'Bankist');
logo.getAttribute('src');
console.log(logo.src);
console.log(logo.getAttribute('src'));
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
console.log(logo.dataset.versionNumber);
*/

// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// // console.log(randomColor());
// // const
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });

// const h1 = document.querySelector('h1');
// const alert1 = function () {
//   alert('You are here');
//   h1.removeEventListener('mouseenter', alert1);
// };
// h1.addEventListener('mouseenter', alert1);
