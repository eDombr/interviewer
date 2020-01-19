import React from 'react'
import { NavLink } from 'react-router-dom'

import NavigationLink from '../../interfaces/NavigationLink.interface'

const links: NavigationLink[] = [
  { label: 'Skill Maxtrix', to: '/skill-matrix', exact: false },
  { label: 'Users', to: '/users', exact: false },
  { label: 'Auth', to: '/login', exact: false }
]

const Header: React.FC = () => {
  const renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <NavLink to={link.to}>
          {link.label}
        </NavLink>
      </li>
    ))
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1 px1">
        <NavLink to="/" className="brand-logo">Logo</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderLinks()}
        </ul>
      </div>
    </nav>
  )
}

export default Header
