import React from 'react'

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

export default Radio
