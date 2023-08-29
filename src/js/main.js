import * as model from './model'
import moonImg from '../../assets/destination/image_moon.webp'
import europaImg from '../../assets/destination/image_europa.webp'
import marsImg from '../../assets/destination/image_mars.webp'
import titanImg from '../../assets/destination/image_titan.webp'

const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav__burger')
const navCloseBtn = document.querySelector('.nav__burger-close')
const navbar = document.querySelector('.nav__navbar')
const overlay = document.querySelector('.overlay')

const destinations = document.querySelector('.destination__selections')
const destinationTime = document.querySelector('.destination__travel-time')
const destinationDistance = document.querySelector('.destination__distance')
const destinationInfo = document.querySelector('.destination__information')
const destinationImg = document.querySelector('.destination__header-img')

const events = ['click', 'touchstart']

events.forEach(event => {
	destinations.addEventListener(event, e => {
		e.preventDefault()
		if (e.target.closest('.destination__selections-item') === null) return

		const destination = e.target.closest('.destination__selections-item').textContent

		const destinationData = model.destinationInformation.find(dest => {
			return dest.destination === destination
		})

		const [desInformation, desDistance, desTravelTime] = generateMainMarkup(destinationData)

		const destinationImages = [moonImg, europaImg, marsImg, titanImg]
	
		console.log(moonImg)
		destinationImg.src = destinationImages.filter(img => {
			return img.includes(`${destinationData.destination.toLocaleLowerCase()}`)
		})
		destinationTime.innerHTML = desTravelTime
		destinationDistance.innerHTML = desDistance
		destinationInfo.innerHTML = desInformation
	})
})

const generateMainMarkup = data => {
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
