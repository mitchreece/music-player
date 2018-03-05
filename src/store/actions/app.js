import { UPDATE_TITLE } from './types'

export function updateTitle(title) {
	return {
		type: UPDATE_TITLE,
		title: title,
	}
}
