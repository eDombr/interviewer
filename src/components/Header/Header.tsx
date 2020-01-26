import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import INavigationLink from '../../interfaces/NavigationLink'
import Dropdown from '../UI/Dropdown/Dropdown'

const navigationLinks: INavigationLink[] = [
  { label: 'Skill Maxtrix', to: '/skill-matrix', exact: false },
  {
    label: 'Users',
    to: '/users',
    exact: false,
    subLinks: [
      { label: 'Add', to: '/users/create', exact: false },
      { label: 'List', to: '/users', exact: true },
    ]
  },
  {
    label: 'Auth', to: '/login', exact: false,
    subLinks: [
      { label: 'Sign In', to: '/login', exact: false },
      { label: 'Sign Up', to: '/auth/signup', exact: false },
    ]
  }
]

const Header: React.FC = () => {
  useEffect(() => {
    M.AutoInit();
  })

  const renderLinks = () => {
    return navigationLinks.map((link, index) => (
      <li key={index}>
        {
          link.subLinks ?
            <>
              <a
                id={index + ''}
                className="dropdown-trigger"
                href="#!"
                data-target={`dropdown${index}`}>
                {link.label}
                <i className="material-icons right">arrow_drop_down</i>
              </a>
              <Dropdown id={`dropdown${index}`} links={link.subLinks!} />
            </> :
            <NavLink to={link.to} exact={link.exact}>
              {link.label}
            </NavLink>
        }
      </li>
    ))
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1 px1">
        <NavLink to="/" exact={true} className="brand-logo">Logo</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderLinks()}
        </ul>
      </div>
    </nav>
  )
}

export default Header
