const menuBtn = document.querySelector('.menu__btn');

const closeBtn = document.querySelector('.close__icon');

const navList = document.querySelector('.header__menu-nav');


menuBtn.addEventListener('click', ()=> {
	navList.classList.add('menu__list-open');
});

closeBtn.addEventListener('click', ()=> {
	navList.classList.remove('menu__list-open');
});



const formModal = document.querySelector('.header__form');


const formButton = document.querySelector('.form__hidden');



formButton.addEventListener('click', ()=> {
	formModal.classList.toggle('modal__header');
	
	if (formModal.classList.contains('modal__header')) {
		navList.classList.remove('menu__list-open');
	}
});

