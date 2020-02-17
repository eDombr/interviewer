import * as _ from 'lodash'
import React, { useState, ReactNode, ReactNodeArray, useEffect } from 'react'
import { FormControlCollection, FormControl } from '../../../interfaces/Form'
import { Input } from './Input/Input'
import Button from '../Button/Button'
import { formBuilder } from '../../../lib/formBuilder'
import { InputType } from '../../../constants/Form'
import FormGroup from './FormGroup/FormGroup'

type FormProps = {
  formControls: FormControlCollection
  onChange: (formControls: FormControlCollection) => void
  submitBtnLabel?: string
  onAddGroup?: (groupName: string) => void
}

const Form: React.FC<FormProps> = (props) => {
  const [isFormValid, setFromValid] = useState<boolean>(false)
  const fromControlsKeys = _.keys(props.formControls)

  useEffect(() => {
    setFromValid(formBuilder.validateForm(props.formControls))
  }, [props.formControls])


  const onChangeHandler = (value: string, controlName: string): void => {
    const formControls = { ...props.formControls }
    
    const control = { ...formControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = formBuilder.validate(control.value, control.validation)

    if (!control.valid) {
      control.errorMessage = formBuilder.getErrorMessage(control)
    }

    formControls[controlName] = control

    props.onChange(formControls)
  }

  const onChangeGroupHandler = (value: FormControlCollection, groupName: string, groupIndex: number): void => {
    const formControls = { ...props.formControls }

    formControls[groupName].groups![groupIndex!] = value

    props.onChange(formControls)
  }

  const onRemoveGroupHandler = (groupName: string, groupIndex: number): void => {
    const formControls = _.cloneDeep(props.formControls)
    const control = formControls[groupName]
    
    _.remove(control.groups!, (group, index) => index === groupIndex)

    props.onChange(formControls)
  }

  const renderControl = (control: FormControl, controlName: string): ReactNode => {
    return <Input
      label={control.label}
      value={control.value}
      valid={control.valid}
      shouldValidate={!!control.validation}
      touched={control.touched}
      type={control.type}
      errorMessage={control.errorMessage}
      onChange={(value: string) => onChangeHandler(value, controlName)} />
  }

  const renderGroups = (control: FormControl, controlName: string): ReactNodeArray => {
    return _.map(control.groups, (group, groupIndex) => {

      return (
        <FormGroup
          key={groupIndex}
          groupName={controlName}
          formControls={group}
          groupIndex={groupIndex}
          onChange={onChangeGroupHandler}
          onRemove={onRemoveGroupHandler}/>
      )
    })
  }

  return (
    <div className="card">
      <div className="card-content">

        <form>
          {
            _.map(fromControlsKeys, (controlName, index) => {
              const control = props.formControls[controlName]

              if (control.type === InputType.GROUP) {
                return (
                  <React.Fragment key={index}>
                    <h4>{control.label}</h4>
                    {renderGroups(control, controlName)}
                    <div className="mb1">
                      <Button label="Add" clickButton={() => props.onAddGroup!(controlName)}  type="success"></Button>
                    </div>
                  </React.Fragment>
                )
              }

              return (
                <React.Fragment key={index}>
                  {renderControl(control, controlName)}
                </React.Fragment>
              )
            })
          }

          <div className="right">
            <Button disabled={!isFormValid} label={props.submitBtnLabel || 'Submit'} type="primary" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
