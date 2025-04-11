import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Radio ({ className, disabled, label, description, name, value, checked, onChange, tabIndex, color }) {
  return (
    <div className={classnames('ds-form-group', className)}>
      <label className="ds-form-control-radio">
        <input type="checkbox"
          value={value}
          name={name}
          tabIndex={tabIndex}
          disabled={disabled}
          checked={checked}
          onChange={() => {
            onChange(value)
          }} />
        <span className="ds-form-control-radio__indicator"></span>
        {
          color && (
            <div className="ds-form-control-radio__color-swatch-container">
            <div className="ds-form-control-radio__color-swatch" style={{ backgroundColor: color }} />
            </div>
          )
        }
        <div className="ds-form-control-radio__label-group">
          <span className="ds-form-control-radio__label">{label}</span>
          <span className="ds-control-label">{description}</span>
        </div>
      </label>
    </div>
  )
}

Radio.defaultProps = {
  className: '',
  label: '',
  description: '',
  value: '',
  name: '',
  tabIndex: 0,
  checked: false,
  disabled: false,
  color: null,
  onChange: () => {}
}

Radio.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  description: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null])
  ]),
  onChange: PropTypes.func
}

export default Radio
