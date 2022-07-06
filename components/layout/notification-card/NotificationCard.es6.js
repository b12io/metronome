import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Checkmark } from '../../Icons.es6.js'

function NotificationCard ({
  label,
  icon,
  success,
  error,
  warning,
  hideIcon,
  alignCenter,
  children
}) {
  const classNames = classnames({
    'ds-notification': true,
    'ds-notification--success': success,
    'ds-notification--error': error,
    'ds-notification--warning': warning,
    'ds-notification--no-icon': hideIcon,
    'ds-notification--align-center': alignCenter
  })
  return (
    <div className={classNames}>
      {!hideIcon && (
        <div className="ds-notification__icon">{icon || <Checkmark />}</div>
      )}
      <div className="ds-notification__label">{label || children}</div>
    </div>
  )
}

NotificationCard.defaultProps = {
  icon: null,
  label: '',
  success: true,
  error: false,
  warning: false,
  hideIcon: false,
  alignCenter: false
}

/**
 * `success` prop is here to show the flexibility
 * to extend and add new notification states
 */
NotificationCard.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  success: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  children: PropTypes.node,
  hideIcon: PropTypes.bool,
  alignCenter: PropTypes.bool
}

export default NotificationCard
