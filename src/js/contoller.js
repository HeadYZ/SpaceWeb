import * as model from './model'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import navigationView from './Views/navigationView'
import destinationView from './Views/destinationView'
import crewView from './Views/crewView'

const init = () => {
	navigationView.addHandlerToggleNav()
	if (window.location.pathname.slice(1, -5) === 'destinations') {
		destinationView.addHandlerRender(model.destinationInformation)
	}
	if (window.location.pathname.slice(1, -5) === 'crew') {
		crewView.addHandlerRender(model.crewInformation)
	}
}

init()
