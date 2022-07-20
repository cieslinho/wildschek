const navBtn = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav__menu')
const navItems = document.querySelectorAll('.nav__item')
const navDropdown = document.querySelector('.nav__dropdown')
const navDropdownSecond = document.querySelector('.nav__dropdown-second')
const DropdownItems = document.querySelectorAll('.nav__item-dropdown')
const trigger = document.querySelector('.trigger')
const triggerSecond = document.querySelector('.trigger-second')
const overlay = document.querySelector('.nav__overlay')

const handleNav = () => {
	navMenu.classList.toggle('nav__menu--active')
	overlay.classList.toggle('nav__overlay--active')
}

const handleDropdown = () => {
	navDropdown.classList.toggle('nav__dropdown--active')
}
const handleDropdownSecond = () => {
	navDropdownSecond.classList.toggle('nav__dropdown-second--active')
}

const openBtn = () => {
	navBtn.classList.toggle('is-active')
}

navBtn.addEventListener('click', handleNav)
navBtn.addEventListener('click', openBtn)
trigger.addEventListener('click', handleDropdown)
triggerSecond.addEventListener('click', handleDropdownSecond)
