import React, { Component } from 'react'
import classes from './Layout.module.scss'
import Header from '../../components/Header/Header'

export default class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
