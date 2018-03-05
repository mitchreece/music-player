import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import TitleBar from './components/TitleBar'

export default class App extends React.Component {

	render() {
		return (
			<Router>
				<TitleBar />
			</Router>
		)
	}

}
