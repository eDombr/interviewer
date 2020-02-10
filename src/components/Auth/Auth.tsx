import React, { useState } from 'react'
import './Auth.scss'

import { formBuilder } from '../../lib/formBuilder'
import { FormControlCollection } from '../../interfaces/Form'
import Form from '../UI/Form/Form'
import { InputType } from '../../constants/Form'

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
        type: InputType.PASSWORD
      },
      {
        required: true,
        minLength: 6
      }
    )
  }
}

const Auth: React.FC = () => {
  const [formControls, setFormControls] = useState<FormControlCollection>(createFormControls())

  const onChangeHandler = (formControls: FormControlCollection): void => {
    setFormControls(formControls)
  }

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <h2 className="center-align">Authorization</h2>

        <Form 
          formControls={formControls}
          onChange={onChangeHandler}/>
      </div>
    </div>
  )
}

export default Auth