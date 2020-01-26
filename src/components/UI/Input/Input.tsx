import React from 'react';

type InputProps = {
  type?: string;
  value: string;
  label: string;
  valid: boolean;
  touched: boolean;
  errorMessage?: string;
  shouldValidate: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function isInvalid({valid, touched, shouldValidate}: {valid: boolean, touched: boolean, shouldValidate: boolean}) {
  return !valid && shouldValidate && touched;
}

export const Input: React.FC<InputProps> = (props) => {
  const inputType: string = props.type || 'text'
  const htmlFor: string = `${inputType}-${Math.random()}`
  const cls = ['validate'];

  if (isInvalid(props)) {
    cls.push('invalid')
  }

  return (
    <div className="input-field">
      <input 
        className={cls.join(' ')}
        id={htmlFor}
        type={inputType} 
        value={props.value} 
        onChange={props.onChange} />
      <label htmlFor={htmlFor}>{props.label}</label>
      {isInvalid(props) ? <span className="helper-text" data-error={props.errorMessage || 'Type correct value'}></span> : null}
    </div>
  )
}