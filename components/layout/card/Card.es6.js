import React from 'react'
import classnames from 'classnames'


function Card ({ add = false, children, disabled = false, handleClick = () => {}, icon = null, label = '', value = '', className = '',
  selected = false, hasImage = false, hasColorPalette = false, onMouseEnter = () => {}, onMouseLeave = () => {} }) {
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

export default Card
