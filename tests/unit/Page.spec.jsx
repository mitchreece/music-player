import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import Page from '../../src/components/Page'

const mockStore = configureStore([])

const initialState = {
	app: {
		title: 'Music Player Desktop App',
	},
}

const store = mockStore(initialState)

it('renders correctly', () => {
	const tree = renderer
		.create(
			<Page title="Recently Played" store={store}>
				<h1>Recently Played</h1>
			</Page>
		).toJSON()
    
	expect(tree).toMatchSnapshot()
})
