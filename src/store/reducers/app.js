import { UPDATE_TITLE } from '../actions/types'

export const initialState = {
	title: 'Google Play Music Desktop App',
} 

export default function document(state = initialState, action) {

	switch(action.type) {
	case UPDATE_TITLE:
		document.title = action.title
		return Object.assign({}, state, {
			title: action.title,
		})
	default:
		return state
	}

}
