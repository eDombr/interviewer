import React from 'react'
import { NavLink } from 'react-router-dom'
import INavigationLink from '../../../interfaces/NavigationLink'

type DropdownProps = {
  id: string
  links: INavigationLink[]
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <ul id={props.id} className="dropdown-content">
      {props.links.map((link, index) => (
        <li key={index}><NavLink to={link.to}>{link.label}</NavLink></li>
      ))}
    </ul>
  )
}

export default Dropdown
