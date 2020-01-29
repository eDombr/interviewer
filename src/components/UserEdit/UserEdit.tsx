import React, { useState } from 'react'
import { FormControlCollection } from '../../interfaces/Form'
import { formBuilder } from '../../lib/formBuilder'
import Form from '../UI/Form/Form'

type UserEditState = {
  formControls: FormControlCollection;
}

const createFormControls = (): FormControlCollection => ({
  firstName: formBuilder.createControl(
    { label: 'First Name' },
    { required: true }
  ),
  lastName: formBuilder.createControl(
    { label: 'Last Name' },
    { required: true }
  ),
  email: formBuilder.createControl(
    { label: 'Email' },
    { required: true }
  ),
  level: formBuilder.createControl(
    { label: 'Level' },
  ),
  education: formBuilder.createControl(
    { label: 'Education' },
  ),
  currecntPosition: formBuilder.createControl(
    { label: 'currentPosition' },
  ),
  description: formBuilder.createControl(
    { label: 'Description', type: 'textarea' },
  ),
})

const UserEdit: React.FC = () => {

  const [state, setState] = useState<UserEditState>({
    formControls: createFormControls()
  });

  const onChangeHandler = (formControls: FormControlCollection) => {
    setState({ formControls })
  }

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <h2 className="center-align">Edit User</h2>

        <Form 
          formControls={state.formControls}
          onChange={onChangeHandler}/>

      </div>
    </div>
  )
}

export default UserEdit
