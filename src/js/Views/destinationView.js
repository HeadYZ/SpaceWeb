import View from './View'
class DestinationView extends View {
	_parentEl = document.querySelector('.destination__main-content')
	_imgEl = document.querySelector('.destination__header-img')
	_selections = document.querySelector('.destination__selections')

	addHandlerRender(handler) {
		;['click', 'touchstart'].forEach(event => {
			this._selections.addEventListener(event, e => {
				e.preventDefault()
				const selectedDestination = e.target.closest('.destination__selections-item')
				if (!selectedDestination) return
				handler(selectedDestination)
				this._setActiveDestination(selectedDestination)
			})
		})
	}

	_setActiveDestination(selectedDestination) {
		this._selections.querySelectorAll('a').forEach(link => link.classList.remove('active'))
		selectedDestination.classList.add('active')
	}

	_generateMarkup() {
		return `
		<h2 class="destination__main-heading">${this._data.destination}</h2>
		<p class="destination__main-text">${this._data.information}</p>
		<div class="destination__main-boxes">
		  <div class="destination__main-boxes-box destination__main-boxes-box--first">
			<h3 class="destination__main-h3"> Avg. distance</h3>
			<p>${this._data.distance}</p>
		  </div>
		  <div class="destination__main-boxes-box">
			<h3 class="destination__main-h3"> Est. travel time</h3>
			<p>${this._data.travelTime}</p>
		  </div>
		</div>`
	}
}
export default new DestinationView()
