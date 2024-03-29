import React from 'react'
import { isEqual } from 'lodash'

import Checkbox from '../checkbox/Checkbox.es6.js'
import Option from '../option/Option.es6.js'
import Select from '../select/Select.es6.js'



/**
 * CheckboxSelect - a checkbox that when checked, reveals additional options
 * underneath in a Select component dropdown.
 */
function CheckboxSelect ({ checked, disabled, label, onChange, onSelectChange,
  selectOptions, selectedOption }) {
  const placeholder = selectedOption ? selectedOption.label : 'Please select'
  const options = selectOptions.map((option, index) => {
    const isActive = selectedOption ? isEqual(option.value,
      selectedOption.value) : false
    return (
      <Option
        key={`option-${index}`}
        active={isActive}
        label={option.label}
        value={option.value}
      />
    )
  })
  return (
    <div className="ds-checkbox-select">
      <Checkbox
        disabled={disabled}
        label={label}
        checked={checked}
        onChange={onChange}
      />
      {checked && selectOptions.length ? (
        <Select
          search={false}
          placeholder={placeholder}
          onChange={onSelectChange}>
          {options}
        </Select>
      ) : null
      }
    </div>
  )
}

CheckboxSelect.defaultProps = {
  checked: false,
  disabled: false,
  label: '',
  onChange: () => {},
  onSelectChange: () => {},
  selectOptions: [],
  selectedOption: null
}

export default CheckboxSelect
