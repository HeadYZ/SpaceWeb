import * as model from './model'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import navigationView from './Views/navigationView'
import destinationView from './Views/destinationView'
import crewView from './Views/crewView'
import technologyView from './Views/technologyView'

const controlTechnologyInfo = async selectedTechData => {
	try {
		const [techInfo, imgSize] = model.getTechnologyInfo(selectedTechData)

		technologyView.render(techInfo, imgSize)
	} catch (err) {}
}

const init = () => {
	navigationView.addHandlerToggleNav()
	if (window.location.pathname.includes('destinations')) {
		destinationView.addHandlerRender(model.destinationInformation)
	}
	if (window.location.pathname.includes('crew')) {
		crewView.addHandlerRender(model.crewInformation)
	}

	technologyView.addHandlerSwitchInformation(controlTechnologyInfo)
}

console.log(technologyView)

init()
