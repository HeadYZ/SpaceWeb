export default class View {
	_data
	_overlay = document.querySelector('.overlay')

	render(data, img = null) {
		this._data = data

		const markup = this._generateMarkup()
		this._parentEl.innerHTML = ''
		this._imgEl.src = img
		this._parentEl.innerHTML = markup
	}
	_getUserViewport() {
		const userViewport = window.innerWidth
		return userViewport < 1280 ? 'mobileImg' : 'desktopImg'
	}
	_toggleOverlay(action = false) {
		action ? (this._overlay.style.display = 'block') : (this._overlay.style.display = 'none')
	}
}
