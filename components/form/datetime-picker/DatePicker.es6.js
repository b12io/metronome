/* @flow */
import React from 'react'
import DatePicker from 'react-datepicker'

import Toggle from '../toggle/Toggle.es6.js'
import DropdownStyles from '../dropdown-styles/DropdownStyles.es6.js'

type Props = {
  onChange?: (datetime: moment$Moment) => void,
  onChangeRaw?: (datetimeRaw: string) => void,
  value?: ?moment$Moment
}

function B12DatePicker ({ onChange, value, ...rest }: Props) {
  return (
    <div className="ds-form-control-select">
      <div className="ds-control-label">
        Date
      </div>
      <Toggle>
        {(isOpen, onToggle, onBlur) => (
          <DatePicker
            {...rest}
            className="datetime-picker__date-picker"
            dateFormat="MMMM DD, YYYY"
            selected={value}
            onChange={onChange}
            placeholderText="Choose date"
            customInput={(
              <DropdownStyles
                isOpen={isOpen}
                blurAction={onBlur}
                selectAction={onToggle}
              />
            )}
          />
        )}
      </Toggle>
    </div>
  )
}

export default B12DatePicker
