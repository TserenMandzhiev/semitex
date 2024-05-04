const navBar = document.querySelector('.header__menu');

window.addEventListener('scroll', ()=> {
	const scrollPosition = window.scrollY;

	if (scrollPosition > 150) {
		navBar.classList.add('navbar__bg');
	} else {
		navBar.classList.remove('navbar__bg');
	}
});