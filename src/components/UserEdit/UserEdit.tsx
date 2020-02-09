import * as _ from 'lodash'
import M from 'materialize-css'

import React, { useState, useEffect, useContext } from 'react'
import { FormControlCollection } from '../../interfaces/Form'
import { formBuilder } from '../../lib/formBuilder'
import Form from '../UI/Form/Form'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/user/userContext'
import { IUser, IWorkHistoryItem } from '../../interfaces/User'

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
  currentPosition: formBuilder.createControl(
    { label: 'Current Position' },
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
  const { getUser, clearUser, user } = useContext(UserContext)
  const { id } = useParams()

  const [formControls, setFormControls] = useState<any>(
    createFormControls()
  )

  useEffect(() => {
    if (id) {
      getUser(+id)
    } else {
      clearUser()
    }

    return () => {
      clearUser()
    }
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (user) {
      fillFormControls(user)

      M.updateTextFields()
    } else {
      setFormControls(createFormControls())
    }
    // eslint-disable-next-line
  }, [user])

  const onChangeHandler = (formControls: FormControlCollection) => {
    setFormControls(formControls)
  }

  const onAddFormGroupHandler = (groupName: string): void => {
    const controls: FormControlCollection = _.cloneDeep(formControls)
    const control = controls[groupName];

    control.groups!.push(createWorkHistoryItem())

    setFormControls(controls)
  }

  const fillFormControls = (user: IUser): void => {
    const controls: any = _.cloneDeep(formControls)

    _.forEach(user, (value, key) => {
      if (key !== 'workHistory') {
        if (controls[key]) {
          controls[key].value = value
        }
      } else {
        _.forEach(value as IWorkHistoryItem[], (workHistoryItem: IWorkHistoryItem, index: string | number) => {
          controls[key].groups.push(createWorkHistoryItem())
        
          _.forEach(workHistoryItem as IWorkHistoryItem, (historyItemValue: string | Date | undefined, historyItemKey: string) => {
            controls[key].groups[index][historyItemKey].value = historyItemValue;
          })
        })
      }
    })

    setFormControls(controls)
  }

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <h2 className="center-align">
          {`${id ? 'Edit' : 'Create'} User`}
        </h2>

        <Form 
          formControls={formControls}
          onAddGroup={onAddFormGroupHandler}
          onChange={onChangeHandler}/>

      </div>
    </div>
  )
}

export default UserEdit
