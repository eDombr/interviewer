import * as _ from 'lodash'
import React, { useState } from 'react'
import { FormControlCollection, FormControl } from '../../../interfaces/Form'
import { Input } from './Input/Input'
import Button from '../Button/Button'
import { formBuilder } from '../../../lib/formBuilder'
import FloatingButton from '../FloatingButton/FloatingButton'

type FormProps = {
  formControls: FormControlCollection;
  onChange: (formControls: FormControlCollection) => void;
  onAddGroup?: (groupName: string) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [isFormValid, setFromValid] = useState<boolean>(false);
  const fromControlsKeys = _.keys(props.formControls);

  const onChangeHandler = (value: string, controlName: string, groupName?: string, groupIndex?: number): void => {
    const formControls = { ...props.formControls }
    let control;
    let group;

    if (groupName) {
      group = _.cloneDeep(formControls[groupName])

      control = { ...group.groups![groupIndex!][controlName] } 
    } else {
      control = { ...formControls[controlName] }
    }

    control.touched = true
    control.value = value
    control.valid = formBuilder.validate(control.value, control.validation)

    if (!control.valid) {
      control.errorMessage = formBuilder.getErrorMessage(control)
    }

    if (groupName) {
      formControls[groupName].groups![groupIndex!][controlName] = control;
    } else {
      formControls[controlName] = control
    }

    setFromValid(formBuilder.validateForm(formControls))

    props.onChange(formControls)
  }

  const onRemoveGroupHandler = (groupName: string, groupIndex: number): void => {
    const formControls = _.cloneDeep(props.formControls)
    const control = formControls[groupName]
    
    _.remove(control.groups!, (group, index) => index === groupIndex)

    props.onChange(formControls)
  }

  const renderControl = (control: FormControl, controlName: string, groupName?: string, groupIndex?: number) => {
    return <Input
      label={control.label}
      value={control.value}
      valid={control.valid}
      shouldValidate={!!control.validation}
      touched={control.touched}
      type={control.type}
      errorMessage={control.errorMessage}
      onChange={(value: string) => onChangeHandler(value, controlName, groupName, groupIndex)} />
  }

  return (
    <div className="card">
      <div className="card-content">

        <form>
          {
            _.map(fromControlsKeys, (controlName, index) => {
              const control = props.formControls[controlName];

              if (control.type === 'group') {
                return (
                  <React.Fragment key={index}>
                    <h4>{control.label}</h4>
                    {
                      _.map(control.groups, (group, groupIndex) => {
                        const keys = _.keys(group);

                        return (
                          <div className="card" key={groupIndex}>
                            <div className="card-content">
                              <i onClick={() => onRemoveGroupHandler(controlName, +groupIndex)} className="cursor-pointer card-close right material-icons">close</i>
                              <div>
                                {
                                  _.map(keys, (groupControlName, groupControlIndex) => {
                                    const groupControl = group[groupControlName];

                                    return (
                                      <React.Fragment key={groupControlIndex}>
                                        {renderControl(groupControl, groupControlName, controlName, +groupIndex)}
                                      </React.Fragment>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
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
            <Button disabled={!isFormValid} label="Submit" type="primary" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
