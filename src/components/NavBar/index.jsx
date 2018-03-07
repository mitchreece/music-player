import React from 'react'
import { nav } from '../../routes/routes.config'
import Link from './Link'

const NavBar = () => {
	return (
		<nav className="nav">
			<ul className="nav__links">
				{ 
					nav.map((link, i) => {
						return(
							<Link label={link.label} 
								config={link.config}
								key={i} /> 
						) 
					})
				}
			</ul>
		</nav>
	)
}

export default NavBar
