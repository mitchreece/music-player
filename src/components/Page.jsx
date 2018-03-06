import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTitle } from '../store/actions/app'
import { initialState } from '../store/reducers/app'

class Page extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.updateTitle(this.props.title)
	}

	render() {
		return this.props.children
	}

}

Page.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element.isRequired,
}

Page.defaultProps = {
	title: initialState.title,
}

export default connect(null, { updateTitle })(Page)
