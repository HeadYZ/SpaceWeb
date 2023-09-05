import * as model from './model'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import navigationView from './Views/navigationView'
import destinationView from './Views/destinationView'
import crewView from './Views/crewView'
import technologyView from './Views/technologyView'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const controlDestinationInfo = selectedDestination => {
	const [destinationInfo, destinationImg] = model.getDestinationInfo(selectedDestination)
	destinationView.render(destinationInfo, destinationImg)
}

const controlCrewInfo = selectedCrew => {
	const [crewInfo, crewImg] = model.getCrewInfo(selectedCrew)

	crewView.render(crewInfo, crewImg)
}

const controlTechnologyInfo = selectedTechData => {
	const [techInfo, imgSize] = model.getTechnologyInfo(selectedTechData)

	technologyView.render(techInfo, imgSize)
}

const init = () => {
	navigationView.addHandlerToggleNav()
	if (window.location.pathname.includes('destinations')) {
		destinationView.addHandlerRender(controlDestinationInfo)
	}
	if (window.location.pathname.includes('crew')) {
		crewView.addHandlerRender(controlCrewInfo)
	}
	if (window.location.pathname.includes('technology')) {
		technologyView.addHandlerSwitchInformation(controlTechnologyInfo)
	}
}

init()
