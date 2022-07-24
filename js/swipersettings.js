var swiper = new Swiper('.slide__content', {
	slidesPerView: 4,
	spaceBetween: 25,
	fade: 'true',
	grabCursor: 'true',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		568: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},
})
