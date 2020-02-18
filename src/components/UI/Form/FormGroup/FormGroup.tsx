import React, { ReactNode } from 'react'
import * as _ from 'lodash'

import { FormControlCollection, FormControl } from '../../../../interfaces/Form'
import { FormField } from '../FormField/FormField'
import { formBuilder } from '../../../../lib/formBuilder'

type FormGroupProps = {
  formControls: FormControlCollection
  groupName: string
  groupIndex: number
  onRemove: (name: string, index: number) => void
  onChange: (value: FormControlCollection, groupName: string, groupIndex: number) => void
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  const fromControlsKeys = _.keys(props.formControls)

  const renderControl = (control: FormControl, controlName: string, groupName: string, groupIndex: number): ReactNode => {
    return <FormField
      label={control.label}
      value={control.value}
      valid={control.valid}
      shouldValidate={!!control.validation}
      touched={control.touched}
      type={control.type}
      errorMessage={control.errorMessage}
      onChange={(value: string) => onChangeGroupHandler(value, controlName)} />
  }

  const onChangeGroupHandler = (value: string, controlName: string): void => {
    const formGroupControls = { ...props.formControls }

    const control = { ...formGroupControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = formBuilder.validate(control.value, control.validation)

    if (!control.valid) {
      control.errorMessage = formBuilder.getErrorMessage(control)
    }

    formGroupControls[controlName] = control

    props.onChange(formGroupControls, props.groupName, props.groupIndex)
  }

  return (
    <div className="card">
      <div className="card-content">
        <i onClick={() => props.onRemove(props.groupName, +props.groupIndex)} className="cursor-pointer card-close right material-icons">close</i>
        {
          _.map(fromControlsKeys, (groupControlName, groupControlIndex) => {
            const control = props.formControls[groupControlName]

            return (
              <React.Fragment key={groupControlIndex}>
                {renderControl(control, groupControlName, props.groupName, +props.groupIndex)}
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default FormGroup
