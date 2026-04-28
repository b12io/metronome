
import * as React from 'react'
import classnames from 'classnames'
import { CloseMedia } from '../../Icons.es6.js'


function Badge ({ neutral = false, label = '', icon = null, uppercase = false, filled = false,
  success = false, warning = false, primary = false, hasRemoveIcon = false,
  className, size = 'small', onRemoveClick = () => {}, selected = false, ...otherProps }) {
  const classNames = classnames({
    'ds-badge': true,
    'ds-badge--default': neutral,
    'ds-badge--uppercase': uppercase,
    'ds-badge--filled': filled,
    'ds-badge--success': success,
    'ds-badge--warning': warning,
    'ds-badge--primary': primary,
    'ds-badge--has-remove-icon': hasRemoveIcon,
    'is-selected': selected,
  }, `ds-badge--size-${size}`, className)
  return (
    <div className={classNames} {...otherProps}>
      <div className="ds-badge__label">
        {icon}{label}
      </div>
      {hasRemoveIcon && (
        <div className="ds-badge__remove-icon" onClick={onRemoveClick}>
          <CloseMedia
            color={filled ? '#ffffff' : '#808080'}
            width="8"
            height="8"
            viewBox="0 0 8 8"
          />
        </div>
      )}
    </div>
  )
}

export default Badge
