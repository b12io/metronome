import React from 'react'
import classnames from 'classnames'

import { Checkmark } from '../../Icons.es6.js'

function Checkbox({
  disabled,
  checked,
  indeterminate,
  label,
  name,
  onChange,
  hasError
}) {
  const setCheckboxRef = (checkbox) => {
    if (checkbox) {
      checkbox.indeterminate = indeterminate
    }
  }

  return (
    <div className="ds-form-group">
      <label
        className={classnames({
          'ds-form-control-checkbox': true,
          'has-error': hasError,
          'is-disabled': disabled
        })}
      >
        <input
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={(event) => {
            onChange(event.target.checked)
          }}
          ref={setCheckboxRef}
        />
        <span className="ds-form-control-checkbox__indicator">
          <Checkmark />
        </span>
        <span className="ds-form-control-checkbox__label">{label}</span>
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  label: '',
  name: '',
  checked: false,
  disabled: false,
  indeterminate: false,
  hasError: false,
  onChange: () => {}
}

export default Checkbox
