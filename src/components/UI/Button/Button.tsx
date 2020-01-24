import React from 'react'

type ButtonProps = {
  label: string;
  type: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const cls = ['darken-1', 'btn'];

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

  return (
    <button className={cls.join(' ')}>{props.label}</button>
  )
}

export default Button;