/* @flow */

import * as React from 'react'
import classnames from 'classnames'

type Props = {
  active: boolean,
  visited: boolean,
  showProgress: boolean,
  clickable: boolean,
  disabled: boolean,
  onClick: () => void,
  children: React.Node,
  className?: string | Object
}

const TabbedNavigationItem = ({ active, visited, showProgress, clickable, disabled, className, onClick, children }: Props) => {
  return (
    <React.Fragment>
      <li
        onClick={onClick}
        className={classnames(
          'ds-tabbed-nav__item',
          {
            'ds-tabbed-nav__item--active': active,
            'ds-tabbed-nav__item--visited': visited,
            'ds-tabbed-nav__item--clickable': clickable,
            'ds-tabbed-nav__item--disabled': disabled
          },
          className
        )}
      >
        {children}
      </li>
      <li className={classnames(
        'ds-tabbed-nav__separator',
        {
          'ds-tabbed-nav__separator--has-progress': showProgress
        }
      )}></li>
    </React.Fragment>
  )
}

TabbedNavigationItem.defaultProps = {
  active: false,
  visited: false,
  showProgress: false,
  clickable: false,
  disabled: false,
  onClick: () => {}
}

export default TabbedNavigationItem
