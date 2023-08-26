const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav__burger')
const navCloseBtn = document.querySelector('.nav__burger-close')
const navbar = document.querySelector('.nav__navbar')

navBtn.addEventListener('click', () => {
	navbar.classList.add('nav__navbar--animation')
	// nav.classList.add('nav--show')
})
navCloseBtn.addEventListener('click', () => {
	navbar.classList.remove('nav__navbar--animation')
	// setTimeout(() => {
	// 	nav.classList.remove('nav--show')
	// }, 300)
})
