import * as _ from 'lodash'
import React, { useState } from 'react'
import { formBuilder } from '../../../lib/formBuilder'
import { InputType } from '../../../constants/Form'
import { FormControlCollection } from '../../../interfaces/Form'
import Form from '../../UI/Form/Form'

const createFormControls = (): FormControlCollection => ({
  name: formBuilder.createControl(
    { label: 'Name' },
    { required: true }
  ),
  skills: formBuilder.createControl(
    { label: 'Topics', type: InputType.GROUP, groups: [] }
  )
})

const createTopicGroup = (): FormControlCollection => ({
  name: formBuilder.createControl(
    { label: 'Name' }, { required: true }
  )
})

const SkillEdit: React.FC = () => {
  const [formControls, setFormControls] = useState(createFormControls())

  const onChangeHandler = (formControls: FormControlCollection) => {
    setFormControls(formControls)
  }

  const onAddFormGroupHandler = (groupName: string): void => {
    const controls: FormControlCollection = _.cloneDeep(formControls)
    const control = controls[groupName]

    control.groups!.push(createTopicGroup())

    setFormControls(controls)
  }

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <h2 className="center-align">
          Edit Skill
        </h2>

        <Form 
          formControls={formControls}
          onAddGroup={onAddFormGroupHandler}
          onChange={onChangeHandler}/>
      </div>
    </div>
  )
}

export default SkillEdit
