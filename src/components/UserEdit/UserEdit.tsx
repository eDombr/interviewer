import * as _ from 'lodash';

import React, { useState } from 'react'
import { FormControlCollection } from '../../interfaces/Form'
import { formBuilder } from '../../lib/formBuilder'
import Form from '../UI/Form/Form'

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
    { required: true, email: true }
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
  workHistory: formBuilder.createControl(
    { label: 'Work History', type: 'group', groups: [] }
  )
})

const createWorkHistoryItem = (): FormControlCollection => ({
  company: formBuilder.createControl(
    { label: 'Company' }, { required: true }
  ),
  position: formBuilder.createControl(
    { label: 'Position' }
  ),
  startDate: formBuilder.createControl(
    { label: 'Start Date', type: 'date' }
  ),
  endDate: formBuilder.createControl(
    { label: 'End Date', type: 'date' }
  ),
});

const UserEdit: React.FC = () => {

  const [formControls, setFormControls] = useState<FormControlCollection>(
    createFormControls()
  );

  const onChangeHandler = (formControls: FormControlCollection) => {
    setFormControls(formControls)
  }

  const onAddFormGroupHandler = (groupName: string): void => {
    const controls: any = _.cloneDeep(formControls)
    const control = controls[groupName];

    control.groups!.push(createWorkHistoryItem())

    setFormControls(controls)
  }

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <h2 className="center-align">Edit User</h2>

        <Form 
          formControls={formControls}
          onAddGroup={onAddFormGroupHandler}
          onChange={onChangeHandler}/>

      </div>
    </div>
  )
}

export default UserEdit
