import React from 'react'
import classnames from 'classnames'

/**
 * Buttons trigger actions when clicked.
 */
function Button ({ label, badge, primary, danger, loading, superSmall, small, large, wide, icon, iconWithLabel, active, block, disabled, onClick, className, buttonRef, id, alternative, chevron, type }) {
  return (<button
    className={classnames({
      button: true,
      'is-loading': loading,
      'button--primary': primary,
      'button--danger': danger,
      'button--sm': small,
      'button--ssm': superSmall,
      'button--lg': large,
      'button--wd': wide,
      'button--block': block,
      'button--icon': icon,
      'button--icon-with-label': iconWithLabel,
      'button--alternative': alternative,
      'button--has-chevron': chevron,
      active,
    }, className)}
    disabled={disabled}
    onClick={onClick}
    type={type}
    ref={buttonRef}
    id={id}
  >
    {iconWithLabel ? (
      <>
        {icon} {label}
      </>
    ) : (
      <>
        {icon || (
          loading ? <span className="button__spinner" /> : label
        )}
      </>
    )}
    {badge && (
      <span className="button__badge">{badge}</span>
    )}
    {chevron && (
      <span className="button__chevron"></span>
    )}
  </button>)
}

Button.defaultProps = {
  label: '',
  badge: '',
  primary: false,
  danger: false,
  loading: false,
  small: false,
  superSmall: false,
  large: false,
  wide: false,
  active: false,
  block: false,
  alternative: false,
  disabled: false,
  icon: null,
  iconWithLabel: false,
  chevron: false,
  type: 'button',
  onClick: () => {}
}

export default Button
