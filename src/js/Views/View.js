export default class View {
	_data
	_overlay = document.querySelector('.overlay')

	_toggleOverlay(action = false) {
		action ? (this._overlay.style.display = 'block') : (this._overlay.style.display = 'none')
	}
}
