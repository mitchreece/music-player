import { UPDATE_TITLE } from '../actions/types'
import { remote } from 'electron'

export const initialState = {
	title: 'Music Player Desktop App',
} 

export default function app(state = initialState, action) {

	switch(action.type) {
	case UPDATE_TITLE:
		remote.getCurrentWindow().setTitle(action.title)
		return Object.assign({}, state, {
			title: action.title,
		})
	default:
		return state
	}

}
