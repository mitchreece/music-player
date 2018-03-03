import {createStore} from 'redux'
import reducer from './reducers'

export const initialState = {
	title: document.title,
} 

export default createStore(reducer, initialState)
