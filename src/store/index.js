import {createStore} from 'redux'

export default createStore(() => {
	return (
		{
			title: document.title,
		}
	)
})
