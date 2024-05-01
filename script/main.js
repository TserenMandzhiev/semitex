const burger = document.querySelector('.nav__burger');

const burgerLine = document.querySelector('.burger-line');

const headerNav = document.querySelector('.header__menu-nav');


burger.addEventListener('click', function() {
	burgerLine.classList.toggle('activeBtn');
	headerNav.classList.toggle('nav__active');
})

const formBtn = document.querySelector('.modalWindow');

const modal = document.querySelector('.modalActive');

formBtn.addEventListener('click', function() {
	modal.classList.toggle('open');
});


