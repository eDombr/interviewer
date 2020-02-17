import React, { MouseEvent } from 'react'

type ButtonProps = {
  label: string
  type: string
  disabled?: boolean
  clickButton?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const cls = ['darken-1', 'btn']

  switch(props.type) {
    case 'primary': 
      cls.push('blue')
      break
    case 'success': 
      cls.push('green')
      break
    case 'error':
      cls.push('red')
      break
    case 'warning':
      cls.push('amber')
      break
    default:
      cls.push('blue')
  }

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (props.clickButton) {
      event.preventDefault()

      props.clickButton()
    }
  }

  return (
    <button onClick={(event) => onClickHandler(event)} disabled={props.disabled} className={cls.join(' ')}>{props.label}</button>
  )
}

export default Button