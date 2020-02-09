import React, { useRef, useEffect } from 'react';
import M from 'materialize-css'

type InputProps = {
  type?: string;
  value: string;
  label: string;
  valid: boolean;
  touched: boolean;
  errorMessage?: string;
  shouldValidate: boolean;
  onChange: (value: string) => void;
}

function isInvalid({ valid, touched, shouldValidate }: { valid: boolean, touched: boolean, shouldValidate: boolean }) {
  return !valid && shouldValidate && touched;
}

export const Input: React.FC<InputProps> = ({type, value, onChange, label, errorMessage, touched, valid, shouldValidate}) => {
  const inputType: string = type || 'text'
  const htmlFor: string = `${inputType}-${Math.random()}`
  const cls = ['validate'];

  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      const defaultDate = value ? new Date(value) : new Date();
      M.Datepicker.init(inputRef.current!, {
        defaultDate,
        setDefaultDate: true,
        onSelect: (value) => {
          onChange(value.toDateString());
        }
      })
    }
    // eslint-disable-next-line
  }, [inputRef, value])

  useEffect(() => {
    if (textareaRef.current && value) {
      M.textareaAutoResize(textareaRef.current)
    }
    // eslint-disable-next-line
  }, [textareaRef, value])

  if (isInvalid({valid, shouldValidate, touched})) {
    cls.push('invalid')
  }

  if (inputType === 'textarea') {
    cls.push('materialize-textarea')
  }

  if (inputType === 'date') {
    cls.push('datepicker')
  }

  const renderInput = () => {
    switch(inputType) {
      case 'textarea':
        return <textarea
                  className={cls.join(' ')}
                  id={htmlFor}
                  value={value}
                  ref={textareaRef}
                  onChange={event => onChange(event.target.value)} />
      case 'date':
        return <input
                  className={cls.join(' ')}
                  id={htmlFor}
                  type="text"
                  ref={inputRef} />
      default:
        return <input
                  className={cls.join(' ')}
                  id={htmlFor}
                  type={inputType}
                  value={value}
                  onChange={event => onChange(event.target.value)} />
    }
  }

  return (
    <div className="input-field">
      {renderInput()}
      <label htmlFor={htmlFor} className={`${value ? 'active': ''}`}>{label}</label>
      {isInvalid({valid, shouldValidate, touched}) ? <span className="helper-text" data-error={errorMessage || 'Type correct value'}></span> : null}
    </div>
  )
}