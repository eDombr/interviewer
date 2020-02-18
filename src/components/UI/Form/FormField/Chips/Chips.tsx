import React, { useRef, useEffect } from 'react'
import * as _ from 'lodash';

type ChipsProps = {
  value: string[]
  onChange?: (value: string) => void
}

const Chips: React.FC<ChipsProps> = ({ value, onChange }) => {
  const chipsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const data = _.map(value, chip => ({tag: chip}))

    M.Chips.init(chipsRef.current!, {
      data,
      autocompleteOptions: {
        data: {
          'Apple': null,
          'Microsoft': null,
          'Google': null
        },
        limit: Infinity,
        minLength: 1
      }
    })
  }, [])

  return (
    <div
      className="chips chips-autocomplete"
      ref={chipsRef}></div>
  )
}

export default Chips
