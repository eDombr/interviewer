import * as _ from 'lodash'
import React, { useState } from 'react'
import { FormControlCollection } from '../../../interfaces/Form'
import { Input } from './Input/Input'
import Button from '../Button/Button'
import { formBuilder } from '../../../lib/formBuilder'

type FormProps = {
  formControls: FormControlCollection;
  onChange: (formControls: FormControlCollection) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [isFormValid, setFromValid] = useState<boolean>(false);
  const fromControlsKeys = _.keys(props.formControls);

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

    setFromValid(formBuilder.validateForm(formControls))
  
    props.onChange(formControls)
  }

  return (
    <div className="card">
      <div className="card-content">

        <form>
          {
            _.map(fromControlsKeys, (controlName, index) => {
              const control = props.formControls[controlName];

              return (
                <React.Fragment key={index}>
                  <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => onChangeHandler(event.target.value, controlName)} />
                </React.Fragment>
              )
            })
          }

          <Button label="Submit" type="primary" />
        </form>
      </div>
    </div>
  )
}

export default Form
