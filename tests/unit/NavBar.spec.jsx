import React from 'react'
import {MemoryRouter as Router} from 'react-router-dom'
import renderer from 'react-test-renderer'
import NavBar from '../../src/components/NavBar'

it('renders correctly', () => {
	const tree = renderer
		.create(<Router><NavBar /></Router>)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
