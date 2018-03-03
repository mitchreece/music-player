import { MODIFY_TITLE } from './types'

export function modifyTitle(title) {
	return {
		type: MODIFY_TITLE,
		title: title,
	}
}
