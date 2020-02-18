import React, { useRef, useEffect } from 'react'

type DateInputProps = {
  value: string
  classes: string[]
  id: string
  onChange: (value: string) => void
}

const DateInput: React.FC<DateInputProps> = ({ id, value, classes, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const cls = ['datepicker', ...classes]

  useEffect(() => {
    if (inputRef.current) {
      const defaultDate = value ? new Date(value) : new Date()
      M.Datepicker.init(inputRef.current!, {
        defaultDate,
        setDefaultDate: true,
        onSelect: (value) => {
          onChange(value.toDateString())
        }
      })
    }
    // eslint-disable-next-line
  }, [inputRef, value])

  return (
    <input
      className={cls.join(' ')}
      id={id}
      type="text"
      ref={inputRef} />
  )
}

export default DateInput
