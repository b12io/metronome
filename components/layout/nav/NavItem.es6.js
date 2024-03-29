import React from 'react'
import classnames from 'classnames'
import { ChevronRight } from '../../Icons.es6.js'

class NavItem extends React.Component {
  static defaultProps = {
    label: '',
    disabled: false,
    showArrow: false,
    active: false,
    onClick: () => {},
    onActionClick: () => {},
    onBadgeClick: () => {}
  }

  handleActionClick = (event) => {
    event.stopPropagation()

    this.props.onActionClick()
  }

  handleBadgeClick = (event) => {
    event.stopPropagation()

    this.props.onBadgeClick()
  }

  render() {
    const {
      disabled,
      className,
      icon,
      innerRef,
      label,
      showArrow,
      active,
      onClick,
      onActionClick,
      onBadgeClick,
      actionIcon,
      badge
    } = this.props
    const classNames = classnames(
      {
        'ds-nav__item': true,
        'ds-nav__item--disabled': disabled,
        'ds-nav__item--active': active
      },
      className
    )
    return (
      <div className={classNames} onClick={onClick} ref={innerRef}>
        {icon && <div className="ds-nav__item-icon">{icon}</div>}
        <div className="ds-nav__item-label">{label}</div>
        {badge && <div className="ds-nav__item-badge" onClick={onBadgeClick ? this.handleBadgeClick : null}>{badge}</div>}
        {actionIcon && onActionClick && (
          <div className="ds-nav__item-action" onClick={this.handleActionClick}>
            {actionIcon}
          </div>
        )}
        {showArrow && (
          <div className="ds-nav__item-arrow">
            <ChevronRight />
          </div>
        )}
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <NavItem innerRef={ref} {...props} />
))
