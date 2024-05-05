const quaBtn = document.querySelectorAll('.qua__btn');

const quaSlide = document.querySelectorAll('.qua__items-subtitle');

const quaImg = document.querySelectorAll('.qua__img');

const quaBack = document.querySelectorAll('.qua__items-content');

quaBtn.forEach((button, index) => {
	button.addEventListener('click', () => {
		quaSlide[index].classList.toggle('active-text');

		// if (quaSlide[index].classList.contains('active-text')) {
		// 	quaImg[index].setAttribute('src', '/images/ico/checkOff.svg');

		// } else {
		// 	quaImg[index].setAttribute('src', '/images/ico/checkActive.svg');
		// }
	})
})
