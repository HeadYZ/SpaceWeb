const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav__burger')
const navCloseBtn = document.querySelector('.nav__burger-close')
const navbar = document.querySelector('.nav__navbar')
const overlay = document.querySelector('.overlay')

const showNav = () => {
	overlay.style.display = 'block'
	navbar.classList.add('nav__navbar--show')
	setTimeout(() => {
		navbar.classList.add('nav__navbar--transform')
	}, 10)
	document.body.classList.add('hidden')
}

const closeNav = () => {
	overlay.style.display = 'none'
	navbar.classList.remove('nav__navbar--transform')
	setTimeout(() => {
		navbar.classList.remove('nav__navbar--show')
	}, 300)
	document.body.classList.remove('hidden')
}

navBtn.addEventListener('click', () => {
	const events = ['click', 'touchstart']
	events.forEach(ev => {
		window.addEventListener(ev, e => {
			e.target.classList.contains('overlay') ? closeNav() : ''
		})
	})

	showNav()
})
navCloseBtn.addEventListener('click', () => {
	closeNav()
})
