import React from 'react'

type InputProps = {
  value: string
  classes: string[]
  type: string
  id: string
  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({value, classes, type, id, onChange}) => {
  return (
    <input
      className={classes.join(' ')}
      id={id}
      type={type}
      value={value}
      onChange={event => onChange(event.target.value)} />
  )
}

export default Input
