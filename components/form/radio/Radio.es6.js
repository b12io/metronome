import React from 'react'
import PropTypes from 'prop-types'

function Radio ({disabled, label, name, value, checked, onChange}) {
  return (
    <div className="ds-form-group">
      <label className="ds-form-control-radio">
        <input type="checkbox"
          value={value}
          name={name}
          disabled={disabled}
          checked={checked}
          onChange={() => {
            onChange(value)
          }} />
        <span className="ds-form-control-radio__indicator"></span>
        <span className="ds-form-control-radio__label">{label}</span>
      </label>
    </div>
  )
}

Radio.defaultProps = {
  label: '',
  value: '',
  name: '',
  checked: false,
  disabled: false,
  onChange: () => {}
}

Radio.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

export default Radio
