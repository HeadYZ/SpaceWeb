import View from './View'
class TechnologyView extends View {
	_parentEl = document.querySelector('.technology__main-content')
	_imgEl = document.querySelector('.technology__main-package-img')

	addHandlerSwitchInformation(handler) {
		const slider = document.querySelector('.technology__main-slider')
		slider.addEventListener('click', e => {
			const selectedLink = e.target.closest('.technology__main-slider-item')
			if (!selectedLink) return
			this._toggleActiveLink(selectedLink)
			handler([selectedLink.dataset.id, this._getUserViewport()])
		})
	}

	_toggleActiveLink(selectedLink) {
		const slider = document.querySelector('.technology__main-slider')
		slider.querySelectorAll('.technology__main-slider-item').forEach(link => link.classList.remove('active'))
		selectedLink.classList.add('active')
	}
	_generateMarkup() {
		return `
        <h3 class="technology__main-content-heading">The terminology...</h3>
        <p class="technology__main-content-name">${this._data.terminology}</p>
        <p class="technology__main-content-text">${this._data.information}</p>
        `
	}
}

export default new TechnologyView()
