import { MODIFY_TITLE } from '../actions/types'
import { initialState } from '../'

export default function musicApp(state = initialState, action) {

	switch(action.type) {
	case MODIFY_TITLE:
		document.title = action.title
		return Object.assign({}, state, {
			title: action.title,
		})
	default:
		return state
	}

}
