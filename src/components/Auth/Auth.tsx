import React, { Component } from 'react'
import './Auth.scss'

import { Input } from '../UI/Input/Input'
import { formBuilder } from '../../lib/formBuilder'
import { FormControl } from '../../interfaces/Form'
import Button from '../UI/Button/Button'

function createFormControls(): {[key: string]: FormControl} {
  return {
    email: formBuilder.createControl(
      {
        label: 'Email',
        errorMessage: 'Enter correct email'
      },
      {
        required: true,
        email: true
      }
    ),
    password: formBuilder.createControl(
      {
        label: 'Password',
        errorMessage: 'Enter correct password',
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
  isFormValid: boolean;
  formControls: {[key: string]: FormControl};
}

export default class Auth extends Component<AuthState> {
  state: AuthState = {
    isFormValid: false,
    formControls: createFormControls()
  }

  onChangeHandler = (value: string, controlName: string) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = formBuilder.validate(control.value, control.validation)

    if (!control.valid) {
      control.errorMessage = formBuilder.getErrorMessage(control)
    }

    formControls[controlName] = control

    this.setState({
      formControls,
      isFormValid: formBuilder.validateForm(formControls)
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key={index}>
          <Input 
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.onChangeHandler(event.target.value, controlName)}/>
        </React.Fragment>
      )
    })
  }

  render() {
    return (
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h2 className="center-align">Authorization</h2>

            <div className="card">
              <div className="card-content">
                <form>
                  {this.renderControls()}

                  <Button label="Login" type="primary"/>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
