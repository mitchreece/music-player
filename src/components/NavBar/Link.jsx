import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Link = (props) => {
	return (
		<li className="nav__links__link">
			<NavLink className="link"
				activeClassName="link--active"
				{...props.config}
			>
				{props.label}
			</NavLink>
		</li>
	)
}

Link.propTypes = {
	config: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
}

export default Link
