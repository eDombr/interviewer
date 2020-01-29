import React, { Component } from 'react'
import './Auth.scss'

import { formBuilder } from '../../lib/formBuilder'
import { FormControlCollection } from '../../interfaces/Form'
import Form from '../UI/Form/Form'

function createFormControls(): FormControlCollection {
  return {
    email: formBuilder.createControl(
      {
        label: 'Email',
      },
      {
        required: true,
        email: true
      }
    ),
    password: formBuilder.createControl(
      {
        label: 'Password',
        type: 'password'
      },
      {
        required: true,
        minLength: 6
      }
    )
  }
}

type AuthState = {
  formControls: FormControlCollection;
}

export default class Auth extends Component<AuthState> {
  state: AuthState = {
    formControls: createFormControls()
  }

  onChangeHandler = (formControls: FormControlCollection): void => {
    this.setState({ formControls })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <h2 className="center-align">Authorization</h2>

          <Form 
            formControls={this.state.formControls}
            onChange={this.onChangeHandler}/>
        </div>
      </div>
    )
  }
}
