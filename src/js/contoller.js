import * as model from './model'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import navigationView from './Views/navigationView'
import destinationView from './Views/destinationView'
import crewView from './Views/crewView'

const init = () => {
	navigationView.addHandlerToggleNav()
	if (window.location.pathname.includes('destinations')) {
		destinationView.addHandlerRender(model.destinationInformation)
	}
	if (window.location.pathname.includes('crew')) {
		crewView.addHandlerRender(model.crewInformation)
	}
}

init()
