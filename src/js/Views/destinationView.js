class DestinationView {
	#destinations = document.querySelector('.destination__selections')
	#destinationTime = document.querySelector('.destination__travel-time')
	#destinationDistance = document.querySelector('.destination__distance')
	#destinationInfo = document.querySelector('.destination__information')
	#destinationImg = document.querySelector('.destination__header-img')

	addHandlerRender(data) {
		;['click', 'touchstart'].forEach(event => {
			this.#destinations.addEventListener(event, e => {
				e.preventDefault()

				const destination = e.target.closest('.destination__selections-item')

				if (!destination) return

				const allDestinations = this.#destinations.querySelectorAll('a')
				allDestinations.forEach(des => {
					des.classList.remove('active')

					if (des.textContent === destination.textContent) des.classList.add('active')
				})
				const destinationData = data.find(dest => dest.destination === destination.textContent)

				const [desInformation, desDistance, desTravelTime] = this.#generateMarkup(destinationData)

				this.#destinationImg.src = destinationData.img
				this.#destinationImg.alt = destinationData.destination
				this.#destinationTime.innerHTML = desTravelTime
				this.#destinationDistance.innerHTML = desDistance
				this.#destinationInfo.innerHTML = desInformation
			})
		})
	}

	#generateMarkup(data) {
		const desInformation = `
	<h2 class="destination__main-heading">${data.destination}</h2>
	<p class="destination__main-text">${data.information}</p>`
		const desDistance = `
	<h3 class="destination__main-h3"> Avg. distance</h3>
	<p>${data.distance}</p>`
		const desTravelTime = `
	<h3 class="destination__main-h3"> Est. travel time</h3>
	<p>${data.travelTime}</p>`

		return [desInformation, desDistance, desTravelTime]
	}
}

export default new DestinationView()
