var hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('is-active')
})

const nav = document.querySelector('.nav__menu')
const allNavItems = document.querySelectorAll('.nav__item')
const overlay = document.querySelector('.nav__overlay')
const handleNav = () => {
	nav.classList.toggle('nav__menu--active')
	overlay.classList.toggle('nav__overlay--active')
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__menu--active')
			overlay.classList.remove('nav__menu--active')
		})
	})
}

hamburger.addEventListener('click', handleNav)
