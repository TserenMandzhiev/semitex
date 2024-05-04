const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	speed: 500,
	slidesPerView: 4.5,
	freeMode: true,


	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	autoplay: {
		delay: 5000,
	},

})
