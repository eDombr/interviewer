import React, { MouseEvent } from 'react'

type FloatingButtonProps = {
  type?: string
  size?: string
  icon: string
  clickButton?: () => void
}

const FloatingButton: React.FC<FloatingButtonProps> = (props) => {
  const cls = ['darken-1', 'btn-floating', 'waves-effect', 'waves-light', 'mx0_5']

  if (props.size) {
    cls.push(`btn-${props.size}`)
  }

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
    <button onClick={(event) => onClickHandler(event)} className={cls.join(' ')}><i className="material-icons">{props.icon}</i></button>
  )
}

export default FloatingButton
