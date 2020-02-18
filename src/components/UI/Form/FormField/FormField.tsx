import React from 'react'
import { InputType } from '../../../../constants/Form'
import DateInput from './DateInput/DateInput'
import Textarea from './Textarea/Textarea'
import Input from './Input/Input'

type FormFieldProps = {
  type?: string
  value: string
  label: string
  valid: boolean
  touched: boolean
  errorMessage?: string
  shouldValidate: boolean
  onChange: (value: string) => void
}

function isInvalid({ valid, touched, shouldValidate }: { valid: boolean, touched: boolean, shouldValidate: boolean }) {
  return !valid && shouldValidate && touched
}

export const FormField: React.FC<FormFieldProps> = ({type, value, onChange, label, errorMessage, touched, valid, shouldValidate}) => {
  const inputType: string = type || InputType.TEXT
  const htmlFor: string = `${inputType}-${Math.random()}`
  const cls = ['validate']

  if (isInvalid({valid, shouldValidate, touched})) {
    cls.push('invalid')
  }

  const renderFormField = () => {
    switch(inputType) {
      case 'textarea':
        return <Textarea value={value} id={htmlFor} classes={cls} onChange={onChange}/>
      case 'date':
        return <DateInput value={value} id={htmlFor} classes={cls} onChange={onChange}/>
      default:
        return <Input value={value} id={htmlFor} classes={cls} type={inputType} onChange={onChange}/>
    }
  }

  return (
    <div className="input-field">
      {renderFormField()}
      <label htmlFor={htmlFor} className={`${value ? 'active': ''}`}>{label}</label>
      {isInvalid({valid, shouldValidate, touched}) ? <span className="helper-text" data-error={errorMessage || 'Type correct value'}></span> : null}
    </div>
  )
}