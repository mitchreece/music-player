import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import TitleBar from '../../src/components/TitleBar'

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {
	title: 'Google Play Music Desktop App',
}

const store = mockStore(initialState)

it('renders correctly', () => {
	const tree = renderer
		.create(<TitleBar store={store} />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
