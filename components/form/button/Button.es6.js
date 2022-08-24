import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * Buttons trigger actions when clicked.
 */
function Button({
  label,
  badge,
  primary,
  danger,
  loading,
  superSmall,
  small,
  large,
  wide,
  icon,
  iconWithLabel,
  active,
  block,
  disabled,
  onClick,
  className,
  buttonRef,
  id,
  alternative,
  chevron,
  type,
  title
}) {
  return (
    <button
      className={classnames(
        {
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
          active
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      ref={buttonRef}
      id={id}
      title={title}
    >
      {iconWithLabel ? (
        <React.Fragment>
          {icon} {label}
        </React.Fragment>
      ) : (
        icon || (loading ? <span className="button__spinner" /> : label)
      )}
      {badge && <span className="button__badge">{badge}</span>}
      {chevron && <span className="button__chevron"></span>}
    </button>
  )
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
  onClick: () => {},
  title: ''
}

Button.propTypes = {
  /**
   * A unique identifier for the button.
   */
  id: PropTypes.string,
  /**
   * A ref handler that receives the native HTML element backing this component.
   */
  buttonRef: PropTypes.func,
  /**
   * Text for the button.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * To show a badge for the button.
   */
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Whether the button should show primary styles.
   */
  primary: PropTypes.bool,
  /**
   * Whether the button should show danger styles.
   */
  danger: PropTypes.bool,
  /**
   * Whether the button should show loading styles.
   */
  loading: PropTypes.bool,
  /**
   * Whether the button should show small styles.
   */
  small: PropTypes.bool,
  /**
   * Whether the button should show superSmall styles.
   */
  superSmall: PropTypes.bool,
  /**
   * Whether the button should show large styles.
   */
  large: PropTypes.bool,
  /**
   * Whether the button should show wide styles.
   */
  wide: PropTypes.bool,
  /**
   * Whether the button should show active styles.
   */
  active: PropTypes.bool,
  /**
   * Whether the button should block the content of its parent.
   */
  block: PropTypes.bool,
  /**
   * Whether the button should show alternative styles.
   */
  alternative: PropTypes.bool,
  /**
   * Whether the button should show disabled styles.
   */
  disabled: PropTypes.bool,
  /**
   * A B12 UI Icon to render before the text.
   */
  icon: PropTypes.element,
  iconWithLabel: PropTypes.bool,
  /**
   * Whether the button should render a chevron after the text.
   */
  chevron: PropTypes.bool,
  /**
   * HTML type attribute of the button.
   */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  /**
   * Click event handler.
   */
  onClick: PropTypes.func,
  /**
   * HTML title attribute of the button.
   */
  title: PropTypes.string
}

export default Button
