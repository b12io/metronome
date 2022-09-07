import React from 'react'
import classnames from 'classnames'


function Card ({ add, children, disabled, handleClick, icon, label, value, className,
  selected, hasImage, hasColorPalette, onMouseEnter, onMouseLeave }) {
  return (
    <button
      className={classnames(className, {
        'ds-card': true,
        'ds-card--add': add,
        'ds-card--selected': selected,
        'ds-card--has-image': hasImage,
        'ds-card--has-colors': hasColorPalette
      })}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="ds-card__icon">
        {icon}
      </div>
      <div className="ds-card__label">{label}</div>
      <div className="ds-card__value">{value}</div>
      {children}
    </button>
  )
}

Card.defaultProps = {
  add: false,
  disabled: false,
  selected: false,
  hasImage: false,
  hasColorPalette: false,
  handleClick: () => {},
  icon: null,
  label: '',
  value: '',
  className: '',
  onMouseEnter: () => {},
  onMouseLeave: () => {}
}

export default Card
