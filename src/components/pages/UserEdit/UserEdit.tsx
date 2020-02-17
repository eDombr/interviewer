import * as _ from 'lodash'
import M from 'materialize-css'

import React, { useState, useEffect, useContext } from 'react'
import { FormControlCollection } from '../../../interfaces/Form'
import { formBuilder } from '../../../lib/formBuilder'
import Form from '../../UI/Form/Form'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../../context/user/userContext'
import { IUser, IWorkHistoryItem } from '../../../interfaces/User'
import { InputType } from '../../../constants/Form'

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
    { label: 'Description', type: InputType.TEXTAREA },
  ),
  workHistory: formBuilder.createControl(
    { label: 'Work History', type: InputType.GROUP, groups: [] }
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
    { label: 'Start Date', type: InputType.DATE }
  ),
  endDate: formBuilder.createControl(
    { label: 'End Date', type: InputType.DATE }
  ),
})

const UserEdit: React.FC = () => {
  const { getUser, clearUser, user } = useContext(UserContext)
  const { id } = useParams()

  const [formControls, setFormControls] = useState<FormControlCollection>(
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
    const control = controls[groupName]

    control.groups!.push(createWorkHistoryItem())

    setFormControls(controls)
  }

  const fillFormControls = (user: IUser): void => {
    const controls: any = _.cloneDeep(formControls)

    _.forEach(user, (value, key) => {
      if (key !== 'workHistory') {
        if (controls[key]) {
          const control = controls[key]
          control.value = value
          control.valid = formBuilder.validate(control.value, control.validation)
        }
      } else {
        _.forEach(value as IWorkHistoryItem[], (workHistoryItem: IWorkHistoryItem, index: string | number) => {
          controls[key].groups.push(createWorkHistoryItem())
        
          _.forEach(workHistoryItem as IWorkHistoryItem, (historyItemValue: string | Date | undefined, historyItemKey: string) => {
            const control = controls[key].groups[index][historyItemKey]
            control.value = historyItemValue
            control.valid = formBuilder.validate(control.value, control.validation)
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
          onChange={onChangeHandler}
          submitBtnLabel={`${id ? 'Edit' : 'Create'} User`}/>

      </div>
    </div>
  )
}

export default UserEdit
