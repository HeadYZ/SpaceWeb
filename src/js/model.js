import moonImg from '../../assets/destination/image_moon.webp'
import europaImg from '../../assets/destination/image_europa.webp'
import marsImg from '../../assets/destination/image_mars.webp'
import titanImg from '../../assets/destination/image_titan.webp'
import douglasHurley from '../../assets/crew/douglas_hurley.webp'
import ianoushehAnsari from '../../assets/crew/ianousheh_ansari.webp'
import markShuttleworth from '../../assets/crew/mark_shuttleworth.webp'
import victorGlover from '../../assets/crew/victor_glover.webp'

export const destinationInformation = [
	{
		id: 'moon',
		destination: 'Moon',
		information: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help
	regain perspective and come back refreshed. While you’re there, take in some history
	by visiting the Luna 2 and Apollo 11 landing sites.`,
		distance: '384,400 km',
		travelTime: '3 days',
		img: moonImg,
	},
	{
		id: 'mars',
		destination: 'Mars',
		information: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
	the tallest planetary mountain in our solar system. It’s two and a half times
	the size of Everest!`,
		distance: '225 mil. km',
		travelTime: '9 months',
		img: marsImg,
	},
	{
		id: 'europa',
		destination: 'Europa',
		information: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a
winter lover’s dream. With an icy surface, it’s perfect for a bit of
ice skating, curling, hockey, or simple relaxation in your snug
wintery cabin.`,
		distance: '628 mil. km',
		travelTime: '3 years',
		img: europaImg,
	},
	{
		id: 'titan',
		destination: 'Titan',
		information: `The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.`,
		distance: '1.6 bil. km',
		travelTime: '7 years',
		img: titanImg,
	},
]

export const crewInformation = [
	{
		id: 0,
		position: 'Commander',
		name: `Douglas Hurley`,
		information:
			'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
		img: douglasHurley,
	},
	{
		id: 1,
		position: 'Mission Specialist',
		name: `Mark Shuttleworth`,
		information:
			'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
		img: markShuttleworth,
	},
	{
		id: 2,
		position: 'Pilot',
		name: `Victor Glover`,
		information:
			'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
		img: victorGlover,
	},
	{
		id: 3,
		position: 'Flight Engineer',
		name: `Anousheh Ansari`,
		information:
			'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
		img: ianoushehAnsari,
	},
]

allSliderItems = document.querySelectorAll('.crew__slider-item')

for (const [i, el] of allSliderItems.entries()) {
	el.dataset.id = i
}
