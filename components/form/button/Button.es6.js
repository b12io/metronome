import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * Buttons trigger actions when clicked.
 */
function Button ({ label, badge, primary, danger, loading, superSmall, small, large, wide, icon, iconWithLabel, active, block, disabled, onClick, className, buttonRef, id, alternative, chevron, type, title, round, roundedRectangle, hasSelection, selected, recording, highlighted }) {

  const renderButtonContent = () => {
    // Icon with label
    if (iconWithLabel) {
      return (
        <React.Fragment>{icon} {label}</React.Fragment>
      )
    }

    // Round button
    if (round) {
      // Show spinner if loading, otherwise show icon
      if (loading) {
        return <span className="button__spinner" />
      } else {
        return icon
      }
    }

    // Regular button
    // Show icon if provided, otherwise show spinner or label
    if (icon) {
      return icon
    } else if (loading) {
      return <span className="button__spinner" />
    } else {
      return label
    }
  }

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
      'button--round': round,
      'button--rounded-rectangle': roundedRectangle,
      'button--has-selection': hasSelection,
      'button--selected': selected,
      'button--recording-indicator': recording && round,
      'button--highlighted': highlighted && (round || roundedRectangle),
      active,
    }, className)}
    disabled={disabled}
    onClick={onClick}
    type={type}
    ref={buttonRef}
    id={id}
    title={title}
  >
    {renderButtonContent()}

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
  onClick: () => {},
  title: '',
  round: false,
  roundedRectangle: false,
  hasSelection: false,
  selected: false,
  recording: false,
  highlighted: false,
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
  title: PropTypes.string,
  /**
   * Whether this should be a rounded button.
   */
  round: PropTypes.bool,
  /**
   * Whether this should be a rounded-rectangle button.
   */
  roundedRectangle: PropTypes.bool,
  /**
   * Whether this should have a selected item.
   */
  hasSelection: PropTypes.bool,
  /**
   * Whether this is actively selected.
   */
  selected: PropTypes.bool,
  /**
   * Whether this button is recording
   */
  recording: PropTypes.bool,

  /**
   * Whether this button is highlighted
   */
  highlighted: PropTypes.bool,
}

export default Button
