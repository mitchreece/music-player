import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

const render = (function renderer() {

	// root component and redux store must be required in this function to enable hmr
	const App = require('./App').default
	const store = require('./store/').default
	
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App />
			</Provider>
		</AppContainer>
		, document.getElementById('app')
	)

	return renderer

})()

if (module.hot) { module.hot.accept(render) }
