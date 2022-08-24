
import * as React from 'react'
import classnames from 'classnames'
import { CloseMedia } from '../../Icons.es6.js'


function Badge ({ neutral, label, icon, uppercase, filled,
  success, warning, primary, hasRemoveIcon,
  className, size, onRemoveClick, selected, ...otherProps }) {
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

Badge.defaultProps = {
  neutral: false,
  icon: null,
  label: '',
  filled: false,
  uppercase: false,
  success: false,
  warning: false,
  primary: false,
  selected: false,
  size: 'small',
  hasRemoveIcon: false,
  onRemoveClick: () => {}
}

export default Badge
