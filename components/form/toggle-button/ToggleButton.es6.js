import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function ToggleButton ({ className, label, checked, onChange }) {
  return (
    <div className={classnames('ds-form-group', className)}>
      <label className='ds-form-control-toggle'>
        <input type='checkbox'
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className='ds-form-control-toggle__slider' />
        <span className='ds-form-control-toggle__label'>{label}</span>
      </label>
    </div>
  )
}

ToggleButton.defaultProps = {
  className: '',
  label: '',
  checked: false,
  onChange: () => {}
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default ToggleButton
