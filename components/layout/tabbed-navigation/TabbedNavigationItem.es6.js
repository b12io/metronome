
import * as React from 'react'
import classnames from 'classnames'


const TabbedNavigationItem = ({ active = false, visited = false, showProgress = false, clickable = false, disabled = false, className, onClick = () => {}, children }) => {
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

export default TabbedNavigationItem
