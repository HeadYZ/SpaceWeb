import View from './View'

class NavigationView extends View {
	#navBtn = document.querySelector('.nav__burger')
	#navCloseBtn = document.querySelector('.nav__burger-close')
	#navbar = document.querySelector('.nav__navbar')

	addHandlerToggleNav() {
		this.#navBtn.addEventListener('click', () => {
			;['click', 'touchstart'].forEach(ev => {
				window.addEventListener(ev, e => {
					e.target.classList.contains('overlay') ? this.#closeNav() : ''
				})
			})

			this.#showNav()
		})

		this.#navCloseBtn.addEventListener('click', () => {
			this.#closeNav()
		})
	}
	#showNav() {
		this._toggleOverlay(true)
		this.#navbar.classList.add('nav__navbar--show')
		setTimeout(() => {
			this.#navbar.classList.add('nav__navbar--transform')
		}, 10)
		document.body.classList.add('hidden')
	}

	#closeNav() {
		this._toggleOverlay()
		this.#navbar.classList.remove('nav__navbar--transform')
		setTimeout(() => {
			this.#navbar.classList.remove('nav__navbar--show')
		}, 300)
		document.body.classList.remove('hidden')
	}
}

export default new NavigationView()
