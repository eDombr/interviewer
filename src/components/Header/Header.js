import React from 'react'
import classes from './Header.module.scss'

const links = [
  {label: 'Skill Maxtrix'},
  {label: 'Users'},
  {label: 'Idea'}
]

const Header = () => {
  const renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        {link.label}
      </li>
    ))
  }

  return (
    <header className={classes.Header}>
      <ul>
        {renderLinks()}
      </ul>
    </header>
  )
}

export default Header
