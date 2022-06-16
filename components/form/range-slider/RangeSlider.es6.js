// 
import React from 'react'
import classnames from 'classnames'


export default class RangeSlider extends React.Component {
  render () {
    const { value, label, min, max, step, disabled,
      onChange, className, minCaption, maxCaption,
      centerCaption, ...otherProps } = this.props
    return (
      <div
        className={classnames('ds-form-group', 'ds-form-range-slider', className)}
      >
        {label && <div className="ds-control-label">{label}</div>}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          disabled={disabled}
          step={step}
          onChange={event => onChange(event.target.value)}
          {...otherProps}
        />
        {/* TODO(Chyngyz): Make this accept any number of captions */}
        {(minCaption || maxCaption || centerCaption) && (
          <div className="ds-form-range-slider__caption">
            {minCaption && <div className="ds-form-range-slider__caption-item">{minCaption}</div>}
            {centerCaption && <div className="ds-form-range-slider__caption-item">{centerCaption}</div>}
            {maxCaption && <div className="ds-form-range-slider__caption-item">{maxCaption}</div>}
          </div>
        )}
      </div>
    )
  }
}
