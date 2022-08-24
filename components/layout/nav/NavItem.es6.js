/* @flow */

import React from 'react'
import classnames from 'classnames'
import { ChevronRight } from '../../Icons.es6.js'

import type { Node } from 'react'

type Props = {
  className?: string | Object,
  label: string,
  disabled: boolean,
  showArrow: boolean,
  icon?: Node,
  innerRef: { current: null | React$ElementRef<ElementType> },
  actionIcon?: Node,
  badge?: string | number,
  active: boolean,
  onClick: () => void,
  onActionClick: () => void
}

class NavItem extends React.Component<Props> {
  static defaultProps = {
    label: '',
    disabled: false,
    showArrow: false,
    active: false,
    onClick: () => {},
    onActionClick: () => {}
  }

  handleActionClick = (event: SyntheticEvent<*>) => {
    event.stopPropagation()

    this.props.onActionClick()
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
        {badge && <div className="ds-nav__item-badge">{badge}</div>}
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
