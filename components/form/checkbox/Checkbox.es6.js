import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Checkmark } from '../../Icons.es6.js'


function Checkbox ({ disabled = false, checked = false, indeterminate = false, label = '', name = '', onChange = () => {}, hasError = false }) {
  const setCheckboxRef = checkbox => {
    if (checkbox) {
      checkbox.indeterminate = indeterminate
    }
  }

  return (
    <div className="ds-form-group">
      <label className={classnames({
        'ds-form-control-checkbox': true,
        'has-error': hasError,
        'is-disabled': disabled
      })}>
        <input type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={ event => {
            onChange(event.target.checked)
          }}
          ref={setCheckboxRef}
        />
        <span className="ds-form-control-checkbox__indicator"><Checkmark /></span>
        <span className="ds-form-control-checkbox__label">{label}</span>
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool
}

export default Checkbox
