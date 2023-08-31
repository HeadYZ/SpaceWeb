class CrewView {
	#parentEl = document.querySelector('.crew__content')
	#slider = document.querySelector('.crew__slider')
	#crewImg = document.querySelector('.crew__box-img')

	addHandlerRender(data) {
		;['click', 'touchstart'].forEach(event => {
			this.#slider.addEventListener(event, e => {
				e.preventDefault()
				const selectedCircle = e.target.closest('.crew__slider-item')
				if (!selectedCircle) return
				const selectedCircleID = +selectedCircle.dataset.id

				this.#setActiveCircle(selectedCircle)

				const activeCrew = data.find(el => el.id === selectedCircleID)

				const markup = this.#generateMarkup(activeCrew)
				this.#crewImg.src = activeCrew.img
				this.#crewImg.alt = activeCrew.name
				this.#parentEl.innerHTML = markup
			})
		})
	}

	#setActiveCircle(selectedCircle) {
		this.#slider.querySelectorAll('.crew__slider-item').forEach(item => {
			item.classList.remove('active')
		})
		selectedCircle.classList.add('active')
	}

	#generateMarkup(data) {
		return `
        <h3 class="crew__content-position">${data.position}</h3>
        <p class="crew__content-name">${data.name}</p>
        <p class="crew__content-text">${data.information}</p>
        `
	}
}

export default new CrewView()
