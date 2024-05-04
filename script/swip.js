const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	speed: 500,
	effect: 'slider',
	slidesPerView: 5,
	centeredSlides: true,
	freeMode: true,



	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	autoplay: {
		delay: 5000,
	},
});