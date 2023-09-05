import View from './View'
class CrewView extends View {
	_parentEl = document.querySelector('.crew__content')
	#slider = document.querySelector('.crew__slider')
	_imgEl = document.querySelector('.crew__box-img')

	addHandlerRender(handler) {
		;['click', 'touchstart'].forEach(event => {
			this.#slider.addEventListener(event, e => {
				e.preventDefault()
				const selectedCircle = e.target.closest('.crew__slider-item')
				if (!selectedCircle) return
				this.#setActiveCircle(selectedCircle)
				handler(selectedCircle)
			})
		})
	}

	#setActiveCircle(selectedCircle) {
		this.#slider.querySelectorAll('.crew__slider-item').forEach(item => {
			item.classList.remove('active')
		})
		selectedCircle.classList.add('active')
	}

	_generateMarkup() {
		return `
        <h3 class="crew__content-position">${this._data.position}</h3>
        <p class="crew__content-name">${this._data.name}</p>
        <p class="crew__content-text">${this._data.information}</p>
        `
	}
}

export default new CrewView()
