import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
	return { 
		title: state.title,
	} 
}

const TitleBar = (props) => {
	return (
		<header className="title-bar">
			<p className="title-bar__title">{props.title}</p>
		</header>
	)
}

export default connect(mapStateToProps)(TitleBar)
