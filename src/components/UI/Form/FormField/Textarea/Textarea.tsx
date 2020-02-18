import React, { useEffect, useRef } from 'react'

type TextareaProps = {
  value: string
  classes: string[]
  id: string
  onChange: (value: string) => void
}

const Textarea: React.FC<TextareaProps> = ({id, value, onChange, classes}) => {
  const cls = ['materialize-textarea', ...classes]

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      M.textareaAutoResize(textareaRef.current)
    }
    // eslint-disable-next-line
  }, [textareaRef, value])

  return (
    <textarea
      className={cls.join(' ')}
      id={id}
      value={value}
      ref={textareaRef}
      onChange={event => onChange(event.target.value)} />
  )
}

export default Textarea
